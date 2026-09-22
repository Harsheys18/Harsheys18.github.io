# Harshitha Inampudi — Personal Site

A static personal site for a CSE (Honors) undergrad at IIT Bombay applying to PhD programs in Robotics and
Machine Learning. Light theme built on a sky blue / dark blue / black / white palette, with a figure beside
every research project so the work is understandable at a glance.

## Pages

- `index.html` (**Home**) — photo, research interests, achievements, LinkedIn and contact details.
  Deliberately no CV.
- `research.html` (**Research**) — all machine learning and robotics work, grouped by theme. Every entry has
  an animated figure and, where the repository is public, a GitHub link on the last line.
- `experience.html` (**Experience**) — the four positions (Graviton, Juspay, NTU Singapore, Sakhi), then
  **Other Relevant Projects** covering systems, algorithms, optimisation and earlier builds, then positions of
  responsibility.
- `blogs.html` (**Blogs**) — essay index. Each card shows an abstract; the title links to the full piece in
  `blog/`.
- `musings.html` (**Musings**) — travel, places, and pictures. The colourful one.

Blog posts live in `blog/` as standalone pages:

- `blog/working-is-not-right.html`
- `blog/what-benchmarks-decide.html`
- `blog/built-for-whom.html`
- `blog/doing-it-badly-first.html`

## Figures

`assets/viz/*.svg` — every project figure and travel illustration. These are hand-authored animated SVGs, not
GIFs or stock images: nothing is copied from anywhere, each one is drawn from what the project's code actually
does, and they stay sharp at any size while costing a few kilobytes each.

Each file is self-contained (styles and animation live inside the SVG), so they can be reused anywhere by
pointing an `<img>` at them. Animation is suppressed automatically for visitors with
`prefers-reduced-motion` set.

## Adding things

**A new research project** — copy an existing `<article class="project">` block in `research.html`, swap the
figure, title, meta line and body. The last line of every entry is the repo link; if there is no public
repository, use `<span class="repo-none">` with a short reason instead of linking.

**A new blog post** — copy any file in `blog/`, replace the head/title/body, then add a matching
`<article class="blog-card">` to `blogs.html` with its abstract.

**A photo** — `images/profile.jpg` is the home page portrait (600×600, cropped from a HEIC original).
Browsers cannot display HEIC, so convert any replacement to JPEG first. Travel cards in `musings.html` point
at `assets/viz/place-*.svg`; swap a card's `src` to a photo in `images/` and the card handles the cropping.

## Tech

Hand-written HTML, one stylesheet (`styles.css`), one small script (`script.js`) for the footer year and nav
highlighting. No build step, no dependencies. Type is Source Serif 4 for prose and Inter for UI, loaded from
Google Fonts.

## Run locally

Open `index.html` directly, or serve the folder and visit `http://localhost:8000`:

```
python -m http.server
```

## Publish to GitHub Pages

1. Push to a repository named `your-username.github.io` (user site) or any repo with
   **Settings → Pages → Deploy from a branch → main → /(root)** (project site).
2. Wait a minute or two, then open the published URL.

## Note on the CV

The site intentionally does not link a CV. `resume.tex` is still present in the repository root, which means
it remains downloadable from the published site. Run `git rm resume.tex` (keeping a copy elsewhere) if it
should not be reachable at all.
