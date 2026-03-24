# Todos

Offene Aufgaben für die Website-Entwicklung.

---

## Inhalt

- [ ] **GAIDE-URL prüfen**: Railway-Deployment könnte inaktiv werden → ggf. neue URL in der Projektkarte aktualisieren (`index.html`, GAIDE-Card)
- [ ] **Aktuelle Projekte** ergänzen – weitere echte Projekte mit Beschreibung und GitHub-Links
- [ ] **Masterarbeit**: vollständigen Text verlinken (aktuell nur GitHub-Repo verlinkt)
- [ ] **Seminararbeiten**: bisherige Seminararbeiten sammeln und als Publications verlinken
- [ ] **E-Mail** im Contact-Bereich ergänzen (optional – aktuell nur GitHub + LinkedIn)

---

## Features

- [ ] **Favicon** hinzufügen
  - Icon-Datei in `assets/` ablegen
  - `<link rel="icon" href="assets/favicon.ico">` in alle HTML-Dateien ergänzen

- [ ] **Open Graph / Social Meta-Tags** für Link-Previews (wenn Link auf LinkedIn/WhatsApp geteilt wird)
  ```html
  <meta property="og:title" content="Jakob Vanek" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://JayVeezy1.github.io/assets/profilbild_v01.png" />
  <meta property="og:url" content="https://JayVeezy1.github.io" />
  <meta name="twitter:card" content="summary" />
  ```

- [ ] **Color-Shuffle verbessern** – Ideen:
  - Gewählte Palette in `localStorage` speichern → überlebt Seiten-Reload
  - CSS `transition` auf alle CSS-Variablen → sanftes Überblenden beim Farbwechsel
  - Palette-Name als kurze Toast-Nachricht anzeigen beim Klicken (z.B. "🎨 Emerald")
  - Tageszeit-basierte Auto-Palette: morgens warm/hell, abends dunkelblau/kalt
  - Farbpaletten-Vorschau als kleine Kreise anzeigen statt blindem Zufallsklick

---

## Hosting-Migration

- [ ] **Cloudflare Pages** einrichten (empfohlen – ermöglicht privates GitHub-Repo)
  - Free-Tier: unbegrenzte Deployments, Domain `*.pages.dev`, Custom Domain möglich
  - Ablauf: cloudflare.com → Pages → Connect to Git → Repo wählen → kein Build-Command, Output: `/`
  - **Bonus:** Cloudflare kann Security-Header setzen (CSP, X-Frame-Options, HSTS) → deutliche Sicherheitsverbesserung
  - Danach: GitHub-Repo auf privat stellen, GitHub Pages deaktivieren

---

## Sicherheit & Datenschutz

- [ ] **Security-Header** setzen (erst nach Cloudflare-Migration sinnvoll möglich):
  - `Content-Security-Policy` – verhindert XSS und unerwünschte externe Ressourcen
  - `X-Frame-Options: DENY` – verhindert Einbettung der Seite in fremde iframes (Clickjacking)
  - `X-Content-Type-Options: nosniff` – verhindert MIME-Type-Sniffing
  - `Strict-Transport-Security` (HSTS) – erzwingt HTTPS
  - Cloudflare Pages unterstützt Custom Headers via `_headers`-Datei

---

## Langfristig / Ideen

- [ ] Migration zu **Astro** oder **Jekyll** wenn Inhalt stabil ist
- [ ] Light/Dark-Mode Toggle
- [ ] Blog-Sektion

---

## Erledigt ✓

- [x] Grundstruktur initialisiert (HTML/CSS/JS, Single Page)
- [x] Echte CV-Inhalte aus Lebenslauf übernommen (WM Datenservice, DB Energie, Siemens, …)
- [x] Profilfoto eingebunden (`assets/profilbild_v01.png`)
- [x] GAIDE-Projekt ergänzt
- [x] 3D Rendering & Game Development Projekt ergänzt
- [x] Color-Shuffle-Feature implementiert (10 Paletten + Reset)
- [x] `rel="noopener noreferrer"` auf allen externen Links
- [x] Google Fonts entfernt → System-Font-Stack (DSGVO-konform, keine externen Requests)
- [x] Impressum erstellt (`impressum.html`) – ohne Privatadresse
- [x] Datenschutzerklärung erstellt (`datenschutz.html`)
- [x] `private/` in `.gitignore` aufgenommen
- [x] HTTP-Links auf HTTPS umgestellt (DOI-Links)
- [x] `lang="en"` gesetzt (Inhalt ist Englisch)
- [x] Deployment auf GitHub Pages (`main`-Branch, automatisch aktiv)
