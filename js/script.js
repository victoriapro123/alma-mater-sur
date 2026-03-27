(() => {
  const appConfig = window.siteConfig || {};
  const projectData = window.projects || [];

  const refs = {
    heroProjects: document.getElementById("heroProjects"),
    heroTitle: document.getElementById("heroTitle"),
    heroIntro: document.getElementById("heroIntro"),
    heroUrgency: document.getElementById("heroUrgency"),
    contactList: document.getElementById("contactList"),
    footerMeta: document.getElementById("footerMeta"),
    form: document.getElementById("contactForm"),
    formResponse: document.getElementById("formResponse"),
    menuToggle: document.getElementById("menuToggle"),
    mainNav: document.getElementById("mainNav"),
    footerNav: document.getElementById("footerNav"),
    header: document.querySelector(".site-header"),
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

  function createLogoMarkup(project, className = "") {
    const safeClass = className ? ` ${className}` : "";

    if (project.logo) {
      return `<img class="project-logo${safeClass}" src="${project.logo}" alt="Logo ${project.name}" loading="lazy" />`;
    }

    return `<div class="logo-placeholder${safeClass}" aria-label="Logo placeholder ${project.name}">${getInitials(project.name)}</div>`;
  }

  function factIcon(type) {
    const icons = {
      distance:
        '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 4.9 7 13 7 13s7-8.1 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
      area:
        '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M3 3h8v2H5v6H3V3Zm10 0h8v8h-2V5h-6V3ZM3 13h2v6h6v2H3v-8Zm16 0h2v8h-8v-2h6v-6Z"/></svg>',
      price:
        '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M11 3h2v2.1c2.3.2 4 1.5 4 3.6h-2c0-1.1-.9-1.8-2.5-1.8-1.4 0-2.5.6-2.5 1.7 0 .9.7 1.4 3 1.9 2.9.6 4.7 1.6 4.7 4.2 0 2.2-1.8 3.7-4.7 4V21h-2v-2.1c-2.8-.2-4.8-1.8-4.9-4.3h2.1c.1 1.4 1.2 2.3 2.9 2.3 1.6 0 2.7-.7 2.7-1.9 0-1-.8-1.6-3.2-2.1-2.7-.6-4.4-1.6-4.4-4 0-2.1 1.7-3.6 4.3-3.8V3Z"/></svg>'
    };

    return icons[type] || icons.distance;
  }

  function createQuickFactsMarkup(project) {
    if (!project.quickFacts?.length) return "";

    return `
      <ul class="hero-project-facts" aria-label="Datos rapidos de ${project.name}">
        ${project.quickFacts
          .map(
            (fact) => `
              <li>
                <span class="fact-icon">${factIcon(fact.type)}</span>
                <span>${fact.text}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
  }

  function createHeroVisualMarkup(project) {
    const heroImage = project.coverImage || project.gallery?.[0];

    if (heroImage) {
      return `
        <figure class="hero-project-visual">
          <img class="hero-project-photo" src="${heroImage}" alt="${project.name}" loading="lazy" />
        </figure>
      `;
    }

    return createLogoMarkup(project);
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
    document.documentElement.style.setProperty("--hero-image", `url("${appConfig.heroImage || ""}")`);

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
    if (refs.heroTitle) refs.heroTitle.textContent = appConfig.heroTitle || "Las ultimas oportunidades para invertir en parcelas premium";
    if (refs.heroIntro) refs.heroIntro.textContent = appConfig.heroText || "Invierte en tranquilidad, naturaleza y alta plusvalia en el sur de Chile.";
    if (refs.heroUrgency) refs.heroUrgency.textContent = appConfig.heroUrgency || "Ultimas unidades disponibles - agenda tu visita hoy.";

    document.title = `${brandName} | Parcelas premium en el sur de Chile`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content =
        "Venta de parcelas premium en el sur de Chile. Ultimas unidades disponibles. Agenda tu visita con Alma Mater Sur.";
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.content = `${brandName} | Parcelas premium en el sur de Chile`;
    if (ogDescription) {
      ogDescription.content =
        "Venta de parcelas premium en el sur de Chile. Ultimas unidades disponibles y atencion comercial directa.";
    }
    if (ogImage) ogImage.content = appConfig.ogImage || appConfig.heroImage || "";
  }

  function renderNavigation() {
    const links = [
      { href: "#hero", label: "Inicio" },
      ...projectData.map((project) => ({ href: project.pagePath || `${project.id}.html`, label: project.name })),
      { href: "#contacto", label: "Contacto" }
    ];

    const markup = links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("");

    if (refs.mainNav) refs.mainNav.innerHTML = markup;
    if (refs.footerNav) refs.footerNav.innerHTML = markup;
  }

  function renderHeroProjects() {
    if (!refs.heroProjects) return;

    refs.heroProjects.innerHTML = projectData
      .map(
        (project) => `
          <article class="hero-project-card" data-project-id="${project.id}">
            ${createHeroVisualMarkup(project)}
            <strong>${project.name}</strong>
            <span>${project.location}</span>
            ${createQuickFactsMarkup(project)}
            <p class="hero-project-line">${project.tagline || "Ultimas unidades disponibles"}</p>
            <a class="hero-card-btn" href="${project.pagePath || `${project.id}.html`}" data-track="click_proyecto" data-track-label="hero_project" data-project-id="${project.id}">Visitar proyecto</a>
          </article>
        `
      )
      .join("");
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

    refs.contactList.querySelectorAll("a").forEach((link, index) => {
      const item = items[index];
      if (!item) return;
      link.dataset.track = item.type === "whatsapp" ? "click_whatsapp" : "click_contacto";
      link.dataset.trackLabel = item.type;
    });

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

  function trackEvent(eventName, params = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }

  function bindConversionTracking() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-track]");
      if (!target) return;

      trackEvent(target.dataset.track, {
        label: target.dataset.trackLabel || "",
        project_id: target.dataset.projectId || target.closest("[data-project-id]")?.dataset.projectId || "",
        href: target.getAttribute("href") || ""
      });
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

  function init() {
    renderBranding();
    renderNavigation();
    renderHeroProjects();
    renderContact();
    bindNavigation();
    bindConversionTracking();
    bindContactForm();
  }

  init();
})();
