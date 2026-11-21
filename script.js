/* ==========================================================================
   Portfolio content — edit these arrays to make the site yours.
   ========================================================================== */
const CONTACT_EMAIL = "hello@example.com";

const PROJECTS = [
  {
    id: "campus-transit",
    title: "Campus Transit Tracker",
    category: "case-study",
    role: "Lead Designer & Frontend",
    year: "2026",
    duration: "10 weeks",
    team: "3 students",
    hue: 200,
    wide: true,
    summary: "A real-time shuttle map now used by 4,000+ students, cutting “where’s my bus?” complaints by 38%.",
    tags: ["React", "Mapbox", "Figma", "WebSockets"],
    problem:
      "Campus shuttles ran on a printed schedule that drifted by 10–15 minutes daily. Students waited in the cold with no idea whether a bus was coming.",
    process: [
      "Interviewed 18 riders and 2 drivers; mapped the journey from leaving class to boarding.",
      "Prototyped three map-first concepts in Figma and ran hallway tests with 12 students.",
      "Built the PWA in React with live GPS pings streamed over WebSockets.",
      "Partnered with Transportation Services to put QR codes on every stop.",
    ],
    outcomes: [
      { value: "4,000+", label: "monthly active riders" },
      { value: "−38%", label: "wait-time complaints" },
      { value: "4.7★", label: "student satisfaction" },
    ],
    links: [
      { label: "View live site", href: "#" },
      { label: "Source on GitHub", href: "#" },
    ],
  },
  {
    id: "studysync",
    title: "StudySync",
    category: "case-study",
    role: "Product Designer",
    year: "2025",
    duration: "36-hour hackathon",
    team: "4 students",
    hue: 265,
    summary: "A collaborative study planner that won 1st place at HackState out of 60 teams.",
    tags: ["Figma", "Next.js", "Supabase"],
    problem:
      "Study groups coordinate across group chats, shared docs and calendars — and still miss sessions.",
    process: [
      "Ran a 15-minute survey with 40 classmates on the first night.",
      "Designed a single shared board combining availability, goals and resources.",
      "Built a clickable prototype and demo flow for the judges.",
    ],
    outcomes: [
      { value: "1st", label: "place out of 60 teams" },
      { value: "40", label: "students surveyed" },
    ],
    links: [{ label: "Watch the demo", href: "#" }],
  },
  {
    id: "shader-garden",
    title: "Shader Garden",
    category: "experiment",
    role: "Creative Coding",
    year: "2026",
    duration: "Ongoing",
    team: "Solo",
    hue: 150,
    summary: "Generative plants grown entirely in fragment shaders — a playground for learning GLSL.",
    tags: ["GLSL", "Three.js"],
    problem: "I wanted to understand shaders by making something I’d enjoy looking at every day.",
    process: [
      "Started from signed-distance functions for stems and petals.",
      "Added noise-driven wind and a day/night palette tied to local time.",
    ],
    outcomes: [{ value: "60fps", label: "on a 2019 laptop" }],
    links: [{ label: "Open the garden", href: "#" }],
  },
  {
    id: "library-booking",
    title: "Library Room Booking",
    category: "case-study",
    role: "UX Researcher",
    year: "2025",
    duration: "HCI course project",
    team: "2 students",
    hue: 25,
    summary: "A usability study that cut the room-booking flow from 7 steps to 3.",
    tags: ["User Research", "Prototyping", "Usability Testing"],
    problem:
      "The library’s room booking took seven screens and a login redirect; 1 in 3 students gave up halfway.",
    process: [
      "Ran moderated usability tests with 24 students and logged every drop-off.",
      "Synthesised findings in an affinity map and prioritised with the library staff.",
      "Prototyped a 3-step flow and validated it in a second round of testing.",
    ],
    outcomes: [
      { value: "7 → 3", label: "steps to book" },
      { value: "92%", label: "task success (from 64%)" },
    ],
    links: [{ label: "Read the report", href: "#" }],
  },
  {
    id: "type-playground",
    title: "Type Scale Playground",
    category: "experiment",
    role: "Design Tooling",
    year: "2026",
    duration: "Weekend project",
    team: "Solo",
    hue: 320,
    summary: "A tiny tool for previewing fluid type scales and exporting them as CSS variables.",
    tags: ["TypeScript", "CSS"],
    problem: "I kept rebuilding the same clamp() math for every class project.",
    process: [
      "Built a live preview that interpolates sizes between two viewport widths.",
      "Added one-click export to CSS custom properties and Tailwind config.",
    ],
    outcomes: [{ value: "300+", label: "GitHub stars" }],
    links: [{ label: "Try it", href: "#" }],
  },
  {
    id: "gesture-piano",
    title: "Gesture Piano",
    category: "experiment",
    role: "Prototype",
    year: "2025",
    duration: "2 weeks",
    team: "Solo",
    hue: 45,
    summary: "Play chords in the air with your webcam using hand tracking and the Web Audio API.",
    tags: ["MediaPipe", "Web Audio"],
    problem: "Could a browser instrument feel responsive enough to actually play?",
    process: [
      "Mapped finger positions from MediaPipe to a pentatonic scale.",
      "Tuned latency below 40ms by moving audio scheduling off the main thread.",
    ],
    outcomes: [{ value: "<40ms", label: "gesture-to-sound latency" }],
    links: [{ label: "Play in browser", href: "#" }],
  },
];

const SKILLS = [
  { name: "Interface Design", desc: "Clear, calm product UI from flows to pixel polish.", tools: ["Figma", "Framer"], icon: "pen" },
  { name: "Frontend Engineering", desc: "Accessible, fast interfaces that match the design.", tools: ["React", "TypeScript", "CSS"], icon: "code" },
  { name: "User Research", desc: "Interviews, usability tests and turning notes into decisions.", tools: ["Dovetail", "Maze"], icon: "search" },
  { name: "Design Systems", desc: "Tokens, components and docs that scale across a team.", tools: ["Storybook", "Tokens"], icon: "layers" },
  { name: "Prototyping & Motion", desc: "Interaction details that make products feel alive.", tools: ["Principle", "GSAP"], icon: "play" },
];

const EXPERIENCE = [
  { role: "Frontend Engineering Intern", org: "Northwind Labs", date: "Jun — Aug 2026", note: "Shipped a design-system migration across 40+ screens." },
  { role: "Teaching Assistant, Intro to HCI", org: "State University", date: "Jan 2026 — Now", current: true, note: "Lead weekly critiques for 30 students." },
  { role: "Design Lead", org: "University Hackers Club", date: "2025 — Now", current: true },
  { role: "Freelance Web Developer", org: "Local small businesses", date: "2024 — 2025", note: "Built 6 sites for cafés, studios and nonprofits." },
];

const FAQ = [
  { q: "Are you available for internships?", a: "Yes! I’m looking for Summer 2027 product design or frontend internships — remote or in Boston." },
  { q: "What are you studying?", a: "Computer Science with a minor in Design at State University, graduating May 2028." },
  { q: "What’s your favourite stack?", a: "Figma for exploring, then React + TypeScript with plain CSS (or Tailwind) for building." },
  { q: "Can I see more work?", a: "Absolutely — send a quick message and I’ll share additional case studies and process files." },
];

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

const svg = (paths, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;

const ICONS = {
  arrow: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
  close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  pen: svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>'),
  code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  layers: svg('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'),
  play: svg('<path d="M6 4l14 8-14 8z"/>'),
};

const CATEGORY_LABEL = { "case-study": "Case Study", experiment: "Experiment" };

const thumbMarkup = (p) => `
  <div class="thumb" style="--h:${Number(p.hue) || 230}" aria-hidden="true">
    <div class="thumb__ui">
      <div class="thumb__dots"><i></i><i></i><i></i></div>
      <div class="thumb__side"><i></i><i></i><i></i><i></i></div>
      <div class="thumb__main"><b></b><i></i><i></i><i></i></div>
    </div>
  </div>`;

const tagsMarkup = (tags) => `<ul class="tags">${tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>`;

/* ==========================================================================
   Render content
   ========================================================================== */
const grid = $("#project-grid");

function renderProjects() {
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <article class="card${p.wide ? " is-wide" : ""}" data-category="${esc(p.category)}" data-id="${esc(p.id)}" style="--i:${i}">
      <button class="card__hit" type="button" aria-haspopup="dialog" aria-label="Open case study: ${esc(p.title)}"></button>
      <span class="card__badge">${CATEGORY_LABEL[p.category] ?? ""}</span>
      <span class="card__arrow" aria-hidden="true">${ICONS.arrow}</span>
      ${thumbMarkup(p)}
      <div class="card__body">
        <p class="card__meta">${esc(p.role)} · ${esc(p.year)}</p>
        <h3 class="card__title">${esc(p.title)}</h3>
        <p class="card__summary">${esc(p.summary)}</p>
        ${tagsMarkup(p.tags)}
      </div>
    </article>`
  ).join("");

  $$("[data-count]").forEach((el) => {
    const f = el.dataset.count;
    el.textContent = f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
  });
}

function renderSkills() {
  $("#skills-list").innerHTML = SKILLS.map(
    (s) => `
    <li class="skill">
      <span class="skill__icon">${ICONS[s.icon] ?? ""}</span>
      <div>
        <p class="skill__name">${esc(s.name)}</p>
        <p class="skill__desc">${esc(s.desc)}</p>
        ${tagsMarkup(s.tools)}
      </div>
    </li>`
  ).join("");
}

function renderExperience() {
  $("#timeline").innerHTML = EXPERIENCE.map(
    (e) => `
    <li class="timeline__item${e.current ? " is-current" : ""}">
      <div>
        <p class="timeline__role">${esc(e.role)}</p>
        <p class="timeline__org">${esc(e.org)}</p>
        ${e.note ? `<p class="timeline__note">${esc(e.note)}</p>` : ""}
      </div>
      <span class="timeline__date">${esc(e.date)}</span>
    </li>`
  ).join("");
}

function renderFaq() {
  $("#pane-faq").innerHTML = FAQ.map(
    (f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`
  ).join("");
}

/* ==========================================================================
   Segmented controls (sliding indicator)
   ========================================================================== */
function moveIndicator(group) {
  const active = $('[aria-pressed="true"], [aria-selected="true"]', group);
  const ind = $(".segmented__indicator", group);
  if (!active || !ind) return;
  ind.style.width = `${active.offsetWidth}px`;
  ind.style.transform = `translateX(${active.offsetLeft}px)`;
}
const refreshIndicators = () => $$(".segmented").forEach(moveIndicator);

/* ── Project filtering ── */
const filterGroup = $('#work .segmented');

filterGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  $$("[data-filter]", filterGroup).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
  moveIndicator(filterGroup);
  applyFilter(btn.dataset.filter);
});

function applyFilter(filter) {
  let visible = 0;
  $$(".card", grid).forEach((card) => {
    const show = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !show);
    if (show) {
      // restart the entrance animation with a fresh stagger
      card.style.setProperty("--i", visible++);
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "";
    }
  });
}

/* ==========================================================================
   Card tilt micro-interaction
   ========================================================================== */
const canTilt = () => matchMedia("(hover: hover)").matches && !reduceMotion.matches;

grid.addEventListener("pointermove", (e) => {
  const card = e.target.closest(".card");
  if (!card || !canTilt()) return;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
  card.style.setProperty("--ry", `${(x * 5).toFixed(2)}deg`);
});

grid.addEventListener("pointerout", (e) => {
  const card = e.target.closest(".card");
  if (card && !card.contains(e.relatedTarget)) {
    card.style.removeProperty("--rx");
    card.style.removeProperty("--ry");
  }
});

/* ==========================================================================
   Dialogs (modal + drawer) with exit animations
   ========================================================================== */
function openDialog(dlg) {
  if (dlg.open) return;
  dlg.classList.remove("is-closing");
  dlg.showModal();
}

function closeDialog(dlg) {
  if (!dlg.open || dlg.classList.contains("is-closing")) return;
  if (reduceMotion.matches) return dlg.close();
  dlg.classList.add("is-closing");
  const panel = dlg.firstElementChild;
  panel.addEventListener(
    "animationend",
    () => {
      dlg.classList.remove("is-closing");
      dlg.close();
    },
    { once: true }
  );
}

$$("dialog").forEach((dlg) => {
  dlg.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeDialog(dlg);
  });
  // click on the backdrop (outside the panel) closes
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) closeDialog(dlg);
    if (e.target.closest("[data-close]")) closeDialog(dlg);
  });
});

/* ── Project modal ── */
const modal = $("#project-modal");

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;

  $("#modal-content").innerHTML = `
    <div class="modal__hero">
      ${thumbMarkup(p)}
      <span class="card__badge">${CATEGORY_LABEL[p.category] ?? ""}</span>
      <button class="icon-btn modal__close" type="button" data-close aria-label="Close case study">${ICONS.close}</button>
    </div>
    <div class="modal__body">
      <p class="card__meta">${esc(p.role)} · ${esc(p.year)}</p>
      <h2 class="modal__title" id="modal-title">${esc(p.title)}</h2>
      <p class="modal__lede">${esc(p.summary)}</p>

      <dl class="facts">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Timeline</dt><dd>${esc(p.duration)}</dd></div>
        <div><dt>Team</dt><dd>${esc(p.team)}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
      </dl>

      <section class="modal__section">
        <h3>The problem</h3>
        <p>${esc(p.problem)}</p>
      </section>

      <section class="modal__section">
        <h3>Process</h3>
        <ol class="steps">${p.process.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </section>

      <section class="modal__section">
        <h3>Outcome</h3>
        <div class="outcomes">
          ${p.outcomes.map((o) => `<div class="outcome"><strong>${esc(o.value)}</strong><span>${esc(o.label)}</span></div>`).join("")}
        </div>
      </section>

      <section class="modal__section">
        <h3>Built with</h3>
        ${tagsMarkup(p.tags)}
      </section>

      <div class="modal__actions">
        ${p.links
          .map(
            (l, i) =>
              `<a class="btn ${i === 0 ? "btn--primary" : "btn--ghost"}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ${ICONS.arrow}</a>`
          )
          .join("")}
      </div>
    </div>`;

  openDialog(modal);
  modal.firstElementChild.scrollTop = 0;
  $(".modal__close", modal).focus();
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openProject(card.dataset.id);
});

/* ── Contact drawer ── */
const drawer = $("#drawer");
$$("[data-open-drawer]").forEach((btn) =>
  btn.addEventListener("click", () => {
    openDialog(drawer);
    requestAnimationFrame(() => moveIndicator($(".segmented", drawer)));
  })
);

const tabs = $$('[role="tab"]', drawer);
function selectTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    $(`#${t.getAttribute("aria-controls")}`).hidden = !on;
  });
  moveIndicator($(".segmented", drawer));
}
tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = tabs[(tabs.indexOf(tab) + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    next.focus();
    selectTab(next);
  });
});

/* ── Contact form → mailto ── */
const form = $("#pane-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();
  const err = $("#form-error");

  if (!name || !message || !form.elements.email.checkValidity() || !email) {
    err.hidden = false;
    return;
  }
  err.hidden = true;

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  form.reset();
  closeDialog(drawer);
  toast("Opening your email app…");
});

/* ── Toast ── */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2600);
}

/* ==========================================================================
   Rail: collapse toggle + scroll spy
   ========================================================================== */
const app = $("#app");
const railToggle = $("#rail-toggle");

function setRail(expanded) {
  app.classList.toggle("is-expanded", expanded);
  railToggle.setAttribute("aria-expanded", String(expanded));
  railToggle.setAttribute("aria-label", expanded ? "Collapse sidebar" : "Expand sidebar");
  try { localStorage.setItem("rail-expanded", expanded ? "1" : "0"); } catch {}
}
railToggle.addEventListener("click", () => setRail(!app.classList.contains("is-expanded")));
try { setRail(localStorage.getItem("rail-expanded") === "1"); } catch {}

const canvas = $("#main");
const links = $$(".rail__link[data-section]");
const sectionTitle = $("#toolbar-section");

const sections = $$(".section", canvas);
let currentSection = "";

function updateSpy() {
  const probe = canvas.scrollTop + canvas.clientHeight * 0.35;
  const atBottom = canvas.scrollTop + canvas.clientHeight >= canvas.scrollHeight - 4;
  let id = sections[0].id;
  for (const s of sections) if (s.offsetTop <= probe) id = s.id;
  if (atBottom) id = sections[sections.length - 1].id;
  if (id === currentSection) return;
  currentSection = id;

  links.forEach((l) => {
    const on = l.dataset.section === id;
    l.classList.toggle("is-active", on);
    on ? l.setAttribute("aria-current", "true") : l.removeAttribute("aria-current");
    if (on) sectionTitle.textContent = l.textContent.trim();
  });
}

let spyQueued = false;
canvas.addEventListener(
  "scroll",
  () => {
    if (spyQueued) return;
    spyQueued = true;
    requestAnimationFrame(() => {
      spyQueued = false;
      updateSpy();
    });
  },
  { passive: true }
);

/* ==========================================================================
   Init
   ========================================================================== */
renderProjects();
renderSkills();
renderExperience();
renderFaq();
$("#year").textContent = new Date().getFullYear();
updateSpy();
addEventListener("load", updateSpy);

refreshIndicators();
document.fonts?.ready.then(refreshIndicators);
// keep indicators aligned when fonts load, counts render, or layout changes
if ("ResizeObserver" in window) {
  const ro = new ResizeObserver(refreshIndicators);
  $$(".segmented__btn").forEach((b) => ro.observe(b));
} else {
  addEventListener("resize", refreshIndicators);
}
