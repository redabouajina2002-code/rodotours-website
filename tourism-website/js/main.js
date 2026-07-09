/* ============================================
   BELDIA TOURS - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroSlider();
  initScrollReveal();
  initTestimonialsSlider();
  initCounters();
  initItinerary();
  initGallery();
  initForms();
  initBackToTop();
  initFilterButtons();
  initWhatsAppFloat();
});

/* ============================================
   NAVIGATION
   ============================================ */
function initNav() {
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const langBtns = document.querySelectorAll('.lang-btn');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Scrolled state
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-to-top')?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  nav?.classList.toggle('scrolled', window.scrollY > 60);

  // Active nav link
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href')?.split('/').pop();
    if (href === currentPage || (currentPage === 'index.html' && href === '') || 
        (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Hamburger toggle
  toggle?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.toggle('open');
    if (mobileNav) mobileNav.style.display = isOpen ? 'flex' : 'none';
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile nav on link click
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileNav.style.display = 'none';
    });
  });

  // Language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ============================================
   HERO SLIDER
   ============================================ */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  startTimer();
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/* ============================================
   TESTIMONIALS SLIDER
   ============================================ */
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.querySelector('#testimonials-prev');
  const nextBtn = document.querySelector('#testimonials-next');
  if (!track) return;

  let current = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const visible = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  const max = () => Math.max(0, cards.length - visible());

  function update() {
    const cardW = cards[0]?.offsetWidth + 24;
    track.style.transform = `translateX(-${current * cardW}px)`;
  }

  prevBtn?.addEventListener('click', () => { current = Math.max(0, current - 1); update(); });
  nextBtn?.addEventListener('click', () => { current = Math.min(max(), current + 1); update(); });
  window.addEventListener('resize', update, { passive: true });

  // Auto-slide
  setInterval(() => {
    current = current >= max() ? 0 : current + 1;
    update();
  }, 4500);
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const tick = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current.toLocaleString() + suffix;
          if (current >= target) clearInterval(tick);
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================
   ITINERARY ACCORDION
   ============================================ */
function initItinerary() {
  document.querySelectorAll('.itinerary-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body?.classList.contains('open');
      // Close all
      document.querySelectorAll('.itinerary-header').forEach(h => {
        h.classList.remove('open');
        h.nextElementSibling?.classList.remove('open');
        const icon = h.querySelector('i');
        if (icon) { icon.style.transform = ''; }
      });
      if (!isOpen) {
        header.classList.add('open');
        body?.classList.add('open');
        const icon = header.querySelector('i');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ============================================
   GALLERY LIGHTBOX
   ============================================ */
function initGallery() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Gallery filter
  document.querySelectorAll('.gallery-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.gallery-filter .filter-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      const category = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================
   FILTER BUTTONS
   ============================================ */
function initFilterButtons() {
  document.querySelectorAll('.tours-filter-bar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tours-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.tour-full-card, .tour-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================
   FORMS
   ============================================ */
function initForms() {
  // Contact form
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const name = contactForm.querySelector('[name="name"]')?.value?.trim();
    const email = contactForm.querySelector('[name="email"]')?.value?.trim();
    const message = contactForm.querySelector('[name="message"]')?.value?.trim();

    if (!name || !email || !message) {
      showToast(t('contact_error'), 'error');
      return;
    }

    btn.textContent = t('contact_sending');
    btn.disabled = true;

    try {
      // Save to table
      await saveInquiry({
        name,
        email,
        phone: contactForm.querySelector('[name="phone"]')?.value || '',
        tour: contactForm.querySelector('[name="tour"]')?.value || '',
        travel_date: contactForm.querySelector('[name="date"]')?.value || '',
        travelers: contactForm.querySelector('[name="travelers"]')?.value || '',
        message
      });
      showToast(t('contact_success'), 'success');
      contactForm.reset();
    } catch (err) {
      showToast(t('error_generic'), 'error');
    } finally {
      btn.textContent = t('contact_send');
      btn.disabled = false;
    }
  });

  // Newsletter form
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailEl = form.querySelector('[name="newsletter_email"]');
      const email = emailEl?.value?.trim();
      if (!email) return;
      try {
        await saveNewsletter(email);
        showToast('Subscribed! Thank you 🎉', 'success');
        form.reset();
      } catch (err) {
        showToast(t('error_generic'), 'error');
      }
    });
  });

  // Booking modal
  const modal = document.getElementById('booking-modal');
  const modalOverlay = document.getElementById('modal-overlay');

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourName = btn.dataset.tour || '';
      const tourSelect = document.getElementById('modal-tour-select');
      if (tourSelect && tourName) tourSelect.value = tourName;
      modalOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

  document.getElementById('booking-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = t('contact_sending');
    try {
      await saveInquiry({
        name: form.querySelector('[name="bk_name"]')?.value || '',
        email: form.querySelector('[name="bk_email"]')?.value || '',
        phone: form.querySelector('[name="bk_phone"]')?.value || '',
        tour: form.querySelector('[name="bk_tour"]')?.value || '',
        travel_date: form.querySelector('[name="bk_date"]')?.value || '',
        travelers: form.querySelector('[name="bk_travelers"]')?.value || '',
        message: 'Booking request from modal'
      });
      showToast(t('contact_success'), 'success');
      closeModal();
      form.reset();
    } catch (err) {
      showToast(t('error_generic'), 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = t('modal_book_btn');
    }
  });

  function closeModal() {
    modalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================
   DATA PERSISTENCE (Table API)
   ============================================ */
async function saveInquiry(data) {
  const res = await fetch('tables/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, lang: currentLang, submitted_at: new Date().toISOString() })
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

async function saveNewsletter(email) {
  const res = await fetch('tables/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, subscribed_at: new Date().toISOString() })
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  existing?.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="margin-right:.5rem"></i>${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   WHATSAPP FLOAT
   ============================================ */
function initWhatsAppFloat() {
  // Nothing extra needed — handled in HTML link
}

/* ============================================
   SMOOTH ANCHOR SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    }
  });
});

/* ============================================
   LAZY IMAGE LOADING
   ============================================ */
if ('IntersectionObserver' in window) {
  const lazyImgs = document.querySelectorAll('img[data-src]');
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  lazyImgs.forEach(img => imgObserver.observe(img));
}

/* ============================================
   ITINERARY ACCORDIONS
   ============================================ */
function initItinerary() {
  document.querySelectorAll('.itinerary-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.itinerary-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.itinerary-header').forEach(h => h.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.itinerary-header')) initItinerary();
});
