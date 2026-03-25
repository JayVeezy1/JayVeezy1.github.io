// ── Active nav link on scroll ─────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const active = document.querySelector(`nav ul a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));


// ── Color shuffle ─────────────────────────────────────────────────────────────
const DEFAULT_COLORS = {
  '--bg':          '#0f0f11',
  '--bg-card':     '#18181c',
  '--border':      '#2a2a30',
  '--text':        '#e4e4e8',
  '--text-muted':  '#888892',
  '--accent':      '#7c6af7',
  '--accent-soft': '#7c6af720',
};

function hsl(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function hslHex(h, s, l) {
  // Returns hsl string directly — modern browsers handle it in CSS custom props
  return hsl(h, s, l);
}

function randomPalette() {
  const hue = Math.floor(Math.random() * 360);
  return {
    accent:    hslHex(hue, 80, 65),
    bg:        hslHex(hue, 15,  7),
    bgCard:    hslHex(hue, 15, 11),
    border:    hslHex(hue, 15, 18),
    text:      hslHex(hue, 10, 90),
    textMuted: hslHex(hue, 10, 55),
  };
}

function applyPalette(p) {
  const root = document.documentElement;
  root.style.setProperty('--accent',      p.accent);
  root.style.setProperty('--accent-soft', p.accent.replace('hsl(', 'hsla(').replace(')', ', 0.12)'));
  root.style.setProperty('--bg',          p.bg);
  root.style.setProperty('--bg-card',     p.bgCard);
  root.style.setProperty('--border',      p.border);
  root.style.setProperty('--text',        p.text);
  root.style.setProperty('--text-muted',  p.textMuted);
}

function applyDefaults() {
  const root = document.documentElement;
  Object.entries(DEFAULT_COLORS).forEach(([prop, val]) => root.style.setProperty(prop, val));
}

const btnShuffle = document.getElementById('btn-shuffle');
const btnReset   = document.getElementById('btn-reset');

// Hide reset button until the style has been changed
btnReset.style.visibility = 'hidden';

btnShuffle.addEventListener('click', () => {
  applyPalette(randomPalette());
  btnReset.style.visibility = 'visible';
});

btnReset.addEventListener('click', () => {
  applyDefaults();
  btnReset.style.visibility = 'hidden';
});
