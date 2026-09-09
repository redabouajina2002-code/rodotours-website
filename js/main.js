// Beldia Tours — refined interactions

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // NAV: scroll state + active page
  const nav = document.getElementById('main-nav');
  const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 40);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop().toLowerCase();
    if (href === currentPage) link.classList.add('active-page');
  });

  // MOBILE NAV
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    const setMenu = open => {
      mobileNav.classList.toggle('open', open);
      mobileNav.style.display = open ? 'flex' : 'none';
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      const spans = toggle.querySelectorAll('span');
      spans.forEach((s, i) => {
        s.style.transform = open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : '') : '';
        s.style.opacity = open && i === 1 ? '0' : '';
      });
    };
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => setMenu(!mobileNav.classList.contains('open')));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  }

  // HERO SLIDER — pauses on hover/focus and supports keyboard arrows
  const hero = document.getElementById('hero');
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dot')];
  let current = 0;
  let timer = null;
  let paused = false;

  const goSlide = n => {
    if (!slides.length) return;
    slides[current]?.classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current]?.classList.add('active');
    dots[current]?.classList.add('active');
  };
  const startSlider = () => {
    if (reduceMotion || slides.length < 2) return;
    clearInterval(timer);
    timer = setInterval(() => { if (!paused) goSlide(current + 1); }, 5200);
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goSlide(i); startSlider(); }));
  if (hero && slides.length > 1) {
    hero.addEventListener('mouseenter', () => { paused = true; });
    hero.addEventListener('mouseleave', () => { paused = false; });
    hero.addEventListener('focusin', () => { paused = true; });
    hero.addEventListener('focusout', () => { paused = false; });
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') goSlide(current + 1);
      if (e.key === 'ArrowLeft') goSlide(current - 1);
    });
    startSlider();
  }

  // SCROLL REVEAL
  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(el => observer.observe(el));
  } else revealItems.forEach(el => el.classList.add('revealed'));

  // BACK TO TOP
  const btt = document.getElementById('back-to-top');
  if (btt) {
    const updateBtt = () => btt.classList.toggle('visible', window.scrollY > 500);
    window.addEventListener('scroll', updateBtt, { passive: true });
    updateBtt();
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  }

  // TESTIMONIALS CAROUSEL — responsive card width
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');
  if (track && prevBtn && nextBtn) {
    let pos = 0;
    const cards = [...track.querySelectorAll('.testimonial-card')];
    const getVisible = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 950 ? 2 : 3;
    const render = () => {
      const gap = parseFloat(getComputedStyle(track).gap || 24);
      const width = cards[0]?.getBoundingClientRect().width || 352;
      const max = Math.max(0, cards.length - getVisible());
      pos = Math.min(pos, max);
      track.style.transform = `translateX(-${pos * (width + gap)}px)`;
    };
    prevBtn.addEventListener('click', () => { pos = Math.max(0, pos - 1); render(); });
    nextBtn.addEventListener('click', () => { pos += 1; render(); });
    window.addEventListener('resize', render);
    render();
  }

  // COUNTERS — only animate when visible
  document.querySelectorAll('.counter-num').forEach(counter => {
    const target = parseInt(counter.dataset.target || '0', 10);
    const suffix = counter.dataset.suffix || '';
    if (!target) return;
    const animate = () => {
      const duration = 1100;
      const start = performance.now();
      const frame = now => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    if (reduceMotion) counter.textContent = target + suffix;
    else if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { animate(); io.disconnect(); } });
      io.observe(counter);
    } else animate();
  });

  // ITINERARY ACCORDIONS
  document.querySelectorAll('.itinerary-header').forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    const toggleAccordion = () => {
      const body = header.nextElementSibling;
      if (!body) return;
      const open = body.classList.contains('open');
      document.querySelectorAll('.itinerary-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.itinerary-header').forEach(h => h.classList.remove('open'));
      if (!open) { body.classList.add('open'); header.classList.add('open'); }
    };
    header.addEventListener('click', toggleAccordion);
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAccordion(); } });
  });

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  // Current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
