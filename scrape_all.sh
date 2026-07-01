#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export CURL_OPTS=(-fsSL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" -H "Accept-Language: en-US,en;q=0.9")
python3 scrape/extract_and_download.py "$@"
