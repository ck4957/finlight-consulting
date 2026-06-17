# Codex Notes

This project recreates the public Finlight Consulting Squarespace site as a static React/Vite site for GitHub Pages.

## Source Of Truth

Use `.codex/reference/` before making visual, content, typography, or layout changes. The files there are intentionally checked into the repo so future Codex sessions can compare against the original site.

Key references:

- `.codex/reference/screenshots/home-desktop-source.png`: original home page desktop full-page screenshot.
- `.codex/reference/screenshots/home-mobile-source.png`: original home page mobile full-page screenshot.
- `.codex/reference/screenshots/article-finance-hard-source.png`: original desktop screenshot for `/my-take/finance-shouldnt-feel-hard`.
- `.codex/reference/screenshots/article-why-finlight-source.png`: original desktop screenshot for `/my-take/why-choose-finlight`.
- `.codex/reference/html/home.html`: exact HTML dump from `https://www.finlightconsulting.com/`.
- `.codex/reference/html/my-take.html`: exact HTML dump from `https://www.finlightconsulting.com/my-take`.
- `.codex/reference/html/article-finance-shouldnt-feel-hard.html`: exact HTML dump from the article page.
- `.codex/reference/html/article-why-choose-finlight.html`: exact HTML dump from the Why Finlight article page.

## Section Mapping

- Hero: `src/main.jsx` hero section, image source `public/assets/hero-1.png`.
- What I Offer: `services` data in `src/main.jsx`; layout and circular images in `src/styles.css`; original background/wave reference is visible in `home-desktop-source.png`.
- Who I am: `about` section in `src/main.jsx`; image and credential assets in `public/assets/`.
- Let’s Connect / Calendly: `connect-band` section in `src/main.jsx`; Calendly URL is `https://calendly.com/finlightconsulting?hide_gdpr_banner=1`.
- Blog index: `BlogPage` in `src/main.jsx`; article metadata in `src/articles.js`.
- Article pages: `ArticlePage` in `src/main.jsx`; real article content and rich text structure in `src/articles.js`.

## Routing

GitHub Pages serves this project under `/finlight-consulting/`. `vite.config.js` sets the base path when `GITHUB_PAGES=true`.

Article URLs are path based:

- `/finlight-consulting/my-take`
- `/finlight-consulting/my-take/finance-shouldnt-feel-hard`

`scripts/generate-static-routes.js` copies `dist/index.html` into each static route folder after build so direct refreshes work on GitHub Pages.

## Visual Guidance

Match the original site closely:

- Primary font is Marcellus; button font is Inter bold.
- Article body text uses `15.6px` with `23.4px` line-height.
- Article title uses `48px` with `57.6px` line-height on desktop.
- Source home page uses scroll reveal/scale animation and large blended section imagery with wavy/zig-zag transitions.
- Source home page uses a dynamic header that turns dark after scrolling.
- The “What I Offer” service images are circular.

When changing visual sections, compare against the screenshots in `.codex/reference/screenshots/` before committing.
