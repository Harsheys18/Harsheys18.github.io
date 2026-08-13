# Harshitha Inampudi — Portfolio

A static, light-themed, multi-page portfolio for a CSE (Honors) undergrad at IIT Bombay applying to PhD programs in
Robotics and Machine Learning, built for GitHub Pages. Content is sourced directly from [resume.tex](resume.tex) —
no fabricated roles, metrics, or products.

## Pages

- Home: hero, stats, research interests, year-wise timeline
- Projects: project cards organized by domain — Robotics, Machine Learning, Systems & Algorithms, Optimization &
  Quantitative Research, and Miscellaneous — linked to public repos at [github.com/Harsheys18](https://github.com/Harsheys18) where available
- Achievements: work + research experience, education, positions of responsibility, scholastic and extracurricular records
- Skills: languages, libraries, and technical focus areas
- Musings: informal notes and stories from projects and life, separate from the formal record
- Contact: direct contact links and a quick message form

## Tech Stack

- HTML5
- CSS3 (custom responsive layout, scroll-reveal, timeline/research-card components)
- Vanilla JavaScript (mobile nav, scroll-reveal, scroll progress bar, back-to-top, dynamic year)

## Run Locally

1. Open the folder in VS Code.
2. Open [index.html](index.html) in a browser, or use the Live Server extension.

## Publish to GitHub Pages (github.io)

## Option A: User Site (recommended)

Use this if you want your site at https://your-username.github.io/

1. Create a new repository named exactly: your-username.github.io
2. Copy all files from this project into that repository root.
3. Commit and push to the main branch.
4. Wait 1 to 3 minutes and open https://your-username.github.io/

## Option B: Project Site

Use this if you want your site at https://your-username.github.io/repository-name/

1. Push this code to any repository (for example, portfolio).
2. On GitHub, open Settings > Pages.
3. Under Build and deployment:
4. Source: Deploy from a branch
5. Branch: main and folder: /(root)
6. Save and wait for deployment.

## Keeping Content Accurate

All section content is pulled from real resume entries. When updating:

- Edit `resume.tex` first, then propagate factual changes into the corresponding HTML page.
- The "Looking ahead" / future-direction notes on the Home and Projects pages are explicitly labeled as early-stage/aspirational — keep that framing rather than presenting them as completed work.
- No resume PDF is committed yet; add one (e.g. `resume.pdf`) and link it from the nav if you want a downloadable resume button.
