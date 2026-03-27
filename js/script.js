const siteConfig = window.siteConfig || {};
const projects = window.projects || [];

const state = {
  galleryProjectId: projects[0]?.id || "",
  unitsProjectId: projects[0]?.id || "",
  lightboxProjectId: projects[0]?.id || "",
  lightboxIndex: 0
};

const refs = {
  heroProjects: document.getElementById("heroProjects"),
  projectCards: document.getElementById("projectCards"),
  galleryTabs: document.getElementById("galleryTabs"),
  galleryPanel: document.getElementById("galleryPanel"),
  unitTabs: document.getElementById("unitTabs"),
  unitsPanel: document.getElementById("unitsPanel"),
  contactList: document.getElementById("contactList"),
  footerMeta: document.getElementById("footerMeta"),
  form: document.getElementById("contactForm"),
  formResponse: document.getElementById("formResponse"),
  menuToggle: document.getElementById("menuToggle"),
  mainNav: document.getElementById("mainNav"),
  header: document.querySelector(".site-header"),
  lightbox: document.getElementById("lightbox"),
  lightboxImage: document.getElementById("lightboxImage"),
  lightboxCaption: document.getElementById("lightboxCaption"),
  lightboxClose: document.getElementById("lightboxClose"),
  lightboxPrev: document.getElementById("lightboxPrev"),
  lightboxNext: document.getElementById("lightboxNext"),
  whatsAppFloat: document.getElementById("whatsAppFloat")
};

function getProject(projectId) {
  return projects.find((project) => project.id === projectId) || projects[0];
}

function getInitials(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function createLogoMarkup(project, className = "") {
  const safeClass = className ? ` ${className}` : "";

  if (project.logo) {
    return `<img class="project-logo${safeClass}" src="${project.logo}" alt="Logo ${project.name}" loading="lazy" />`;
  }

  return `<div class="logo-placeholder${safeClass}" aria-label="Logo placeholder ${project.name}">${getInitials(project.name)}</div>`;
}

function iconSvg(type) {
  const icons = {
    phone:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.6 3.2 3.8 5.4 7 7l2.3-2.3c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3.5c0-.6.4-1 1-1h4.3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2 2.7Z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.6 9-5.6V7H3Zm18 10V9.8l-8.5 5.3a1 1 0 0 1-1 0L3 9.8V17h18Z"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.3-5.9c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.8-.1.1-.2.2-.4.1-1.1-.6-1.8-1.1-2.5-2.3-.2-.3 0-.4.1-.5l.3-.4.2-.4c.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.2 1.7 2.6 4.1 3.6.6.3 1 .4 1.3.5.5.1 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1-.1-.1-.3-.2-.4-.2Z"/></svg>',
    website:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.2a15.6 15.6 0 0 0-1.4-5A8.1 8.1 0 0 1 18.9 11Zm-6.9 9c-.8 0-2.2-1.9-2.7-5h5.4c-.5 3.1-1.9 5-2.7 5Zm-3-7a14 14 0 0 1 0-2h6a14.1 14.1 0 0 1 0 2h-6Zm.3-7A15.5 15.5 0 0 0 8 11H4.8a8.1 8.1 0 0 1 4.5-5Zm-4.5 7H8c.1 1.8.5 3.5 1.2 5A8.1 8.1 0 0 1 4.8 13Zm9.5 5c.7-1.5 1.1-3.2 1.2-5h3.2a8.1 8.1 0 0 1-4.4 5Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>'
  };

  return icons[type] || "";
}

function renderBranding() {
  document.documentElement.style.setProperty("--hero-image", `url("${siteConfig.heroImage || ""}")`);

  const brandName = siteConfig.brandName || "Alma Matter Sur";
  const brandTagline = siteConfig.brandTagline || "Parcelas premium en el sur de Chile";

  const brandNameEl = document.getElementById("brandName");
  const brandTaglineEl = document.getElementById("brandTagline");
  const footerBrandNameEl = document.getElementById("footerBrandName");
  const footerBrandTaglineEl = document.getElementById("footerBrandTagline");

  if (brandNameEl) brandNameEl.textContent = brandName;
  if (brandTaglineEl) brandTaglineEl.textContent = brandTagline;
  if (footerBrandNameEl) footerBrandNameEl.textContent = brandName;
  if (footerBrandTaglineEl) footerBrandTaglineEl.textContent = brandTagline;

  document.title = `${brandName} | Parcelas premium en el sur de Chile`;
}

function renderHeroProjects() {
  if (!refs.heroProjects) return;

  refs.heroProjects.innerHTML = projects
    .map(
      (project) => `
        <article class="hero-project-card">
          ${createLogoMarkup(project)}
          <strong>${project.name}</strong>
          <span>${project.location}</span>
          <p class="hero-project-line">${project.heroLine || project.badge || "Ultimas unidades disponibles"}</p>
          <button class="btn btn-primary hero-card-btn" type="button" data-project-id="${project.id}" data-target="proyectos">
            Visitar proyecto
          </button>
        </article>
      `
    )
    .join("");
}

function renderProjectCards() {
  if (!refs.projectCards) return;

  refs.projectCards.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-top">
            ${createLogoMarkup(project)}
            <div class="project-logo-copy">
              <strong>${project.name}</strong>
              <span>${project.location}</span>
            </div>
          </div>
          <span class="project-badge">${project.badge || "Ultimas unidades disponibles"}</span>
          <p>${project.description}</p>
          <div class="project-actions">
            <button class="btn btn-secondary" type="button" data-project-id="${project.id}" data-target="galerias">Ver galeria</button>
            <button class="btn btn-primary" type="button" data-project-id="${project.id}" data-target="unidades">Ver unidades</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTabs(container, activeId, target) {
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
        <button
          class="tab${project.id === activeId ? " is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${project.id === activeId}"
          data-project-id="${project.id}"
          data-target="${target}"
        >
          ${project.name}
        </button>
      `
    )
    .join("");
}

function renderGalleryPanel() {
  if (!refs.galleryPanel) return;

  const project = getProject(state.galleryProjectId);

  refs.galleryPanel.innerHTML = `
    <div class="gallery-copy">
      <div>
        <span class="eyebrow">${project.badge || "Ultimas unidades disponibles"}</span>
        <h3>${project.name}</h3>
        <span>${project.location}</span>
      </div>
      <p>${project.description}</p>
    </div>
    <div class="gallery-grid">
      ${project.gallery
        .map(
          (image, index) => `
            <button
              class="gallery-item"
              type="button"
              data-lightbox-project="${project.id}"
              data-lightbox-index="${index}"
            >
              <img src="${image}" alt="${project.name} imagen ${index + 1}" loading="lazy" />
              <span class="gallery-item-label">
                <strong>${project.name}</strong>
                <span>Vista ${index + 1}</span>
              </span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderUnitsPanel() {
  if (!refs.unitsPanel) return;

  const project = getProject(state.unitsProjectId);
  const whatsappHref = siteConfig.contact?.whatsappHref || "#contacto";

  refs.unitsPanel.innerHTML = `
    <div class="units-grid">
      ${project.units
        .map(
          (unit) => `
            <article class="unit-card reveal">
              <div class="unit-header">
                <div>
                  <span class="eyebrow">Unidad disponible</span>
                  <h3>${unit.code}</h3>
                </div>
                <span class="unit-status">${unit.status}</span>
              </div>

              <div class="unit-data">
                <div class="unit-row">
                  <span class="unit-meta">Superficie</span>
                  <strong>${unit.area}</strong>
                </div>
                <div class="unit-row">
                  <span class="unit-meta">Precio</span>
                  <strong>${unit.price}</strong>
                </div>
              </div>

              <div class="feature-list">
                ${unit.features.map((feature) => `<span class="chip">${feature}</span>`).join("")}
              </div>

              <div class="unit-actions">
                <a class="btn btn-primary" href="${whatsappHref}" target="_blank" rel="noreferrer">Contactar</a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderContact() {
  if (!refs.contactList || !refs.footerMeta) return;

  const contact = siteConfig.contact || {};
  const items = [
    { type: "phone", label: "Telefono", value: contact.phoneLabel, href: contact.phoneHref },
    { type: "email", label: "Correo", value: contact.emailLabel, href: contact.emailHref },
    { type: "whatsapp", label: "WhatsApp", value: contact.whatsappLabel, href: contact.whatsappHref },
    { type: "website", label: "Sitio web", value: contact.websiteLabel, href: contact.websiteHref }
  ].filter((item) => item.value && item.href);

  refs.contactList.innerHTML = items
    .map(
      (item) => `
        <a class="contact-link" href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
          <span class="contact-icon">${iconSvg(item.type)}</span>
          <span>
            <small>${item.label}</small>
            <strong>${item.value}</strong>
          </span>
        </a>
      `
    )
    .join("");

  refs.footerMeta.innerHTML = `
    <p>${siteConfig.contact?.phoneLabel || ""}</p>
    <p>${siteConfig.contact?.emailLabel || ""}</p>
    <p><a href="${siteConfig.contact?.websiteHref || "#"}" target="_blank" rel="noreferrer">${siteConfig.contact?.websiteLabel || ""}</a></p>
    <p><a href="${siteConfig.contact?.instagramHref || "#"}" target="_blank" rel="noreferrer">${siteConfig.contact?.instagramLabel || ""}</a></p>
    <p>${siteConfig.copyright || ""}</p>
  `;

  if (refs.whatsAppFloat && contact.whatsappHref) {
    refs.whatsAppFloat.href = contact.whatsappHref;
  }
}

function handleProjectSelection(projectId, target, shouldScroll = true) {
  const section = document.getElementById(target);

  if (target === "proyectos") {
    state.galleryProjectId = projectId;
    state.unitsProjectId = projectId;
    renderTabs(refs.galleryTabs, state.galleryProjectId, "galerias");
    renderGalleryPanel();
    renderTabs(refs.unitTabs, state.unitsProjectId, "unidades");
    renderUnitsPanel();
  }

  if (target === "galerias") {
    state.galleryProjectId = projectId;
    renderTabs(refs.galleryTabs, state.galleryProjectId, "galerias");
    renderGalleryPanel();
  }

  if (target === "unidades") {
    state.unitsProjectId = projectId;
    renderTabs(refs.unitTabs, state.unitsProjectId, "unidades");
    renderUnitsPanel();
  }

  refreshRevealObserver();

  if (shouldScroll && section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function updateLightbox() {
  const project = getProject(state.lightboxProjectId);
  const image = project.gallery[state.lightboxIndex];

  if (!image || !refs.lightboxImage || !refs.lightboxCaption) return;

  refs.lightboxImage.src = image;
  refs.lightboxImage.alt = `${project.name} imagen ${state.lightboxIndex + 1}`;
  refs.lightboxCaption.textContent = `${project.name} · ${project.location} · Vista ${state.lightboxIndex + 1}`;
}

function openLightbox() {
  updateLightbox();
  refs.lightbox?.classList.add("is-open");
  refs.lightbox?.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  refs.lightbox?.classList.remove("is-open");
  refs.lightbox?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function nextLightbox(step) {
  const project = getProject(state.lightboxProjectId);
  const max = project.gallery.length;

  state.lightboxIndex = (state.lightboxIndex + step + max) % max;
  updateLightbox();
}

function bindNavigation() {
  if (refs.menuToggle && refs.mainNav) {
    refs.menuToggle.addEventListener("click", () => {
      const isOpen = refs.mainNav.classList.toggle("is-open");
      refs.menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    refs.mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        refs.mainNav.classList.remove("is-open");
        refs.menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (!refs.header) return;
    refs.header.classList.toggle("scrolled", window.scrollY > 20);
  });

  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project-id]");

    if (projectButton) {
      handleProjectSelection(
        projectButton.getAttribute("data-project-id"),
        projectButton.getAttribute("data-target"),
        true
      );
      return;
    }

    const lightboxButton = event.target.closest("[data-lightbox-project]");

    if (lightboxButton) {
      state.lightboxProjectId = lightboxButton.getAttribute("data-lightbox-project");
      state.lightboxIndex = Number(lightboxButton.getAttribute("data-lightbox-index")) || 0;
      openLightbox();
    }
  });
}

function bindContactForm() {
  if (!refs.form || !refs.formResponse) return;

  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(refs.form);
    const requiredFields = ["nombre", "correo", "telefono", "mensaje"];
    const isValid = requiredFields.every((field) => String(formData.get(field) || "").trim());

    if (!isValid) {
      refs.formResponse.textContent = "Completa todos los campos para solicitar informacion.";
      return;
    }

    refs.formResponse.textContent =
      "Solicitud recibida. Reemplaza este bloque por tu integracion real con correo, CRM o WhatsApp.";
    refs.form.reset();
  });
}

let revealObserver;

function refreshRevealObserver() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

function bindLightboxControls() {
  refs.lightboxClose?.addEventListener("click", closeLightbox);
  refs.lightboxPrev?.addEventListener("click", () => nextLightbox(-1));
  refs.lightboxNext?.addEventListener("click", () => nextLightbox(1));

  refs.lightbox?.addEventListener("click", (event) => {
    if (event.target === refs.lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!refs.lightbox?.classList.contains("is-open")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") nextLightbox(1);
    if (event.key === "ArrowLeft") nextLightbox(-1);
  });
}

function init() {
  renderBranding();
  renderHeroProjects();
  renderProjectCards();
  renderTabs(refs.galleryTabs, state.galleryProjectId, "galerias");
  renderGalleryPanel();
  renderTabs(refs.unitTabs, state.unitsProjectId, "unidades");
  renderUnitsPanel();
  renderContact();

  bindNavigation();
  bindContactForm();
  bindLightboxControls();
  refreshRevealObserver();
}

init();
