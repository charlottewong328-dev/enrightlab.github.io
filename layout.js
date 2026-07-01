const PAGES = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'research.html', label: 'Research', id: 'research' },
  { href: 'members.html', label: 'Members', id: 'members' },
  { href: 'publications.html', label: 'Publications', id: 'publications' },
  { href: 'join.html', label: 'Join', id: 'join' },
  { href: 'contact.html', label: 'Contact', id: 'contact' },
];

function renderShell(activeId) {
  const navLinks = PAGES.map(
    (p) =>
      `<a href="${p.href}" class="${p.id === activeId ? 'nav-active' : ''}"${
        p.id === activeId ? ' aria-current="page"' : ''
      }>${p.label}</a>`
  ).join('');

  const mobileLinks = PAGES.map(
    (p) =>
      `<a href="${p.href}"${p.id === activeId ? ' aria-current="page"' : ''}>${p.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="grain" aria-hidden="true"></div>
    <header class="header">
      <a href="index.html" class="logo">
        <span class="logo-mark">E</span>
        <span class="logo-text">Enright Lab</span>
      </a>
      <nav class="nav" aria-label="Main navigation">${navLinks}</nav>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span>
      </button>
    </header>
    <div class="mobile-nav" hidden><nav aria-label="Mobile navigation">${mobileLinks}</nav></div>`
  );

  document.body.insertAdjacentHTML(
    'beforeend',
    `<footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${IMAGES.sfsuShield}" alt="SFSU shield" class="footer-shield" width="72" height="72">
          <div>
            <strong>The Enright Lab</strong>
            <p>Department of Chemistry and Biochemistry<br>San Francisco State University</p>
          </div>
        </div>
        <div class="footer-links">
          <div>
            <h3>Navigate</h3>
            ${PAGES.map((p) => `<a href="${p.href}">${p.label}</a>`).join('')}
          </div>
          <div>
            <h3>Contact</h3>
            <p>Science and Engineering Innovation Center (SEIC) 304</p>
            <a href="mailto:enrightm@sfsu.edu">enrightm@sfsu.edu</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} The Enright Lab, SFSU</p>
        <a href="https://chemistry.sfsu.edu/michael-enright" target="_blank" rel="noopener noreferrer">SFSU Chemistry Department</a>
      </div>
    </footer>`
  );
}

function pageHero(title, subtitle, image) {
  return `<section class="page-hero">
    <img src="${image}" alt="" class="page-hero-bg" loading="eager">
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="eyebrow reveal">The Enright Lab</p>
      <h1 class="page-hero-title reveal">${title}</h1>
      ${subtitle ? `<p class="page-hero-sub reveal">${subtitle}</p>` : ''}
    </div>
  </section>`;
}

function initReveal() {
  const revealElements = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
  );
  revealElements.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.04, 0.35)}s`;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      el.classList.add('visible');
      return;
    }
    observer.observe(el);
  });
}

function initShell() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  let lastScroll = 0;
  const header = document.querySelector('.header');
  header.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  window.addEventListener(
    'scroll',
    () => {
      const current = window.scrollY;
      header.style.transform = current > lastScroll && current > 100 ? 'translateY(-100%)' : 'translateY(0)';
      lastScroll = current;
    },
    { passive: true }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  initShell();
  initReveal();
});
