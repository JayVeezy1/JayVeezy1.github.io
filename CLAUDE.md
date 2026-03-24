# CLAUDE.md – Kollaborationsdokumentation

Diese Datei dokumentiert den Entwicklungsprozess der persönlichen Website und dient als gemeinsame Referenz für die Zusammenarbeit zwischen Jakob und Claude Code.

---

## Projekt-Übersicht

- **URL:** https://JayVeezy1.github.io
- **Repo:** https://github.com/JayVeezy1/JayVeezy1.github.io
- **Hosting:** GitHub Pages (Branch: `main`, Root: `/`)
- **Aktueller Stack:** HTML, CSS, JavaScript (Vanilla)
- **Geplante Migration:** Astro oder Jekyll (langfristig)

---

## Architektur-Entscheidungen

### Warum Vanilla HTML/CSS/JS?
Für den Start bewusst ohne Build-Tools. Kein Node, kein npm, keine Pipelines – die Website kann direkt im Browser geöffnet und sofort auf GitHub Pages deployed werden. Wenn der Inhalt und das Design stabil sind, kann auf Astro migriert werden.

### Design-Prinzipien
- Dark-Theme (Hintergrund `#0f0f11`, Akzent `#7c6af7`)
- Schlankes, minimalistisches Layout
- Mobile-first responsive
- Keine externen CSS-Frameworks (kein Bootstrap, Tailwind etc.)

### Dateistruktur
```
/
├── index.html          # Haupt- und einzige HTML-Datei
├── css/style.css       # Alle Styles zentral hier
├── js/main.js          # Minimales JS (Scroll-Highlighting)
├── assets/             # Bilder, Favicon etc.
├── CLAUDE.md           # Diese Datei
└── README.md
```

---

## Inhalt der Website

Die Website ist eine schlanke persönliche Seite mit:
1. **Hero / About** – Vorstellung, optionales Bild, Links
2. **CV** – Erfahrung, Ausbildung, Skills
3. **Aktuelle Projekte** – Karten mit Beschreibung und GitHub-Link
4. **Kontakt** – E-Mail, GitHub, ggf. LinkedIn

---

## Workflow & Konventionen

- Änderungen direkt auf `main` committen (kein Branch-Workflow nötig solange Solo-Projekt)
- Commit-Messages auf Englisch, prägnant
- Keine Minification / Optimierung-Schritte notwendig (GitHub Pages serv direkt)
- Bild für den Avatar: in `assets/` ablegen, dann in `index.html` `<img src="assets/foto.jpg">` einkommentieren

---

## Offene TODOs

- [ ] Echte Inhaltsdaten eintragen (Name, Bio, CV-Einträge, Projekte)
- [ ] Bild in `assets/` hinzufügen und Avatar-Placeholder ersetzen
- [ ] E-Mail im Kontakt-Bereich eintragen
- [ ] GitHub-Repo erstellen und pushen (`JayVeezy1/JayVeezy1.github.io`)
- [ ] GitHub Pages in den Repo-Settings aktivieren
- [ ] Favicon hinzufügen (`assets/favicon.ico` + `<link rel="icon">` in HTML)
- [ ] Ggf. LinkedIn / weitere Links ergänzen

---

## Entwicklungshistorie

| Datum      | Was                                              |
|------------|--------------------------------------------------|
| 2026-03-24 | Projekt initialisiert, Grundstruktur gebaut (HTML/CSS/JS) |

---

## Geplante Features / Ideen

- Favicon
- Open Graph Meta-Tags (für Link-Previews)
- Light/Dark-Mode Toggle
- Migration zu Astro (wenn Inhalt stabil)
