# AbiTrading website

Static bilingual site (FR at `/`, EN at `/en/`). No runtime dependencies: plain HTML/CSS, Alpine.js (vendored in `assets/js`), and a PHP mail handler.

## Edit
- Copy and SEO titles/descriptions: `src/content.mjs`
- Phone, WhatsApp, email, address, cities, social links: `site.config.json` (empty values are hidden automatically)
- Styles: `assets/css/style.css`

## Build and preview
    node build.mjs            # writes dist/
    cd dist && python3 -m http.server 8099

## Deploy
Upload the contents of `dist/` (including the hidden `.htaccess`) to your hosting web root. Requires Apache with mod_rewrite and PHP `mail()` for the contact form.

Before going live: set `email` / `contactFormRecipient` in `site.config.json`, rebuild, and update the old-URL redirects in `static/.htaccess`.
