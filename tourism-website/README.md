# 🇲🇦 Tours Roja Marruecos – Official Website

A professional, modern, multilingual tourism website for **Tours Roja Marruecos**, a Moroccan travel agency specializing in personalized tours throughout Morocco.

---

## ✅ Completed Features

### Pages
| Page | URL | Description |
|------|-----|-------------|
| Homepage | `index.html` | Hero slider, about, featured tours, why us, destinations strip, testimonials, blog preview, CTA, footer |
| Tours | `tours.html` | All tours with detailed itineraries, inclusions, filter by category, booking modal |
| Destinations | `destinations.html` | 10 Morocco destinations with photos, descriptions, travel tips |
| Gallery | `gallery.html` | Masonry photo gallery with lightbox, category filtering, video thumbnails |
| Testimonials | `testimonials.html` | Customer reviews with rating overview, 9 detailed reviews |
| Blog | `blog.html` | Featured post + 6 article cards with categories |
| Contact | `contact.html` | Contact form, WhatsApp button, Google Maps embed, FAQ section |

### Features
- ✅ **Multilingual support** – English, Spanish, French (localStorage persistence)
- ✅ **Hero slider** – 4 slides with auto-play and dot navigation
- ✅ **Animated counters** – Stats bar with scroll-triggered animations
- ✅ **Scroll reveal animations** – Elements fade in on scroll
- ✅ **Testimonials carousel** – Auto-scrolling with prev/next buttons
- ✅ **Tour category filters** – Filter tours by desert, cultural, adventure, luxury, family, honeymoon
- ✅ **Gallery lightbox** – Click to expand images with keyboard support
- ✅ **Itinerary accordions** – Expandable day-by-day tour itineraries
- ✅ **Booking modal** – Quick booking form accessible from tour cards
- ✅ **Contact form** – Full inquiry form with data saved to database
- ✅ **Newsletter signup** – Email collection saved to database
- ✅ **WhatsApp float button** – Fixed bottom-right chat button
- ✅ **Back to top button** – Smooth scroll to top
- ✅ **Mobile responsive** – Hamburger nav, responsive grids
- ✅ **SEO optimized** – Meta tags, semantic HTML, ARIA labels
- ✅ **Moroccan design theme** – Gold/terracotta color palette, Playfair Display typography

---

## 🌐 Website Structure

```
index.html              Homepage
tours.html              All tours page
destinations.html       Morocco destinations
gallery.html            Photo gallery
testimonials.html       Customer reviews
blog.html               Travel blog
contact.html            Contact & booking

css/
  style.css             Complete stylesheet (Moroccan theme)

js/
  main.js               Interactivity, animations, forms
  translations.js       EN/ES/FR translation system
```

---

## 🔗 Key Paths & Parameters

| Path | Description |
|------|-------------|
| `/index.html` | Homepage |
| `/tours.html` | Tours (filter: `data-filter="all|desert|cultural|adventure|luxury|family|honeymoon|daytrip"`) |
| `/destinations.html` | 10 destinations |
| `/gallery.html` | Gallery (filter: `data-filter="all|desert|cities|mountains|culture"`) |
| `/testimonials.html` | Customer reviews |
| `/blog.html` | Travel blog |
| `/contact.html` | Contact form |

---

## 🗄️ Data Models

### `inquiries` table
| Field | Type | Description |
|-------|------|-------------|
| id | text | UUID |
| name | text | Full name |
| email | text | Email address |
| phone | text | Phone/WhatsApp |
| country | text | Country of origin |
| tour | text | Tour of interest |
| travel_date | text | Preferred date |
| travelers | text | Number of travelers |
| budget | text | Budget range |
| message | rich_text | Inquiry message |
| lang | text | Language (en/es/fr) |
| submitted_at | datetime | Submission time |

### `newsletter` table
| Field | Type | Description |
|-------|------|-------------|
| id | text | UUID |
| email | text | Subscriber email |
| subscribed_at | datetime | Subscription time |

### API Endpoints
```javascript
POST tables/inquiries    // Save contact form submission
POST tables/newsletter   // Save newsletter subscription
GET  tables/inquiries    // List all inquiries
```

---

## 🚧 Features Not Yet Implemented

- [ ] Admin dashboard to view/manage inquiries
- [ ] Blog post detail pages (individual article pages)
- [ ] Tour detail pages (dedicated URLs per tour)
- [ ] Online payment integration
- [ ] User account / saved tours
- [ ] Real Google Analytics integration
- [ ] TripAdvisor / Google review API integration
- [ ] Live chat widget
- [ ] Availability calendar / booking system
- [ ] Multi-day tour price calculator

---

## 🚀 Recommended Next Steps

1. **Update contact details** – Replace `+212 600 000 000` and `info@toursrojamarruecos.com` with real contact info
2. **Replace tour prices** – Update with actual pricing
3. **Add real photos** – Upload company photos and replace placeholder image URLs
4. **Create individual tour pages** – `/tours/marrakech-merzouga.html` etc.
5. **Set up WhatsApp Business** – Link to actual WhatsApp Business number
6. **Connect email** – Set up form email forwarding via a backend service
7. **Add Google Analytics** – Track visitor behavior
8. **Optimize for SEO** – Add structured data (JSON-LD), sitemap.xml, robots.txt
9. **Add SSL** – Ensure HTTPS on deployment
10. **Deploy** – Use the **Publish tab** to go live

---

## 🎨 Design System

### Colors
```css
--clr-primary:    #C8892A  (Moroccan Gold)
--clr-accent:     #B5341E  (Deep Red)
--clr-accent2:    #2E7D5E  (Emerald Teal)
--clr-dark:       #1A1208  (Rich Dark Brown)
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Arabic accent**: Amiri (Arabic serif)

### Languages
- English (`en`) — default
- Spanish (`es`)
- French (`fr`)
- Language persisted in `localStorage` as `trm_lang`

---

## 📱 Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px–1100px
- **Mobile**: < 768px

---

*Built for Tours Roja Marruecos – Authentic Moroccan Travel Experiences*
