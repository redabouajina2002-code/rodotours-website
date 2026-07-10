// BeldiaTours — Full Page Translation System
// Replaces ALL page content when language changes

const LANG_DATA = {

  en: {
    // META
    page_title: "Beldia Tours – Authentic Morocco Travel Experiences",

    // NAV
    nav: ["Home","Tours","Destinations","Gallery","Testimonials","Blog","Contact"],
    nav_whatsapp: "WhatsApp",
    nav_book: "Book Now",

    // HERO
    hero_badge: "✨ Authentic Moroccan Experiences",
    hero_tagline: "Your Journey, Our Passion",
    hero_title: "Discover the Magic of",
    hero_accent: "Morocco",
    hero_sub: "Explore ancient medinas, golden deserts, and majestic mountains with your trusted local guide. Personalized tours crafted for unforgettable memories.",
    hero_book: "Book Your Tour",
    hero_contact: "Contact Us",

    // TRIPADVISOR STRIP
    trip_rated: "Rated Excellent",
    trip_quote: '"Verified reviews from travelers around the world"',
    trip_btn: "Read Reviews →",

    // STATS
    stats: ["Tours Completed","Countries Served","Happy Travelers","Years Experience"],

    // ABOUT
    about_label: "About Us",
    about_title: "Your Trusted Moroccan Travel Experts",
    about_p1: "Beldia Tours is a premier Moroccan travel agency dedicated to providing authentic, memorable, and fully customized travel experiences. We are passionate local experts who know every corner of this magnificent country.",
    about_p2: "From the golden dunes of the Sahara to the blue streets of Chefchaouen — we craft every journey with care, expertise, and genuine Moroccan hospitality.",
    about_btn: "Plan Your Trip",
    about_values: ["Local Expert Guides","Personalized Service","Safe & Reliable","Transparent Pricing","24/7 Support","Multilingual Team"],

    // TOURS
    tours_label: "Our Tours",
    tours_title: "Most Popular Experiences",
    tours_view: "View All Tours",
    tours_book: "Book Now",
    tours_price: "Contact Us",
    tour_days: ["3-4 days","7 days","2 days"],
    tour_type: "Private",
    tour_names: ["Marrakech to Merzouga Desert","Imperial Cities Grand Tour","Atlas Mountains Excursion"],
    tour_descs: [
      "Experience the magic of the Sahara — camel treks, stargazing camps, golden dunes at sunrise.",
      "Journey through Marrakech, Fes, Meknes, and Rabat — Morocco's greatest imperial cities.",
      "Trek through Berber villages, waterfalls, and breathtaking mountain scenery."
    ],
    tour_tags: [
      ["🐪 Camel Trek","🌅 Sunrise","⭐ Desert Camp"],
      ["🕌 Medinas","🎨 Souks","🏰 Palaces"],
      ["🥾 Trekking","🏘️ Berber Village","💧 Waterfalls"]
    ],
    tour_reviews: ["14 reviews","8 reviews","6 reviews"],

    // WHY US
    why_label: "Why Choose Us",
    why_title: "The Beldia Tours Difference",
    why_cards: [
      ["Local Expert Guides","Born and raised in Morocco, our guides share authentic stories and hidden gems."],
      ["Fully Customized","Every tour tailored to your interests, pace, and preferences."],
      ["Safe Travel","Licensed and committed to your safety throughout every journey."],
      ["Comfortable Transport","Air-conditioned vehicles, experienced drivers, premium comfort."],
      ["Multilingual Team","Fluent in English, Spanish, French, Arabic, and Berber."],
      ["Transparent Pricing","No hidden fees. Clear pricing from the start."],
      ["24/7 Support","Round-the-clock assistance before, during, and after your trip."],
      ["Handpicked Hotels","Carefully selected riads and hotels for authentic comfort."]
    ],

    // DESTINATIONS
    dest_label: "Destinations",
    dest_title: "Explore Morocco's Finest",
    dest_btn: "Explore All Destinations",
    dest_names: ["Marrakech","Merzouga","Fes","Chefchaouen","Aït Ben Haddou"],
    dest_subs: ["🌹 The Red City","🏜️ Sahara Desert","🏛️ Imperial City","🔵 Blue City","🏯 UNESCO Site"],

    // TESTIMONIALS
    test_label: "Testimonials",
    test_title: "What Travelers Say",
    test_btn: "Read All Reviews",

    // BLOG
    blog_label: "Travel Blog",
    blog_title: "Morocco Travel Guides & Tips",
    blog_btn: "Read All Articles",
    blog_cats: ["Travel Tips","Desert & Sahara","Destinations"],
    blog_titles: [
      "Best Time to Visit Morocco: A Complete Seasonal Guide",
      "The Complete Sahara Desert Guide",
      "Marrakech Travel Guide: The 15 Best Things to Do"
    ],
    blog_descs: [
      "Discover when to visit Morocco for the best weather and most memorable experiences.",
      "Our insider guide to make your desert experience absolutely perfect.",
      "The 15 experiences you cannot miss in the Red City — from local experts."
    ],
    blog_meta: ["July 2025 · 8 min read","June 2025 · 10 min read","May 2025 · 9 min read"],

    // CTA
    cta_label: "🌟 Start Your Journey",
    cta_title: "Ready for Your Moroccan Adventure?",
    cta_desc: "Contact us today and let us create your perfect personalized Moroccan journey.",
    cta_book: "Book Your Tour",
    cta_whatsapp: "WhatsApp Us",

    // FOOTER
    footer_desc: "Your trusted Moroccan travel partner for authentic, personalized adventures across the Kingdom of Morocco.",
    footer_cols: ["Quick Links","Our Tours","Contact"],
    footer_links: ["Home","Tours","Destinations","Gallery","Testimonials","Blog","Contact"],
    footer_tours: ["Marrakech to Merzouga","Imperial Cities Tour","Sahara Luxury","Atlas Mountains","Chefchaouen Tour"],
    footer_rights: "All rights reserved. | Your Journey, Our Passion"
  },

  es: {
    page_title: "Beldia Tours – Experiencias Auténticas en Marruecos",
    nav: ["Inicio","Tours","Destinos","Galería","Testimonios","Blog","Contacto"],
    nav_whatsapp: "WhatsApp",
    nav_book: "Reservar",
    hero_badge: "✨ Experiencias Auténticas de Marruecos",
    hero_tagline: "Tu Viaje, Nuestra Pasión",
    hero_title: "Descubre la Magia de",
    hero_accent: "Marruecos",
    hero_sub: "Explora antiguas medinas, desiertos dorados y majestuosas montañas con tu guía local de confianza. Tours personalizados para recuerdos inolvidables.",
    hero_book: "Reserva Tu Tour",
    hero_contact: "Contáctanos",
    trip_rated: "Calificado Excelente",
    trip_quote: '"Reseñas verificadas de viajeros de todo el mundo"',
    trip_btn: "Leer Reseñas →",
    stats: ["Tours Completados","Países Atendidos","Viajeros Felices","Años de Experiencia"],
    about_label: "Sobre Nosotros",
    about_title: "Tus Expertos de Viaje Marroquíes de Confianza",
    about_p1: "Beldia Tours es una agencia de viajes marroquí líder dedicada a proporcionar experiencias de viaje auténticas, memorables y totalmente personalizadas. Somos expertos locales apasionados que conocen cada rincón de este magnífico país.",
    about_p2: "Desde las dunas doradas del Sahara hasta las calles azules de Chefchaouen — creamos cada viaje con cuidado, experiencia y auténtica hospitalidad marroquí.",
    about_btn: "Planifica Tu Viaje",
    about_values: ["Guías Locales Expertos","Servicio Personalizado","Seguro y Fiable","Precios Transparentes","Soporte 24/7","Equipo Multilingüe"],
    tours_label: "Nuestros Tours",
    tours_title: "Experiencias Más Populares",
    tours_view: "Ver Todos los Tours",
    tours_book: "Reservar Ahora",
    tours_price: "Contáctanos",
    tour_days: ["3-4 días","7 días","2 días"],
    tour_type: "Privado",
    tour_names: ["Marrakech al Desierto de Merzouga","Gran Tour de Ciudades Imperiales","Excursión a las Montañas del Atlas"],
    tour_descs: [
      "Experimenta la magia del Sahara — paseos en camello, campamentos bajo las estrellas, dunas al amanecer.",
      "Viaja por Marrakech, Fez, Meknes y Rabat — las más grandes ciudades imperiales de Marruecos.",
      "Senderismo por aldeas bereberes, cascadas y paisajes montañosos impresionantes."
    ],
    tour_tags: [
      ["🐪 Paseo en Camello","🌅 Amanecer","⭐ Campamento"],
      ["🕌 Medinas","🎨 Zocos","🏰 Palacios"],
      ["🥾 Senderismo","🏘️ Aldea Bereber","💧 Cascadas"]
    ],
    tour_reviews: ["14 reseñas","8 reseñas","6 reseñas"],
    why_label: "Por Qué Elegirnos",
    why_title: "La Diferencia de Beldia Tours",
    why_cards: [
      ["Guías Locales Expertos","Nacidos en Marruecos, nuestros guías comparten historias auténticas y lugares ocultos."],
      ["Totalmente Personalizado","Cada tour adaptado a tus intereses, ritmo y preferencias."],
      ["Viaje Seguro","Con licencia y comprometidos con tu seguridad en cada viaje."],
      ["Transporte Cómodo","Vehículos climatizados, conductores experimentados, máximo confort."],
      ["Equipo Multilingüe","Fluido en inglés, español, francés, árabe y bereber."],
      ["Precios Transparentes","Sin tarifas ocultas. Precios claros desde el principio."],
      ["Soporte 24/7","Asistencia las 24 horas antes, durante y después de tu viaje."],
      ["Hoteles Seleccionados","Riads y hoteles cuidadosamente seleccionados para un confort auténtico."]
    ],
    dest_label: "Destinos",
    dest_title: "Explora lo Mejor de Marruecos",
    dest_btn: "Explorar Todos los Destinos",
    dest_names: ["Marrakech","Merzouga","Fez","Chefchaouen","Aït Ben Haddou"],
    dest_subs: ["🌹 La Ciudad Roja","🏜️ Desierto del Sahara","🏛️ Ciudad Imperial","🔵 La Ciudad Azul","🏯 Patrimonio UNESCO"],
    test_label: "Testimonios",
    test_title: "Lo Que Dicen los Viajeros",
    test_btn: "Leer Todas las Reseñas",
    blog_label: "Blog de Viajes",
    blog_title: "Guías y Consejos para Viajar a Marruecos",
    blog_btn: "Leer Todos los Artículos",
    blog_cats: ["Consejos de Viaje","Desierto y Sahara","Destinos"],
    blog_titles: [
      "Mejor Época para Visitar Marruecos: Guía Completa por Meses",
      "La Guía Completa del Desierto del Sahara",
      "Guía de Marrakech: Las 15 Mejores Cosas que Hacer"
    ],
    blog_descs: [
      "Descubre cuándo visitar Marruecos para el mejor tiempo y experiencias más memorables.",
      "Nuestra guía experta para que tu experiencia en el desierto sea perfecta.",
      "Las 15 experiencias que no puedes perderte en la Ciudad Roja."
    ],
    blog_meta: ["Julio 2025 · 8 min","Junio 2025 · 10 min","Mayo 2025 · 9 min"],
    cta_label: "🌟 Comienza Tu Viaje",
    cta_title: "¿Listo para Tu Aventura Marroquí?",
    cta_desc: "Contáctanos hoy y déjanos crear tu perfecto viaje personalizado por Marruecos.",
    cta_book: "Reserva Tu Tour",
    cta_whatsapp: "Escríbenos por WhatsApp",
    footer_desc: "Tu socio de viaje marroquí de confianza para aventuras auténticas y personalizadas por el Reino de Marruecos.",
    footer_cols: ["Enlaces Rápidos","Nuestros Tours","Contacto"],
    footer_links: ["Inicio","Tours","Destinos","Galería","Testimonios","Blog","Contacto"],
    footer_tours: ["Marrakech a Merzouga","Tour Ciudades Imperiales","Sahara de Lujo","Montañas del Atlas","Tour Chefchaouen"],
    footer_rights: "Todos los derechos reservados. | Tu Viaje, Nuestra Pasión"
  },

  fr: {
    page_title: "Beldia Tours – Expériences Authentiques au Maroc",
    nav: ["Accueil","Tours","Destinations","Galerie","Témoignages","Blog","Contact"],
    nav_whatsapp: "WhatsApp",
    nav_book: "Réserver",
    hero_badge: "✨ Expériences Marocaines Authentiques",
    hero_tagline: "Votre Voyage, Notre Passion",
    hero_title: "Découvrez la Magie du",
    hero_accent: "Maroc",
    hero_sub: "Explorez les médinas anciennes, les déserts dorés et les montagnes majestueuses avec votre guide local de confiance. Des tours personnalisés pour des souvenirs inoubliables.",
    hero_book: "Réservez Votre Tour",
    hero_contact: "Nous Contacter",
    trip_rated: "Noté Excellent",
    trip_quote: '"Avis vérifiés de voyageurs du monde entier"',
    trip_btn: "Lire les Avis →",
    stats: ["Tours Réalisés","Pays Servis","Voyageurs Satisfaits","Années d'Expérience"],
    about_label: "À Propos",
    about_title: "Vos Experts de Voyage Marocains de Confiance",
    about_p1: "Beldia Tours est une agence de voyage marocaine de premier plan dédiée à offrir des expériences de voyage authentiques, mémorables et entièrement personnalisées. Nous sommes des experts locaux passionnés qui connaissent chaque recoin de ce magnifique pays.",
    about_p2: "Des dunes dorées du Sahara aux rues bleues de Chefchaouen — nous créons chaque voyage avec soin, expertise et hospitalité marocaine authentique.",
    about_btn: "Planifiez Votre Voyage",
    about_values: ["Guides Locaux Experts","Service Personnalisé","Sûr et Fiable","Tarifs Transparents","Support 24/7","Équipe Multilingue"],
    tours_label: "Nos Tours",
    tours_title: "Expériences les Plus Populaires",
    tours_view: "Voir Tous les Tours",
    tours_book: "Réserver Maintenant",
    tours_price: "Nous Contacter",
    tour_days: ["3-4 jours","7 jours","2 jours"],
    tour_type: "Privé",
    tour_names: ["Marrakech au Désert de Merzouga","Grand Tour des Villes Impériales","Excursion dans les Montagnes de l'Atlas"],
    tour_descs: [
      "Vivez la magie du Sahara — randonnées à dos de chameau, campements sous les étoiles, dunes au lever du soleil.",
      "Voyagez à travers Marrakech, Fès, Meknès et Rabat — les plus grandes villes impériales du Maroc.",
      "Randonnée à travers des villages berbères, cascades et paysages montagneux à couper le souffle."
    ],
    tour_tags: [
      ["🐪 Randonnée Chameau","🌅 Lever du Soleil","⭐ Camp Désert"],
      ["🕌 Médinas","🎨 Souks","🏰 Palais"],
      ["🥾 Randonnée","🏘️ Village Berbère","💧 Cascades"]
    ],
    tour_reviews: ["14 avis","8 avis","6 avis"],
    why_label: "Pourquoi Nous Choisir",
    why_title: "La Différence Beldia Tours",
    why_cards: [
      ["Guides Locaux Experts","Nés au Maroc, nos guides partagent des histoires authentiques et des joyaux cachés."],
      ["Entièrement Personnalisé","Chaque tour adapté à vos intérêts, votre rythme et vos préférences."],
      ["Voyage Sécurisé","Agréés et engagés pour votre sécurité tout au long de chaque voyage."],
      ["Transport Confortable","Véhicules climatisés, chauffeurs expérimentés, confort premium."],
      ["Équipe Multilingue","Courant en anglais, espagnol, français, arabe et berbère."],
      ["Tarifs Transparents","Pas de frais cachés. Tarification claire dès le départ."],
      ["Support 24/7","Assistance permanente avant, pendant et après votre voyage."],
      ["Hôtels Sélectionnés","Riads et hôtels soigneusement sélectionnés pour un confort authentique."]
    ],
    dest_label: "Destinations",
    dest_title: "Explorez le Meilleur du Maroc",
    dest_btn: "Explorer Toutes les Destinations",
    dest_names: ["Marrakech","Merzouga","Fès","Chefchaouen","Aït Ben Haddou"],
    dest_subs: ["🌹 La Ville Rouge","🏜️ Désert du Sahara","🏛️ Ville Impériale","🔵 La Ville Bleue","🏯 Patrimoine UNESCO"],
    test_label: "Témoignages",
    test_title: "Ce que Disent les Voyageurs",
    test_btn: "Lire Tous les Avis",
    blog_label: "Blog de Voyage",
    blog_title: "Guides et Conseils de Voyage au Maroc",
    blog_btn: "Lire Tous les Articles",
    blog_cats: ["Conseils de Voyage","Désert et Sahara","Destinations"],
    blog_titles: [
      "Meilleure Période pour Visiter le Maroc: Guide Complet Mois par Mois",
      "Le Guide Complet du Désert du Sahara",
      "Guide de Marrakech: Les 15 Meilleures Choses à Faire"
    ],
    blog_descs: [
      "Découvrez quand visiter le Maroc pour le meilleur temps et les expériences les plus mémorables.",
      "Notre guide d'initié pour que votre expérience du désert soit parfaite.",
      "Les 15 expériences incontournables dans la Ville Rouge."
    ],
    blog_meta: ["Juillet 2025 · 8 min","Juin 2025 · 10 min","Mai 2025 · 9 min"],
    cta_label: "🌟 Commencez Votre Voyage",
    cta_title: "Prêt pour Votre Aventure Marocaine?",
    cta_desc: "Contactez-nous aujourd'hui et laissez-nous créer votre voyage personnalisé parfait au Maroc.",
    cta_book: "Réservez Votre Tour",
    cta_whatsapp: "WhatsApp",
    footer_desc: "Votre partenaire de voyage marocain de confiance pour des aventures authentiques et personnalisées à travers le Royaume du Maroc.",
    footer_cols: ["Liens Rapides","Nos Tours","Contact"],
    footer_links: ["Accueil","Tours","Destinations","Galerie","Témoignages","Blog","Contact"],
    footer_tours: ["Marrakech à Merzouga","Tour Villes Impériales","Sahara de Luxe","Montagnes Atlas","Tour Chefchaouen"],
    footer_rights: "Tous droits réservés. | Votre Voyage, Notre Passion"
  }
};

let currentLang = localStorage.getItem('beldia_lang') || 'en';

function translatePage(lang) {
  const t = LANG_DATA[lang] || LANG_DATA.en;
  currentLang = lang;
  localStorage.setItem('beldia_lang', lang);
  document.documentElement.lang = lang;

  // Helper to safely set text
  const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el && text !== undefined) el.textContent = text;
  };
  const setAll = (sel, texts) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (texts[i] !== undefined) el.textContent = texts[i];
    });
  };
  const setHTML = (sel, html) => {
    const el = document.querySelector(sel);
    if (el && html !== undefined) el.innerHTML = html;
  };

  // PAGE TITLE
  document.title = t.page_title;

  // NAV
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((a, i) => { if (t.nav[i]) a.textContent = t.nav[i]; });
  const mobileLinks = document.querySelectorAll('.mobile-nav a:not(.btn)');
  mobileLinks.forEach((a, i) => { if (t.nav[i]) a.textContent = t.nav[i]; });

  // LANG BUTTONS
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // HERO
  setText('.hero-badge', t.hero_badge);
  setText('.hero-tagline', t.hero_tagline);
  setText('.hero-title', t.hero_title + ' ');
  const accent = document.querySelector('.hero-title .accent');
  if (accent) accent.textContent = t.hero_accent;
  setText('.hero-sub', t.hero_sub);
  const heroBtns = document.querySelectorAll('.hero-actions .btn');
  if (heroBtns[0]) heroBtns[0].textContent = t.hero_book;
  if (heroBtns[1]) heroBtns[1].textContent = t.hero_contact;

  // TRIPADVISOR STRIP
  const tripEls = document.querySelectorAll('[data-trip]');
  tripEls.forEach(el => {
    const key = el.getAttribute('data-trip');
    if (t[key]) el.textContent = t[key];
  });

  // STATS LABELS
  setAll('.stat-item .label', t.stats);

  // ABOUT
  setText('[data-sec="about"] .section-label', t.about_label);
  setText('[data-sec="about"] .section-title', t.about_title);
  const aboutPs = document.querySelectorAll('[data-sec="about"] p:not(.section-sub)');
  if (aboutPs[0]) aboutPs[0].textContent = t.about_p1;
  if (aboutPs[1]) aboutPs[1].textContent = t.about_p2;
  const aboutBtn = document.querySelector('[data-sec="about"] .btn-primary');
  if (aboutBtn) aboutBtn.textContent = t.about_btn;
  setAll('.value-item p', t.about_values);

  // TOURS SECTION
  setText('[data-sec="tours"] .section-label', t.tours_label);
  setText('[data-sec="tours"] .section-title', t.tours_title);
  const toursViewBtn = document.querySelector('[data-sec="tours"] .btn-outline-gold');
  if (toursViewBtn) toursViewBtn.textContent = t.tours_view;
  document.querySelectorAll('.tour-card').forEach((card, i) => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    const metaSpans = card.querySelectorAll('.tour-meta span');
    const tags = card.querySelectorAll('.tour-tag');
    const count = card.querySelector('.count');
    const price = card.querySelector('.tour-price');
    const bookBtn = card.querySelector('.btn-primary');
    if (h3 && t.tour_names[i]) h3.textContent = t.tour_names[i];
    if (p && t.tour_descs[i]) p.textContent = t.tour_descs[i];
    if (metaSpans[0] && t.tour_days[i]) metaSpans[0].innerHTML = '<i class="fas fa-clock"></i> ' + t.tour_days[i];
    if (metaSpans[1]) metaSpans[1].innerHTML = '<i class="fas fa-users"></i> ' + t.tour_type;
    if (t.tour_tags && t.tour_tags[i]) tags.forEach((tag, j) => { if (t.tour_tags[i][j]) tag.textContent = t.tour_tags[i][j]; });
    if (count && t.tour_reviews[i]) count.textContent = '(' + t.tour_reviews[i] + ')';
    if (price) price.textContent = t.tours_price;
    if (bookBtn) bookBtn.textContent = t.tours_book;
  });

  // WHY US
  setText('[data-sec="why"] .section-label', t.why_label);
  setText('[data-sec="why"] .section-title', t.why_title);
  document.querySelectorAll('.why-card').forEach((card, i) => {
    if (t.why_cards[i]) {
      const h4 = card.querySelector('h4');
      const p = card.querySelector('p');
      if (h4) h4.textContent = t.why_cards[i][0];
      if (p) p.textContent = t.why_cards[i][1];
    }
  });

  // DESTINATIONS
  setText('[data-sec="dest"] .section-label', t.dest_label);
  setText('[data-sec="dest"] .section-title', t.dest_title);
  const destBtn = document.querySelector('[data-sec="dest"] .btn-outline');
  if (destBtn) destBtn.textContent = t.dest_btn;
  document.querySelectorAll('.dest-strip-item').forEach((item, i) => {
    const h4 = item.querySelector('h4');
    const span = item.querySelector('span');
    if (h4 && t.dest_names[i]) h4.textContent = t.dest_names[i];
    if (span && t.dest_subs[i]) span.textContent = t.dest_subs[i];
  });

  // TESTIMONIALS
  setText('[data-sec="test"] .section-label', t.test_label);
  setText('[data-sec="test"] .section-title', t.test_title);
  const testBtn = document.querySelector('[data-sec="test"] .btn-outline-gold');
  if (testBtn) testBtn.textContent = t.test_btn;

  // BLOG
  setText('[data-sec="blog"] .section-label', t.blog_label);
  setText('[data-sec="blog"] .section-title', t.blog_title);
  const blogBtn = document.querySelector('[data-sec="blog"] .btn-outline-gold');
  if (blogBtn) blogBtn.textContent = t.blog_btn;
  document.querySelectorAll('.blog-card').forEach((card, i) => {
    const cat = card.querySelector('.blog-category');
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    const meta = card.querySelector('.blog-meta');
    if (cat && t.blog_cats[i]) cat.textContent = t.blog_cats[i];
    if (h3 && t.blog_titles[i]) h3.textContent = t.blog_titles[i];
    if (p && t.blog_descs[i]) p.textContent = t.blog_descs[i];
    if (meta && t.blog_meta[i]) meta.innerHTML = '<span><i class="fas fa-calendar"></i> ' + t.blog_meta[i] + '</span>';
  });

  // CTA
  setText('[data-sec="cta"] .section-label', t.cta_label);
  setText('[data-sec="cta"] h2', t.cta_title);
  setText('[data-sec="cta"] p', t.cta_desc);
  const ctaBtns = document.querySelectorAll('[data-sec="cta"] .btn, [data-sec="cta"] .cta-whatsapp');
  if (ctaBtns[0]) ctaBtns[0].textContent = t.cta_book;
  if (ctaBtns[1]) ctaBtns[1].innerHTML = '<i class="fab fa-whatsapp"></i> ' + t.cta_whatsapp;

  // FOOTER
  setText('.footer-brand p', t.footer_desc);
  const footerCols = document.querySelectorAll('.footer-col h4');
  footerCols.forEach((h4, i) => { if (t.footer_cols[i]) h4.textContent = t.footer_cols[i]; });
  const footerLinks = document.querySelectorAll('.footer-col:first-of-type ul a');
  footerLinks.forEach((a, i) => { if (t.footer_links[i]) a.childNodes[a.childNodes.length-1].textContent = ' ' + t.footer_links[i]; });
  const tourLinks = document.querySelectorAll('.footer-col:nth-of-type(2) ul a');
  tourLinks.forEach((a, i) => { if (t.footer_tours[i]) a.childNodes[a.childNodes.length-1].textContent = ' ' + t.footer_tours[i]; });
  const footerBottom = document.querySelector('.footer-bottom p');
  if (footerBottom) {
    const yr = new Date().getFullYear();
    footerBottom.innerHTML = '© ' + yr + ' Beldia Tours. ' + t.footer_rights;
  }
}

// Init on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => translatePage(btn.getAttribute('data-lang')));
  });
  translatePage(currentLang);
});
