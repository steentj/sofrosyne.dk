# AI Assistant Project Instructions

## Quick Context
Static multi-page Danish site about classical philosophy (sofrosyne). Pure HTML + a shared `styles.css` (custom CSS + dark mode variables) + `theme.js` (theme + mobile nav toggle). No build pipeline, bundler, frameworks, package manager, or tests. Everything is served as-is.

## Architecture & Files
- `index.html`: Forside with hero (CSS background via `--hero-image` inline style) and intro sections.
- `galleri.html`: Image gallery using local images under `images/` with `loading="lazy"` and `onerror` fallback to `sofrosyne.jpg`.
- `citatbibliotek.html`: Blockquote grid with explicit <cite> sources; paraphrases noted.
- `historie.html`: Placeholder historical overview content.
- `om.html`: Attribution list for images (Platon, Aristoteles, etc.) and pending sources marked "Kilde ønskes".
- `styles.css`: Color vars, cards, hero overlay, fade animation, dark theme overrides (`[data-theme="dark"]`), nav active styles, compact theme/hamburger buttons.
- `theme.js`: Handles theme persistence (localStorage key `theme`), toggles dark/light, and mobile nav show/hide (`#menu-toggle` toggles `#nav-links` hidden class + aria attributes).
- `images/`: Local JPG assets (filenames referenced exactly in HTML); hero image `sofrosyne.jpg` (AI generated, attribution placeholder on om.html).

## Conventions
- Navigation markup duplicated across all HTML files: update all when adding/removing links (keep aria-current on active page).
- Mobile menu: button id `menu-toggle`, target container id `nav-links`, hidden via Tailwind utility `hidden` and displayed at `sm:` breakpoint.
- Dark mode: Set via `<html data-theme="dark">`; theme.js updates button text/icon (☀️ for dark active, 🌙 for light). Do not change icon logic without adjusting `applyTheme`.
- Hero image: Controlled by inline style `--hero-image: url('sofrosyne.jpg')` and styled in `.hero` class; prefer updating inline var on index.html rather than editing CSS for hero swaps.
- Quotes: Paraphrased sources explicitly marked in a `<cite>` with small grey text; maintain this pattern for consistency.
- Image reliability: Gallery images include `onerror="this.onerror=null;this.src='sofrosyne.jpg'"` fallback—retain or consciously remove if you add guaranteed-local files.

## Adding New Pages / Sections
1. Copy existing header/footer boilerplate from a current page for consistent nav + theme toggle.
2. Add nav link across all pages; set `aria-current="page"` only on the new page.
3. If using hero: replicate `<section class="hero" style="--hero-image: url('...')">` pattern.

## Theming & Accessibility
- Always update both `aria-label` and `title` if you adjust theme toggle semantics.
- Ensure new interactive elements are keyboard accessible (reuse button classes, no div-onclick).
- For new dark-mode styles, add under `[data-theme="dark"]` rather than JS conditionals.

## Mobile Nav Changes
- If restructuring nav, keep ids `menu-toggle` and `nav-links` or update theme.js accordingly.
- To auto-close menu after link click on small screens, extend theme.js by listening for clicks inside `#nav-links` (not implemented yet—safe enhancement).

## Image Attribution Workflow
- Add new attributions in `om.html` as `<div>` blocks matching existing pattern.
- Mark unknown source with "Kilde ønskes" then replace once source URL + license confirmed.

## Performance & Simplicity
- Avoid heavy JS/CSS additions; no build step means all extra weight ships directly.
- Prefer CSS-only solutions when possible (animations/responsive tweaks).

## Safe Modification Checklist (before committing changes)
- [ ] Updated nav consistently across all pages.
- [ ] Verified relative paths (no leading slashes) for new assets.
- [ ] Tested dark/light toggle still switches icons & colors.
- [ ] Confirmed mobile menu opens/closes at narrow width (<640px).
- [ ] Added attribution for any new images.

## Example: Adding a New Gallery Image
1. Place file under `images/` (e.g. `images/stoic.jpg`).
2. Add card in `galleri.html` copying existing structure; set `alt` clearly.
3. Include `loading="lazy"` and fallback handler if needed.
4. Add attribution block in `om.html` with source + license.

## Do NOT
- Introduce frameworks or npm dependencies (project intentionally minimal).
- Inline large base64 images—use `images/` directory.
- Remove `data-theme` attribute logic or button ids without updating `theme.js`.

## Future Enhancements (optional, not yet present)
- Auto-close nav on link click (JS enhancement).
- More granular attributions (chapter/section) for quotes if editions provided.

Keep instructions concise and adapt patterns above. Ask for license/source when missing.
