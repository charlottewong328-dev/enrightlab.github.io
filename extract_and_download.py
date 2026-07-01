#!/usr/bin/env python3
import re, json, os, hashlib, subprocess
from html import unescape
from urllib.parse import unquote, urlparse

BASE = "https://michaelenright.wixsite.com/enright-lab"
ROOT = "/Users/charlottewong/enright-lab-join"
SCRAPE = os.path.join(ROOT, "scrape")
OUT_DIR = os.path.join(ROOT, "images")
PAGES = [("home", ""), ("research", "/research"), ("members", "/members"),
         ("publications", "/publications"), ("join", "/join"), ("contact", "/contact")]

os.makedirs(SCRAPE, exist_ok=True)
os.makedirs(OUT_DIR, exist_ok=True)

CURL_BASE = [
    "curl", "-fsSL",
    "-A", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "-H", "Accept-Language: en-US,en;q=0.9",
]

def curl(url, out):
    subprocess.run([*CURL_BASE, url, "-o", out], check=True)

for pname, path in PAGES:
    url = BASE + path
    out = os.path.join(SCRAPE, f"{pname}.html")
    print(f"Fetching {url}")
    curl(url, out)

def normalize_wix_url(u):
    u = unescape(u).strip().replace("\\/", "/")
    m = re.search(r"(https://static\.wixstatic\.com/media/[^\"\'\s<>\\]+)", u)
    if not m:
        return None, None
    full = re.sub(r"[~#].*$", "", m.group(1))
    key = re.sub(r"/v1/fill/.*$", "", full)
    key = re.sub(r"\?.*$", "", key)
    return key, full

def filename_from_url(url):
    path = urlparse(url).path
    name = unquote(path.split("/")[-1])
    name = re.sub(r"~mv2\.[^.]+$", "", name)
    if not re.search(r"\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)$", name, re.I):
        ext_m = re.search(r"~mv2\.(\w+)", url)
        ext = ext_m.group(1) if ext_m else "jpg"
        name = (name or hashlib.md5(url.encode()).hexdigest()[:12]) + f".{ext}"
    return re.sub(r"[^\w.\-]+", "_", name)[:120]

def extract_images(html, page_name):
    entries = []
    for m in re.finditer(r"https://static\.wixstatic\.com/media/[^\"\'\s<>\\]+", html):
        key, full = normalize_wix_url(m.group(0))
        if not key:
            continue
        start = max(0, m.start() - 2500)
        chunk = html[start:m.end() + 2500]
        alt_m = re.search(r"alt=\"([^\"]*)\"", chunk)
        alt = unescape(alt_m.group(1)).strip() if alt_m else None
        if alt == "":
            alt = None
        heading = None
        for hm in re.finditer(r"<h[1-6][^>]*>([^<]+)</h[1-6]>", chunk, re.I):
            heading = unescape(hm.group(1)).strip()
        title_m = re.search(r"title=\"([^\"]*)\"", chunk)
        title = unescape(title_m.group(1)).strip() if title_m else None
        if title == "":
            title = None
        entries.append({"page": page_name, "url_key": key, "url": full, "filename_hint": filename_from_url(key),
                        "alt": alt, "nearby_heading": heading, "title": title})
    return entries

all_by_key = {}
page_urls = {}
for pname, _ in PAGES:
    html = open(os.path.join(SCRAPE, f"{pname}.html"), encoding="utf-8").read()
    imgs = extract_images(html, pname)
    page_urls[pname] = sorted({e["url_key"] for e in imgs})
    for e in imgs:
        k = e["url_key"]
        if k not in all_by_key:
            all_by_key[k] = {"url": e["url"], "filename_hint": e["filename_hint"], "pages": set(), "contexts": []}
        all_by_key[k]["pages"].add(pname)
        ctx = {x: e[x] for x in ("page", "alt", "nearby_heading", "title", "filename_hint") if e.get(x)}
        if ctx not in all_by_key[k]["contexts"]:
            all_by_key[k]["contexts"].append(ctx)

members_html = open(os.path.join(SCRAPE, "members.html"), encoding="utf-8").read()
member_photos = []
for block in re.findall(r"<script[^>]*>(.*?)</script>", members_html, re.S | re.I):
    if "static.wixstatic.com/media" not in block:
        continue
    for name_m in re.finditer(r"\"((?:Dr\.?\s+)?[A-Z][a-z]+(?:\s+[A-Z][\.']?\s*)?[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\"", block):
        name = name_m.group(1)
        if len(name) < 6 or name in ("San Francisco", "Enright Lab"):
            continue
        sub = block[max(0, name_m.start()-800):name_m.end()+2000]
        um = re.search(r"https://static\.wixstatic\.com/media/[^\"\'\s\\]+", sub)
        if um:
            key, full = normalize_wix_url(um.group(0))
            if key:
                member_photos.append({"name": name, "url_key": key, "url": full})

# strip HTML entities in wix json
for m in re.finditer(r"wix:image://v1/([^/]+)/[^\"\']+\"[^\"\']*\"([^\"\']{3,80})\"", members_html):
    fid, label = m.group(1), m.group(2)
    um = re.search(rf"static\.wixstatic\.com/media/{re.escape(fid)}", members_html)
    if um:
        full_m = re.search(rf"https://static\.wixstatic\.com/media/{re.escape(fid)}[^\"\'\s]*", members_html)
        if full_m:
            key, full = normalize_wix_url(full_m.group(0))
            if key:
                member_photos.append({"name": label, "url_key": key, "url": full})

seen_names = {}
for mp in member_photos:
    if mp["name"] not in seen_names:
        seen_names[mp["name"]] = mp

used_names = {}
mapping = {}
for key, info in sorted(all_by_key.items(), key=lambda x: x[1]["filename_hint"]):
    hint = info["filename_hint"]
    base, ext = os.path.splitext(hint)
    ext = ext or ".jpg"
    fname = hint
    n = 1
    while fname.lower() in used_names and used_names[fname.lower()] != key:
        fname = f"{base}_{n}{ext}"
        n += 1
    used_names[fname.lower()] = key
    path = os.path.join(OUT_DIR, fname)
    status = "ok"
    try:
        subprocess.run([*CURL_BASE, key, "-o", path], check=True)
    except subprocess.CalledProcessError:
        try:
            subprocess.run([*CURL_BASE, info["url"], "-o", path], check=True)
            status = "ok_via_transform_url"
        except subprocess.CalledProcessError as ex:
            path = None
            status = f"failed: {ex}"
    purposes = []
    for c in info["contexts"]:
        parts = [c.get("alt"), c.get("nearby_heading"), c.get("title"), c.get("filename_hint")]
        purposes.append(" | ".join(p for p in parts if p) or c.get("page"))
    mapping[key] = {"local_path": path, "filename": fname, "url": key, "download_status": status,
                    "pages": sorted(info["pages"]), "purpose_hints": purposes}

result = {
    "image_mapping": mapping,
    "by_page": page_urls,
    "member_name_to_photo": {
        name: {"local_path": mapping.get(d["url_key"], {}).get("local_path"),
               "filename": mapping.get(d["url_key"], {}).get("filename"),
               "url": d["url_key"]}
        for name, d in sorted(seen_names.items())
    },
    "stats": {"unique_images": len(all_by_key), "downloaded": sum(1 for v in mapping.values() if v["local_path"])},
}
out_json = os.path.join(ROOT, "image_mapping.json")
with open(out_json, "w") as f:
    json.dump(result, f, indent=2)
print(json.dumps(result, indent=2))
