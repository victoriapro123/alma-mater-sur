(() => {
  const appConfig = window.siteConfig || {};
  const projectData = window.projects || [];
  const projectId = document.body.dataset.projectId || "";
  const project = projectData.find((item) => item.id === projectId) || projectData[0];

  const state = {
    lightboxIndex: 0
  };

  const refs = {
    projectPage: document.getElementById("projectPage"),
    contactList: document.getElementById("contactList"),
    footerMeta: document.getElementById("footerMeta"),
    form: document.getElementById("contactForm"),
    formResponse: document.getElementById("formResponse"),
    menuToggle: document.getElementById("menuToggle"),
    mainNav: document.getElementById("mainNav"),
    footerNav: document.getElementById("footerNav"),
    header: document.querySelector(".site-header"),
    lightbox: document.getElementById("lightbox"),
    lightboxImage: document.getElementById("lightboxImage"),
    lightboxCaption: document.getElementById("lightboxCaption"),
    lightboxClose: document.getElementById("lightboxClose"),
    lightboxPrev: document.getElementById("lightboxPrev"),
    lightboxNext: document.getElementById("lightboxNext"),
    whatsAppFloat: document.getElementById("whatsAppFloat")
  };

  function getInitials(value) {
    return value
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  function createLogoMarkup(className = "") {
    const safeClass = className ? ` ${className}` : "";

    if (project.logo) {
      return `<img class="project-logo${safeClass}" src="${project.logo}" alt="Logo ${project.name}" loading="lazy" />`;
    }

    return `<div class="logo-placeholder${safeClass}" aria-label="Logo placeholder ${project.name}">${getInitials(project.name)}</div>`;
  }

  function createProjectHeroMediaMarkup() {
    const heroImage = project.coverImage || project.gallery?.[0];

    if (heroImage) {
      return `
        <figure class="project-hero-visual">
          <img class="project-hero-photo" src="${heroImage}" alt="${project.name}" loading="lazy" />
        </figure>
      `;
    }

    return createLogoMarkup("project-section-logo");
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
    const heroImage = project.gallery?.[0] || appConfig.heroImage || "";
    document.documentElement.style.setProperty("--hero-image", `url("${heroImage}")`);

    const brandName = appConfig.brandName || "Alma Mater Sur";
    const brandTagline = appConfig.brandTagline || "Parcelas premium en el sur de Chile";

    const brandNameEl = document.getElementById("brandName");
    const brandTaglineEl = document.getElementById("brandTagline");
    const footerBrandNameEl = document.getElementById("footerBrandName");
    const footerBrandTaglineEl = document.getElementById("footerBrandTagline");

    if (brandNameEl) brandNameEl.textContent = brandName;
    if (brandTaglineEl) brandTaglineEl.textContent = brandTagline;
    if (footerBrandNameEl) footerBrandNameEl.textContent = brandName;
    if (footerBrandTaglineEl) footerBrandTaglineEl.textContent = brandTagline;

    document.title = `${project.name} | ${brandName}`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = `${project.name}, ${project.location}. ${project.tagline || ""} ${project.description}`.trim();
    }
  }

  function renderNavigation() {
    const links = [
      { href: "index.html", label: "Inicio" },
      { href: "#galeria", label: "Galeria" },
      { href: "#unidades", label: "Unidades" },
      { href: "#contacto", label: "Contacto" }
    ];

    const markup = links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("");

    if (refs.mainNav) refs.mainNav.innerHTML = markup;
    if (refs.footerNav) refs.footerNav.innerHTML = markup;
  }

  function renderUnits() {
    const whatsappHref = appConfig.contact?.whatsappHref || "#contacto";

    if (!project.units?.length) {
      return '<p class="empty-state">Agrega unidades disponibles en el archivo de datos para completar esta seccion.</p>';
    }

    return `
      <div class="units-grid project-units-grid">
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

  function renderGallery() {
    if (!project.gallery?.length) {
      return '<p class="empty-state">Agrega imagenes al arreglo `gallery` para mostrar la galeria de este proyecto.</p>';
    }

    return `
      <div class="gallery-grid">
        ${project.gallery
          .map(
            (image, index) => `
              <button
                class="gallery-item"
                type="button"
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

  function renderProjectPage() {
    if (!refs.projectPage || !project) return;

    const whatsappHref = appConfig.contact?.whatsappHref || "#contacto";

    refs.projectPage.innerHTML = `
      <section class="hero project-detail-hero" id="hero">
        <div class="hero-media"></div>
        <div class="hero-overlay"></div>
        <div class="container hero-shell project-detail-shell">
          <div class="project-detail-card reveal">
            <div class="project-detail-brand">
              ${createProjectHeroMediaMarkup()}
              <div class="project-detail-copy">
                <p class="eyebrow">Proyecto destacado</p>
                <h1>${project.name}</h1>
                <span class="project-section-location">${project.location}</span>
                <p class="project-section-tagline">${project.tagline || "Ultimas unidades disponibles"}</p>
              </div>
            </div>
            <p class="project-section-description">${project.description}</p>
            <div class="project-detail-actions">
              <a class="btn btn-primary" href="#galeria">Ver galeria</a>
              <a class="btn btn-secondary" href="#unidades">Ver unidades</a>
              <a class="btn btn-secondary" href="${whatsappHref}" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section project-section section-dark" id="galeria">
        <div class="container project-section-shell">
          <article class="project-block reveal">
            <div class="project-block-head">
              <div>
                <p class="eyebrow">Galeria</p>
                <h3>Conoce ${project.name}</h3>
              </div>
              <p>Imagenes exclusivas de este proyecto, listas para reemplazar por material real.</p>
            </div>
            ${renderGallery()}
          </article>
        </div>
      </section>

      <section class="section project-section" id="unidades">
        <div class="container project-section-shell">
          <article class="project-block reveal">
            <div class="project-block-head">
              <div>
                <p class="eyebrow">Disponibilidad</p>
                <h3>Ultimas unidades</h3>
              </div>
              <p>Informacion comercial editable desde el arreglo de datos de ${project.name}.</p>
            </div>
            ${renderUnits()}
          </article>

          <article class="project-cta reveal">
            <div>
              <p class="eyebrow">CTA del proyecto</p>
              <h3>Agenda una visita y solicita informacion completa de ${project.name}.</h3>
            </div>
            <div class="project-cta-actions">
              <a class="btn btn-primary" href="#contacto">Agendar visita</a>
              <a class="btn btn-secondary" href="#contacto">Solicitar informacion</a>
              <a class="btn btn-secondary" href="${whatsappHref}" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
            </div>
          </article>
        </div>
      </section>
    `;
  }

  function renderContact() {
    if (!refs.contactList || !refs.footerMeta) return;

    const contact = appConfig.contact || {};
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
      <p>${appConfig.contact?.phoneLabel || ""}</p>
      <p>${appConfig.contact?.emailLabel || ""}</p>
      <p><a href="${appConfig.contact?.websiteHref || "#"}" target="_blank" rel="noreferrer">${appConfig.contact?.websiteLabel || ""}</a></p>
      <p><a href="${appConfig.contact?.instagramHref || "#"}" target="_blank" rel="noreferrer">${appConfig.contact?.instagramLabel || ""}</a></p>
      <p>${appConfig.copyright || ""}</p>
    `;

    if (refs.whatsAppFloat && contact.whatsappHref) {
      refs.whatsAppFloat.href = contact.whatsappHref;
    }
  }

  function updateLightbox() {
    const image = project.gallery?.[state.lightboxIndex];

    if (!image || !refs.lightboxImage || !refs.lightboxCaption) return;

    refs.lightboxImage.src = image;
    refs.lightboxImage.alt = `${project.name} imagen ${state.lightboxIndex + 1}`;
    refs.lightboxCaption.textContent = `${project.name} · ${project.location} · Vista ${state.lightboxIndex + 1}`;
  }

  function openLightbox(index) {
    state.lightboxIndex = index;
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
    const max = project.gallery?.length || 0;

    if (!max) return;

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

      document.addEventListener("click", (event) => {
        if (!refs.mainNav.classList.contains("is-open")) return;
        if (refs.mainNav.contains(event.target) || refs.menuToggle.contains(event.target)) return;

        refs.mainNav.classList.remove("is-open");
        refs.menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    }

    document.querySelectorAll(".main-nav a, .footer-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        refs.mainNav?.classList.remove("is-open");
        refs.menuToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });

    window.addEventListener("scroll", () => {
      if (!refs.header) return;
      refs.header.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  function bindGalleryEvents() {
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lightbox-index]");
      if (!button) return;
      openLightbox(Number(button.getAttribute("data-lightbox-index")) || 0);
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
      { threshold: 0.12 }
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
    renderNavigation();
    renderProjectPage();
    renderContact();
    bindNavigation();
    bindGalleryEvents();
    bindContactForm();
    bindLightboxControls();
    refreshRevealObserver();
  }

  init();
})();
