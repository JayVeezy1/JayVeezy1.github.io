# JakobVanek.github.io

Personal website of Jakob Vanek, hosted on [GitHub Pages](https://pages.github.com/).

**Live:** https://JakobVanek.github.io

---

## Content

Single-page personal site with:
- **About / Hero** – intro, photo, links
- **CV** – work experience, education, skills, languages, publications
- **Current Projects** – live project cards with links
- **Contact** – GitHub, LinkedIn

## Stack

- HTML5, CSS3, Vanilla JavaScript
- No dependencies, no build step
- Google Fonts (Inter) — planned: self-host for GDPR compliance

## Local Development

Just open `index.html` in a browser — no server needed.

For live-reload (optional):
```bash
npx serve .
# or
python -m http.server 8000
```

## Deployment

GitHub Pages automatically serves from the `main` branch. After a push, the site updates within minutes.

## Structure

```
/
├── index.html        # Main page
├── css/style.css     # All styles
├── js/main.js        # Scroll highlighting + color shuffle
├── assets/           # Profile photo, future favicon
├── private/          # Local only, gitignored
├── CLAUDE.md         # Collaboration notes
└── Todos.md          # Open tasks
```

## License

MIT
