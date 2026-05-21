// Boot
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("boot").classList.add("done"), 1400);
  setTimeout(() => document.getElementById("boot").remove(), 2200);
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById("burger");
const navMobile = document.getElementById("navMobile");
burger?.addEventListener("click", () => {
  const open = navMobile.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
navMobile?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navMobile.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Particles
const pBox = document.getElementById("particles");
if (pBox) {
  const colors = ["#22E2FF", "#FF2D9C", "#7C5CFF"];
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.bottom = (-10 - Math.random() * 20) + "%";
    const dur = 6 + Math.random() * 10;
    s.style.animationDuration = dur + "s";
    s.style.animationDelay = (-Math.random() * dur) + "s";
    const c = colors[Math.floor(Math.random() * colors.length)];
    s.style.background = c;
    s.style.boxShadow = `0 0 6px ${c}`;
    s.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
    pBox.appendChild(s);
  }
}

// Card spotlight
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
});

// Nav hide on scroll down
let lastY = 0;
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 80 && y > lastY) nav.style.transform = "translateY(-100%)";
  else nav.style.transform = "translateY(0)";
  lastY = y;
}, { passive: true });
