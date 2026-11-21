/* ==========================================================================
   Portfolio content — edit these arrays to update the site.
   ========================================================================== */
const CONTACT_EMAIL = "Leoandrei0222@gmail.com";

const PROJECTS = [
  {
    id: "amarra",
    image: "assets/projects/images/amarra.jpg", // put your image in assets/projects/images/ (.jpg .png .webp — match the extension here)
    title: "Amarra",
    subtitle: "Port Labour Cost & Auditing Platform",
    category: "case-study",
    role: "Back-End Developer",
    year: "Nov 2026",
    context: "LaSalle Port Innovation 2026 Hackathon",
    team: "Hackathon team",
    hue: 195,
    wide: true,
    summary:
      "3rd of 18 international teams. A costing and auditing engine that closed a 41.4% unallocated labour-cost blind spot for a Peruvian port terminal.",
    tags: [
      "TypeScript",
      "Next.js",
      "Neon Postgres",
      "Vitest",
      "Vercel AI SDK",
      "Gemini",
    ],
    problem:
      "TISUR Industry Challenge: a real port logistics problem for Terminal Internacional del Sur S.A. (Peru). USD 9,595 of USD 23,158 in shift wages (jornal) couldn’t be traced to the vessels they were spent on.",
    process: [
      "Engineered a stateless TypeScript costing engine with integer-cent arithmetic and half-up rounding to allocate shift wages to vessels.",
      "Built a 6-tier assignment cascade with confidence scoring and fuzzy matching (Jaro-Winkler and Naive Bayes) to parse Spanish free-text field logs, routing low-confidence entries to supervisor review.",
      "Implemented anomaly detection (Isolation Forest on wage-to-headcount discrepancies) and pre-berth crew and cost forecasting, with Google Gemini via Vercel AI Gateway for cross-table auditing.",
      "Designed a tamper-evident Neon Postgres architecture: SHA-256 dataset hashing, append-only audit logs, segregation of duties, OIDC/PKCE SSO, scrypt password hashing and encrypted hourly backups.",
      "Wrote Vitest golden-number test suites for cent-level reconciliation across imports, API mutations and report exports.",
    ],
    outcomes: [
      { value: "3rd", label: "of 18 international teams" },
      { value: "41.4%", label: "unallocated labour cost addressed" },
      { value: "USD 9,595", label: "of 23,158 previously untraced" },
    ],
    links: [],
  },
  {
    id: "college-hub",
    image: "assets/projects/images/college-hub.jpg", // put your image in assets/projects/images/ (.jpg .png .webp — match the extension here)
    title: "College Hub",
    subtitle: "All-in-One Student Academic Dashboard",
    category: "case-study",
    role: "Creator & Sole Developer",
    year: "Oct 2026 — Now",
    context: "Personal project for DLSU students",
    team: "Solo",
    hue: 255,
    summary:
      "An offline-first dashboard that unifies timetables, Canvas assignments, markdown notes and GPA simulation in one local-first app.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "Vitest",
      "GitHub Actions",
    ],
    problem:
      "DLSU students juggle timetables, Canvas deadlines, notes and grade calculations across separate tools. College Hub brings them together and keeps working offline, storing everything in localStorage and IndexedDB.",
    process: [
      "Engineered a Canvas iCal (.ics) parser and urgency engine that extracts course tags, maps deadlines to courses with idempotent deduplication and prioritizes tasks across live time-state views.",
      "Built a weighted what-if grade and GPA simulator with custom grading scales, ungraded-component sliders, required-average calculations and term and cumulative GPA targets.",
      "Developed a time-aware hero engine with live session countdowns, overlap-validated weekly schedules, session-linked notes, global keyboard search and optional Google OAuth.",
      "Configured GitHub Actions CI/CD running Oxlint, Vitest unit and component tests and production Vite builds on every push, with continuous deploys to Vercel.",
    ],
    outcomes: [
      { value: "Offline-first", label: "localStorage + IndexedDB" },
      { value: "Every push", label: "linted, tested and built in CI" },
    ],
    links: [
      { label: "Live demo", href: "https://laxed-college-hub.vercel.app" },
      {
        label: "Source on GitHub",
        href: "https://github.com/Laxus-CMD/college-hub",
      },
    ],
  },
  {
    id: "hinigram",
    image: "assets/projects/images/hinigram.jpg", // put your image in assets/projects/images/ (.jpg .png .webp — match the extension here)
    title: "Hinigram",
    subtitle: "Contactless Respiratory Triage System",
    category: "experiment",
    role: "Co-designer · Team Gengineers",
    year: "2026",
    context: "PJDSC ’26 — Public Health Analytics",
    team: "Team Gengineers",
    hue: 160,
    summary:
      "Reads breathing from WiFi Channel State Information on 4 ESP32 nodes, separating up to 3 people at once without touching them.",
    tags: ["Python", "ESP32", "WiFi CSI", "FastICA", "Signal Processing"],
    problem:
      "Respiratory triage usually needs contact sensors or staff time. Hinigram explores whether ordinary WiFi signals can flag irregular breathing for several seated people at once.",
    process: [
      "Co-designed a contactless triage system reading breathing from WiFi Channel State Information on 4 ESP32 nodes.",
      "Built a Python signal pipeline (Hampel filter, FastICA, 0.2–0.5 Hz Butterworth bandpass) that separates breathing for up to 3 people at once.",
      "Used Hopf oscillator phase-locking to flag irregular breathing.",
      "Developed a live dashboard with seat-level alerts and an event log.",
    ],
    outcomes: [
      { value: "4", label: "ESP32 sensing nodes" },
      { value: "Up to 3", label: "people separated at once" },
      { value: "≥90%", label: "sensitivity (design target)" },
      { value: "≤2 s", label: "alert latency (design target)" },
    ],
    links: [],
  },
  {
    id: "pcpug-forum",
    image: "assets/projects/images/pcpug-forum.jpg", // put your image in assets/projects/images/ (.jpg .png .webp — match the extension here)
    title: "Digital Transformation in Coal-Fired Plants",
    subtitle: "30th PCPUG Technical Forum",
    category: "case-study",
    role: "Presenter & Designer",
    year: "EISSSI",
    context: "30th PCPUG Technical Forum",
    team: "EISSSI",
    hue: 30,
    summary:
      "Designed and built the forum presentation, turning Philippine energy mix, plant capacity and unit efficiency data into dashboards.",
    tags: ["Data Visualization", "Presentation Design", "Energy"],
    problem:
      "The forum’s audience of power-plant engineers needed a clear, data-backed picture of where digital transformation fits in coal-fired generation in the Philippines.",
    process: [
      "Gathered Philippine energy mix, plant capacity and unit efficiency data.",
      "Turned the data into dashboards that anchor the narrative of the talk.",
      "Designed and built the full presentation for EISSSI.",
    ],
    outcomes: [{ value: "30th", label: "PCPUG Technical Forum" }],
    links: [],
  },
  {
    id: "notion-relaunch",
    image: "assets/projects/images/notion-relaunch.jpg", // put your image in assets/projects/images/ (.jpg .png .webp — match the extension here)
    title: "Notion Workspace Briefing",
    subtitle: "EISSSI Product Re-launch",
    category: "case-study",
    role: "Presenter",
    year: "EISSSI",
    context: "Company-wide product re-launch",
    team: "EISSSI",
    hue: 280,
    summary:
      "A company-wide briefing positioning Notion against Salesforce, Microsoft 365 and Asana, with four core workflows mapped into databases and live dashboards.",
    tags: ["Notion", "Workflow Design", "Dashboards"],
    problem:
      "For EISSSI’s product re-launch, the company needed to see how Notion compares with the tools teams already know, and what their own workflows would look like inside it.",
    process: [
      "Positioned Notion against Salesforce, Microsoft 365 and Asana.",
      "Mapped four core company workflows into Notion databases.",
      "Built live dashboards on top of those databases and presented them company-wide.",
    ],
    outcomes: [
      { value: "4", label: "core workflows mapped to databases & dashboards" },
    ],
    links: [],
  },
];

const SKILLS = [
  {
    name: "Back-End Engineering",
    desc: "Stateless services, careful money math, auditable data and tests that pin numbers down.",
    tools: ["Next.js", "Neon Postgres", "Vitest"],
    icon: "database",
  },
  {
    name: "Frontend Development",
    desc: "Offline-first, keyboard-friendly React apps.",
    tools: ["React", "Tailwind CSS", "Zustand", "Vite"],
    icon: "layers",
  },
  {
    name: "Embedded & Signal Processing",
    desc: "Sensing prototypes from ESP32 hardware to filtered signals.",
    tools: ["ESP32", "WiFi CSI", "Hampel", "FastICA", "Butterworth"],
    icon: "chip",
  },
  {
    name: "Programming Languages",
    desc: "Comfortable across typed, scripting and systems languages.",
    tools: ["Python", "Java", "JavaScript", "TypeScript", "C++", "HTML", "CSS"],
    icon: "code",
  },
  {
    name: "CI/CD & Deployment",
    desc: "Automated lint, test and build pipelines with continuous deploys.",
    tools: ["GitHub Actions", "Vercel"],
    icon: "deploy",
  },
  {
    name: "Design & Presentation",
    desc: "Turning data and workflows into clear decks and dashboards.",
    tools: ["Notion", "Figma", "Canva", "TinkerCAD", "Fusion 360"],
    icon: "pen",
  },
];

const EXPERIENCE = [
  {
    role: "Engineering Intern · Presenter & Designer",
    org: "Energy Integrated Systems and Support Services Inc. (EISSSI) · Laguna & Tarlac",
    date: "Jan 2025 — Now",
    current: true,
    note: "Cadetship Onboarding Program. Built and presented the Notion re-launch briefing and the 30th PCPUG Technical Forum deck.",
  },
  {
    role: "Secretariat Intern · US Business Trips",
    org: "EISSSI with Curtiss-Wright & Airflow Sciences",
    date: "Jan 2025 · Jun 2026",
    note: "Recorded meeting minutes and handled flights, accommodation and transport for the delegation.",
  },
  {
    role: "Invited Guest · Nuclear Engineering Symposium",
    org: "Curtiss-Wright · Idaho, USA | SAS Global & Airflow Sciences · Detroit, USA",
    date: "3-day symposium",
    note: "Joined site visits with Airflow Sciences and SAS Global and helped prepare EISSSI’s presentation on the Philippine energy industry.",
  },
  {
    role: "3rd Place · LaSalle Port Innovation 2026",
    org: "International Hackathon — TISUR Industry Challenge",
    date: "Nov 2026",
  },
  {
    role: "Participant · PJDSC ’26",
    org: "Public Health Analytics — Team Gengineers",
    date: "2026",
  },
];

const FAQ = [
  {
    q: "What are you studying?",
    a: "BS Computer Engineering at De La Salle University, Laguna Campus in Biñan, Laguna (2026 to present).",
  },
  {
    q: "What kind of work do you do?",
    a: "Mostly back-end and full-stack TypeScript (Next.js, Postgres), React frontends, and embedded / signal-processing prototypes on ESP32.",
  },
  {
    q: "Where can I see your code?",
    a: "On GitHub at github.com/Laxus-CMD. College Hub also has a live demo at laxed-college-hub.vercel.app.",
  },
  {
    q: "What’s the best way to reach you?",
    a: "Send a quick message from this panel, or email Leoandrei0222@gmail.com directly.",
  },
];

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

const svg = (paths, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;

const ICONS = {
  arrow: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
  close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  pen: svg(
    '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  ),
  code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  layers: svg(
    '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  ),
  play: svg('<path d="M6 4l14 8-14 8z"/>'),
  database: svg(
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  ),
  chip: svg(
    '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  ),
  deploy: svg('<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>'),
};

const CATEGORY_LABEL = { "case-study": "Case Study", experiment: "Experiment" };

// Image hints ("drop your image here") only appear while previewing locally,
// so they never show on the published site.
const IS_LOCAL_PREVIEW =
  location.protocol === "file:" ||
  ["localhost", "127.0.0.1", ""].includes(location.hostname);

/* Project thumbnails: shows p.image if the file exists; otherwise falls back
   to the generated glass mock-up (plus a hint with the expected path when
   previewing locally). */
const thumbMarkup = (p) => `
  <div class="thumb${p.image ? " has-image" : ""}" style="--h:${Number(p.hue) || 230}" aria-hidden="true">
    <div class="thumb__ui">
      <div class="thumb__dots"><i></i><i></i><i></i></div>
      <div class="thumb__side"><i></i><i></i><i></i><i></i></div>
      <div class="thumb__main"><b></b><i></i><i></i><i></i></div>
    </div>
    ${
      p.image
        ? `<img class="thumb__img" src="${esc(p.image)}" alt="" loading="lazy" decoding="async"
             style="object-position:${esc(p.imagePosition || "center")}"
             onload="this.parentNode.classList.add('is-loaded')"
             onerror="this.parentNode.classList.add('is-missing'); this.remove()" />
           ${IS_LOCAL_PREVIEW ? `<span class="thumb__hint">Add image → ${esc(p.image)}</span>` : ""}`
        : ""
    }
  </div>`;

const tagsMarkup = (tags) =>
  `<ul class="tags">${tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>`;

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
        ${p.subtitle ? `<p class="card__subtitle">${esc(p.subtitle)}</p>` : ""}
        <p class="card__summary">${esc(p.summary)}</p>
        ${tagsMarkup(p.tags)}
      </div>
    </article>`,
  ).join("");

  $$("[data-count]").forEach((el) => {
    const f = el.dataset.count;
    el.textContent =
      f === "all"
        ? PROJECTS.length
        : PROJECTS.filter((p) => p.category === f).length;
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
    </li>`,
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
    </li>`,
  ).join("");
}

function renderFaq() {
  $("#pane-faq").innerHTML = FAQ.map(
    (f, i) =>
      `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`,
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
const filterGroup = $("#work .segmented");

filterGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  $$("[data-filter]", filterGroup).forEach((b) =>
    b.setAttribute("aria-pressed", String(b === btn)),
  );
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
const canTilt = () =>
  matchMedia("(hover: hover)").matches && !reduceMotion.matches;

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
    { once: true },
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
      ${p.subtitle ? `<p class="modal__subtitle">${esc(p.subtitle)}</p>` : ""}
      <p class="modal__lede">${esc(p.summary)}</p>

      <dl class="facts">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Context</dt><dd>${esc(p.context)}</dd></div>
        <div><dt>Team</dt><dd>${esc(p.team)}</dd></div>
        <div><dt>When</dt><dd>${esc(p.year)}</dd></div>
      </dl>

      <section class="modal__section">
        <h3>The challenge</h3>
        <p>${esc(p.problem)}</p>
      </section>

      <section class="modal__section">
        <h3>What I did</h3>
        <ol class="steps">${p.process.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </section>

      <section class="modal__section">
        <h3>Highlights</h3>
        <div class="outcomes">
          ${p.outcomes.map((o) => `<div class="outcome"><strong>${esc(o.value)}</strong><span>${esc(o.label)}</span></div>`).join("")}
        </div>
      </section>

      <section class="modal__section">
        <h3>Built with</h3>
        ${tagsMarkup(p.tags)}
      </section>

      ${
        p.links.length
          ? `<div class="modal__actions">${p.links
              .map(
                (l, i) =>
                  `<a class="btn ${i === 0 ? "btn--primary" : "btn--ghost"}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ${ICONS.arrow}</a>`,
              )
              .join("")}</div>`
          : ""
      }
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
  }),
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
    const next =
      tabs[
        (tabs.indexOf(tab) + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) %
          tabs.length
      ];
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
  railToggle.setAttribute(
    "aria-label",
    expanded ? "Collapse sidebar" : "Expand sidebar",
  );
  try {
    localStorage.setItem("rail-expanded", expanded ? "1" : "0");
  } catch {}
}
railToggle.addEventListener("click", () =>
  setRail(!app.classList.contains("is-expanded")),
);
try {
  setRail(localStorage.getItem("rail-expanded") === "1");
} catch {}

const canvas = $("#main");
const links = $$(".rail__link[data-section]");
const sectionTitle = $("#toolbar-section");

const sections = $$(".section", canvas);
let currentSection = "";

function updateSpy() {
  const probe = canvas.scrollTop + canvas.clientHeight * 0.35;
  const atBottom =
    canvas.scrollTop + canvas.clientHeight >= canvas.scrollHeight - 4;
  let id = sections[0].id;
  for (const s of sections) if (s.offsetTop <= probe) id = s.id;
  if (atBottom) id = sections[sections.length - 1].id;
  if (id === currentSection) return;
  currentSection = id;

  links.forEach((l) => {
    const on = l.dataset.section === id;
    l.classList.toggle("is-active", on);
    on
      ? l.setAttribute("aria-current", "true")
      : l.removeAttribute("aria-current");
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
  { passive: true },
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
