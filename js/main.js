// BeldiaTours Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // ---- NAV SCROLL ----
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- MOBILE NAV ----
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileNav.style.display = isOpen ? 'flex' : 'none';
      const spans = toggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileNav.style.display = 'none';
        toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // ---- HERO SLIDER ----
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0;
  if (slides.length > 1) {
    function goSlide(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    dots.forEach((dot, i) => dot.addEventListener('click', () => goSlide(i)));
    setInterval(() => goSlide(current + 1), 5000);
  }

  // ---- SCROLL REVEAL ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  // ---- BACK TO TOP ----
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- TESTIMONIALS CAROUSEL ----
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');
  if (track && prevBtn && nextBtn) {
    let pos = 0;
    const cards = track.querySelectorAll('.testimonial-card');
    const maxPos = Math.max(0, cards.length - 3);
    prevBtn.addEventListener('click', () => {
      pos = Math.max(0, pos - 1);
      track.style.transform = `translateX(-${pos * 376}px)`;
    });
    nextBtn.addEventListener('click', () => {
      pos = Math.min(maxPos, pos + 1);
      track.style.transform = `translateX(-${pos * 376}px)`;
    });
  }

  // ---- COUNTER ANIMATION ----
  document.querySelectorAll('.counter-num').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      counter.textContent = Math.floor(count) + suffix;
      if (count >= target) clearInterval(timer);
    }, 30);
  });

  // ---- ITINERARY ACCORDIONS ----
  document.querySelectorAll('.itinerary-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.itinerary-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.itinerary-header').forEach(h => h.classList.remove('open'));
      if (!isOpen) { body.classList.add('open'); header.classList.add('open'); }
    });
  });

  // ---- YEAR ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
