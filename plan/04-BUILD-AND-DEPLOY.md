# Build & Deploy Plan

## Final file tree (after I execute — static, no build step)

```
Portfolio/
├── index.html              # all sections (semantic HTML)
├── styles.css              # design system from 02-DESIGN.md
├── script.js               # nav toggle, scroll-spy, fade-in (progressive enhancement)
├── favicon.svg
├── og-image.png
├── assets/
│   ├── img/
│   │   ├── headshot.jpg            (placeholder → your photo)
│   │   ├── project-valorant-cli.svg
│   │   ├── project-ai-sports-commentary.svg
│   │   ├── project-atlas.svg
│   │   ├── project-amazon-automotive-mlops.svg
│   │   ├── project-voice-scheduling-agent.svg
│   │   └── project-msd-continuous-manufacturing.svg
│   └── resume.pdf
├── README.md               # how to edit content + redeploy
└── plan/                   # these planning docs (kept for reference)
```

*(If you later prefer a framework, the same content/design maps cleanly onto Astro or Next — but the recommendation stands at plain static for simplicity.)*

---

## Execution order (once you approve)

1. Scaffold `index.html` with all sections + content from `01-CONTENT.md`.
2. Write `styles.css` (tokens, layout, responsive breakpoints) per `02-DESIGN.md`.
3. Add `script.js` (mobile nav, scroll-spy, `IntersectionObserver` fade-in, reduced-motion guard).
4. Generate SVG covers, favicon, OG image, monogram headshot placeholder.
5. Wire the résumé PDF + all real links; add SEO/OG meta tags.
6. Self-check: responsive at 320/768/1280px, links resolve, Lighthouse pass (perf/a11y/SEO), no console errors.
7. Write `README.md` (edit + deploy instructions).

---

## Local preview

No build needed. Either open `index.html` directly, or:

```bash
cd /Users/susil/Desktop/Portfolio
python3 -m http.server 8000   # then visit http://localhost:8000
```

I can also preview it for you in-session and screenshot it after building.

---

## Deployment — GitHub Pages (chosen)

- Create a repo named **`susilkessav.github.io`**, push these files to `main`, enable Pages (Settings → Pages → deploy from `main` / root).
- Live at **`https://susilkessav.github.io`** within ~1 minute.
- Because it's a user-site repo, the site serves from the repo root — no path prefix needed (asset links stay relative, e.g. `assets/img/...`).
- A custom domain (e.g. `susilkessav.dev`) can be added later via Settings → Pages → Custom domain + a `CNAME` file.

I can also `git init` the folder and prep the first commit when you're ready.

---

## Maintenance

- Content edits = edit `01-CONTENT.md` then the matching block in `index.html` (or ask me; structure stays 1:1 with the content file).
- New project = copy a project card, add a cover SVG, add the repo link.
- Swap any placeholder image by replacing the file of the same name in `assets/img/`.
