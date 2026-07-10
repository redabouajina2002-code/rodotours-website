// BeldiaTours Translation System
const translations = {
  en: {
    nav_home: "Home", nav_tours: "Tours", nav_destinations: "Destinations",
    nav_gallery: "Gallery", nav_testimonials: "Testimonials", nav_blog: "Blog",
    nav_contact: "Contact", nav_book: "Book Now",
    hero_badge: "✨ Authentic Moroccan Experiences",
    hero_title: "Discover the Magic of", hero_title_accent: "Morocco",
    hero_sub: "Explore ancient medinas, golden deserts, and majestic mountains with your trusted local guide.",
    hero_cta_book: "Book Your Tour", hero_cta_contact: "Contact Us",
    about_label: "About Us", about_title: "Your Trusted Moroccan Travel Experts",
    about_text1: "Beldia Tours is a premier Moroccan travel agency dedicated to providing authentic, memorable, and fully customized travel experiences.",
    about_text2: "From the golden dunes of the Sahara to the blue streets of Chefchaouen — we craft every journey with care and genuine Moroccan hospitality.",
    why_title: "The Beldia Tours Difference",
    footer_desc: "Your trusted Moroccan travel partner for authentic, personalized adventures.",
    footer_rights: "All rights reserved."
  },
  es: {
    nav_home: "Inicio", nav_tours: "Tours", nav_destinations: "Destinos",
    nav_gallery: "Galería", nav_testimonials: "Testimonios", nav_blog: "Blog",
    nav_contact: "Contacto", nav_book: "Reservar",
    hero_badge: "✨ Experiencias Auténticas de Marruecos",
    hero_title: "Descubre la Magia de", hero_title_accent: "Marruecos",
    hero_sub: "Explora antiguas medinas, desiertos dorados y majestuosas montañas con tu guía local de confianza.",
    hero_cta_book: "Reserva Tu Tour", hero_cta_contact: "Contáctanos",
    about_label: "Sobre Nosotros", about_title: "Tus Expertos de Viaje Marroquíes",
    about_text1: "Beldia Tours es una agencia de viajes marroquí líder dedicada a ofrecer experiencias auténticas y personalizadas.",
    about_text2: "Desde las dunas doradas del Sahara hasta las calles azules de Chefchaouen — creamos cada viaje con cuidado y hospitalidad marroquí.",
    why_title: "La Diferencia de Beldia Tours",
    footer_desc: "Tu socio de viaje marroquí de confianza para aventuras auténticas y personalizadas.",
    footer_rights: "Todos los derechos reservados."
  },
  fr: {
    nav_home: "Accueil", nav_tours: "Tours", nav_destinations: "Destinations",
    nav_gallery: "Galerie", nav_testimonials: "Témoignages", nav_blog: "Blog",
    nav_contact: "Contact", nav_book: "Réserver",
    hero_badge: "✨ Expériences Marocaines Authentiques",
    hero_title: "Découvrez la Magie du", hero_title_accent: "Maroc",
    hero_sub: "Explorez les médinas anciennes, les déserts dorés et les montagnes majestueuses avec votre guide local.",
    hero_cta_book: "Réservez Votre Tour", hero_cta_contact: "Nous Contacter",
    about_label: "À Propos", about_title: "Vos Experts de Voyage Marocains",
    about_text1: "Beldia Tours est une agence de voyage marocaine de premier plan dédiée à offrir des expériences authentiques et personnalisées.",
    about_text2: "Des dunes dorées du Sahara aux rues bleues de Chefchaouen — nous créons chaque voyage avec soin et hospitalité marocaine.",
    why_title: "La Différence Beldia Tours",
    footer_desc: "Votre partenaire de voyage marocain de confiance pour des aventures authentiques.",
    footer_rights: "Tous droits réservés."
  }
};

let currentLang = localStorage.getItem('beldia_lang') || 'en';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('beldia_lang', lang);
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
  });
  applyTranslations(currentLang);
});
