# NorthPeak Digital | Premium One-Page Agency Website

NorthPeak Digital is a premium, high-converting, fully responsive one-page website designed and built for a fictional modern digital marketing agency. The project has been engineered to showcase pixel-perfect visual layout, high performance, robust accessibility (A11y), clean semantic HTML5, fluid modern CSS3 (Flexbox and Grid), and fluid transitions driven by high-performance Vanilla JavaScript.

---

## ⚡ Key Features

1. **Sticky Glassmorphism Navigation**: Custom blur-backdrop menu bar with active section highlight tracker, auto-closing hamburger drawer for mobile viewports, and an integrated reading scroll progress tracker.
2. **Dynamic Hero Section**: High-impact fluid headers, call-to-action buttons, animated floating SVG shapes, dynamic graphics cards, and statistical growth overlays.
3. **Interactive About Us Tabs**: Switch seamlessly between Mission, Vision, and Core Values panels. Includes a timeline layout showing the agency's key historical growth checkpoints.
4. **Services Cards Grid**: Exact 6-card setup detailing core capabilities (SEO, Web Development, Social Media, Branding, Paid Ads, UX Design) with custom hover transitions and icons.
5. **Interactive Portfolio Grids**: Live case studies filterable by categories (All, Web, Marketing, Branding) featuring animated details slide-up overlays on hover.
6. **Animated Counters Banner**: Interactive number ticker counts up dynamically from 0 to target metrics (e.g., 250+ Projects) using `IntersectionObserver` as soon as they enter the screen.
7. **Autoplay Testimonials Carousel**: Autoplay reviews slider with client rating stars, portraits, citations, next/prev arrow triggers, and manual dot selections. Automatically pauses sliding on user hover.
8. **Predictable Pricing Grid**: Three transparent tiers featuring custom list markers, distinct card structures, and popular visual badges for featured packages.
9. **FAQ Accordion Details**: Sleek accordions using accessible native HTML details/summary elements enhanced with JavaScript to slide transitions smoothly.
10. **A11y Validated Form Controls**: Real-time form input verification using regex models (Name, Email, Phone, Option Select, Messages) showing instant inline warning text and a custom success modal pop-up on successful mock submissions.
11. **Newsletter Subscription Bar**: Embedded subscription utility with automatic validity checks and immediate success notifications.
12. **Micro-interactions & Scroll Reveals**: Custom keyframes floating particles, scale transitions, hover lifts, ripple triggers on click, back-to-top floating anchors, and smooth entrance fades using `IntersectionObserver` to eliminate layout shift.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5 (strict outline structure using `<header>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`)
- **Styling**: Fluid Vanilla CSS3, Grid, Flexbox, Fluid Typography (`clamp()`), transitions, and keyframe animations.
- **Interactivity**: Clean, commented Vanilla JavaScript (ES6+), `IntersectionObserver` API, form validations, and custom event controllers.
- **Aesthetic Assets**: Custom SVG graphics and layouts combined with high-resolution generated commercial agency photography.

---

## 📂 Folder Structure

The code is modularly grouped and follows standard production practices:

```text
NorthPeak-Digital/
│
├── index.html        # Main template file containing all sections and SEO configuration
│
├── css/
│   ├── style.css     # Design system variables, layout controls, card styles, keyframes
│   └── responsive.css# Dedicated media query definitions (down to 360px portrait devices)
│
├── js/
│   └── script.js     # Responsive navigation, counters, sliders, accordions, validations
│
└── assets/
    └── images/       # High-quality generated visual assets (About, Portfolio, and Avatars)
```

---

## 🚀 Running the Project Locally

The website is client-side only and runs directly in the browser with zero dependencies:

### Option 1: Direct File Launch
Simply open [index.html](file:///c:/Users/Kaustubh%20Gupta/OneDrive/Desktop/new%20web%20project/index.html) inside any modern web browser.

### Option 2: Live Local Server
For best results (testing image lazy loading and fast asset loads), launch using a local development server:

Using `npx` (requires Node.js):
```bash
npx serve
```
Or open the project in VS Code and trigger the **Live Server** extension.

---

## 📝 Deployment Specifications

This project is static and preloader optimized, making it ideal for hosting on any static cloud provider:

- **Netlify**: Drag and drop the root workspace directory or link a Git Repository.
- **Vercel**: Run `vercel` from the root workspace command line.
- **GitHub Pages**: Push the repository and set the pages build source to the `main` branch.

---

*NorthPeak Digital Agency Site is built as a portfolio showcase project.*
