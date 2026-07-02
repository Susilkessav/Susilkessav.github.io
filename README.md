# Susilkessav — Portfolio

A simple, fast, responsive single-page portfolio. Plain HTML + CSS + vanilla JS — no build step, no dependencies.

## Run locally

Just open `index.html`, or serve it:

```bash
cd Portfolio
python3 -m http.server 8000   # then http://localhost:8000
```

## Edit content

- All copy lives in `index.html`, section by section. The verified source of truth is `plan/01-CONTENT.md`.
- Theme colors and layout are in `styles.css` (CSS variables at the top — dark + light).
- Behavior (theme toggle, mobile nav, scroll-spy, reveal-on-scroll) is in `script.js`.

## Assets

- `assets/resume.pdf` — the real résumé (added). Replace the file to update it.
- `assets/img/headshot.jpg` — the real photo (added).
- `assets/img/project-*.svg` — generated covers. Optional: replace with real screenshots (16:9) as `project-<slug>.png` and update each card's `src`.

## Deploy (GitHub Pages)

1. Create a repo named **`susilkessav.github.io`**.
2. Push these files to `main`:
   ```bash
   cd Portfolio
   git init && git add . && git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Susilkessav/susilkessav.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → deploy from `main` / root. Live at `https://susilkessav.github.io`.

## Structure

```
index.html      styles.css      script.js      README.md
assets/
  resume.pdf
  img/  headshot.svg  favicon.svg  og-image.svg  project-*.svg (×6)
plan/           planning docs (content, design, images, deploy)
```
