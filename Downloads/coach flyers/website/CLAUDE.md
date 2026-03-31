# Coach Movers Website

## Project Overview

This is the marketing website for **Coach Movers**, a Long Island-based moving company. It is a fully static, hand-coded HTML/CSS/JS site with no build tools, no frameworks, and no templating system. Deployed directly to **Netlify** (site ID: `3b370bf9-c2f4-49ea-8fac-7736d41a317c`).

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Main landing page with hero, multi-step quote form, services, testimonials, FAQ, checklist |
| About | `about.html` | Company story, team, credentials |
| Services | `services.html` | Service offerings overview |
| Contact | `contact.html` | Two-step moving quote form + contact info |

All 4 pages live in the root of `coach flyers/website/`.

## Architecture

### No Templating System — Footer/Header Are Duplicated

**This is the most critical thing to understand.** There is no component system, no includes, no JavaScript-based shared components. The header (nav), footer, chat widget, and sticky CTA are **copy-pasted identically** across all 4 HTML pages.

**When you change the footer, header, chat widget, or sticky CTA on one page, you MUST apply the exact same change to all 4 pages.** This includes:

- `index.html`
- `about.html`
- `services.html`
- `contact.html`

### What Is Shared Across All Pages

These blocks appear on every page and must stay in sync:

1. **Top bar + Navigation** — The `<nav>` with logo, links, mobile hamburger menu, and CTA button
2. **Mobile menu overlay** — The `.mobile-menu` div
3. **Footer** — The full `<footer>` block (logo, quick links, services, contact info, service areas, copyright)
4. **Chat widget** — The `.chat-widget` with the 💬 bubble and FormSubmit.co form
5. **Sticky CTA** — The `.sticky-cta` bar with "Get Free Quote" and "Call Now" buttons
6. **Common JavaScript** — Mobile menu toggle, scroll-based header hide, sticky CTA show/hide, active nav detection

### Active Page Indicator

The footer's Quick Links section marks the current page with `class="active"`. When copying the footer across pages, update this:

```html
<!-- On index.html -->
<li><a href="index.html" class="active">Home</a></li>

<!-- On about.html -->
<li><a href="about.html" class="active">About Us</a></li>

<!-- On services.html -->
<li><a href="services.html" class="active">Services</a></li>

<!-- On contact.html -->
<li><a href="contact.html" class="active">Contact</a></li>
```

## CSS Architecture

### All CSS Is Inline

Every page has its own `<style>` block in the `<head>`. There are **no external CSS files**. Shared styles (footer, nav, chat widget, sticky CTA) are duplicated across all pages.

When changing shared component styles, update the CSS in **all 4 files**.

### Design Tokens

Defined in `:root` on each page:

```css
:root {
    --dark: #0A0A0A;
    --lime: #C8FF00;        /* Brand accent color */
    --white: #FFFFFF;
    --off-white: #F7F7F5;
    --gray: #6B6B6B;
    --light-border: #E5E5E5;
    --dark-charcoal: #1A1A1A;
    --card-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    --card-shadow-dark: 0 4px 24px rgba(200, 255, 0, 0.1);
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 48px;
    --spacing-xl: 64px;
    --spacing-2xl: 120px;
    --font-primary: "Bricolage Grotesque", sans-serif;
    --font-secondary: "Figtree", sans-serif;
}
```

### Fonts

Loaded from Google Fonts on each page:
- **Bricolage Grotesque** (700, 800) — Headings, hero text
- **Figtree** (400, 500) — Body text, labels

### Responsive Breakpoints

- `@media (max-width: 768px)` — Tablet/mobile: hides desktop nav, shows hamburger, reduces spacing
- `@media (max-width: 480px)` — Small mobile: further reduces font sizes and spacing

### CSS Comment Convention

Sections are marked with:
```css
/* ==================== SECTION NAME ==================== */
```

## JavaScript

### All JS Is Inline

Scripts are embedded in `<script>` tags before `</body>`. No external JS files.

### Common JS (on every page)

1. **Mobile menu toggle** — Hamburger click toggles `.active` on menu overlay
2. **Close menu on link click** — All `.mobile-menu a` links close the menu
3. **Scroll-based header hide** — Nav slides up on scroll down, slides back on scroll up (threshold: 100px)
4. **Sticky CTA visibility** — Shows after scrolling 500px
5. **Active nav detection** — Sets `.active` class on nav link matching current page via `window.location.pathname`

### Page-Specific JS

- **index.html**: 4-step hero quote form, 2-step CTA form, FAQ accordion, moving checklist with checkboxes, counter animations, Intersection Observer scroll animations, parallax hero effect
- **contact.html**: 2-step contact form with validation between steps
- **about.html / services.html**: Only the common JS listed above

## Forms

All forms use **FormSubmit.co** — a free, no-backend form submission service.

- **Action URL**: `https://formsubmit.co/eli@reglow.com` (all forms)
- **Method**: POST
- **Hidden fields**: `_subject` (email subject), `_captcha` (set to `false`), `_template` (set to `table`)

### Form Locations

| Form | Page | Fields |
|------|------|--------|
| Hero quote form | index.html | 4-step: Move Size, From/To/Name/Email/Phone, Date/Estimate Type, Review |
| CTA quote form | index.html | 2-step: Name/Email/Phone, then Date/Size/Notes |
| Contact form | contact.html | 2-step: Name/Email/Phone, then From/To/Date/Size/Notes |
| Chat widget form | All pages | Name, Email, Message |

## Images

All images live in `images/` with relative paths (`src="images/logo.png"`).

Key assets:
- `logo.png` — Main logo (nav + footer)
- `hero-truck.jpg` — Hero background (loaded with `fetchpriority="high"`)
- `team-photo.jpg` — About page team photo
- `mover-1.jpg`, `mover-2.jpg`, `mover-3.jpg` — Staff photos
- `press-1.png` through `press-5.png` — Press/media logos

## Deployment

- **Host**: Netlify (direct deploy, no CI/CD pipeline)
- **Local dev**: `python3 -m http.server 8765` (configured in `.claude/launch.json`)
- **No build step** — HTML files are served as-is

## Business Details (Hardcoded)

These values appear across multiple pages and must be updated everywhere if changed:

| Detail | Value | Where |
|--------|-------|-------|
| Phone | (516) 871-2770 / `tel:+15168712770` | Nav CTA, footer, sticky CTA, contact page |
| Email | info@coachmovers.com | Footer on all pages |
| Form email | eli@reglow.com | All FormSubmit.co form actions |
| HQ location | 200 Broadhollow Rd, Suite 201, Melville, NY 11747 | Footer on all pages |
| Hours | Mon-Sun 7AM-9PM | Footer on all pages |
| License | NY DOT License #T-39547 | Footer on all pages |
| Copyright | 2025 Coach Movers | Footer bottom on all pages |

## Rules and Conventions

1. **Always update all 4 pages** when touching shared components (header, footer, nav, chat widget, sticky CTA, or their styles/scripts).
2. **Keep the `class="active"` footer link** correct per page when syncing footer HTML.
3. **Use CSS variables** from `:root` for colors, spacing, and fonts — don't hardcode values.
4. **Section comments** — Follow the `/* ==================== NAME ==================== */` pattern.
5. **No external dependencies** — This site has zero npm packages, no build tools, no frameworks. Keep it that way.
6. **FormSubmit.co** — All forms post to `eli@reglow.com`. Don't change the form handler without updating all forms.
7. **Social links** in the footer use text placeholders (FB, IG, G, Y) — actual URLs are `#` placeholders.
8. **Emoji usage** — The site uses emoji in CTAs (📞, 💬) and form options (📦, 🏠, etc.). This is intentional.
9. **No analytics** — There is currently no Google Analytics or tracking installed.
10. **Backdrop blur** — Always include both `backdrop-filter` and `-webkit-backdrop-filter` for Safari support.

## Known Issues

- **Social links** are all `href="#"` placeholders — not linked to actual profiles yet.
- **Copyright year** says 2025 — may need updating.
