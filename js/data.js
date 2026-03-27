// Reemplaza aqui nombres, logos, imagenes, unidades y datos de contacto.
// Si agregas logos reales, usa rutas locales como "/logos/proyecto-1.png" o URLs completas.

const siteConfig = {
  brandName: "Alma Mater Sur",
  brandTagline: "Parcelas premium en el sur de Chile",
  heroTitle: "Las ultimas oportunidades para invertir en parcelas premium",
  heroText: "Invierte en tranquilidad, naturaleza y alta plusvalia en el sur de Chile.",
  heroUrgency: "Ultimas unidades disponibles - agenda tu visita hoy.",
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  heroVideoEmbed:
    "https://www.youtube-nocookie.com/embed/alxCxVoEMu0?autoplay=1&mute=1&controls=0&loop=1&playlist=alxCxVoEMu0&playsinline=1&rel=0&modestbranding=1",
  ogImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  website: "https://www.almamatersur.cl",
  copyright: "2026 Alma Mater Sur. Todos los derechos reservados.",
  contact: {
    phoneLabel: "+56 9 XXXX XXXX",
    phoneHref: "tel:+56900000000",
    emailLabel: "contacto@almamatersur.cl",
    emailHref: "mailto:contacto@almamatersur.cl",
    whatsappLabel: "+56 9 XXXX XXXX",
    whatsappHref: "https://wa.me/56900000000?text=Hola%2C%20quiero%20informacion%20sobre%20las%20ultimas%20unidades.",
    websiteLabel: "www.almamatersur.cl",
    websiteHref: "https://www.almamatersur.cl",
    instagramLabel: "@almamatersur",
    instagramHref: "https://instagram.com/"
  }
};

const projects = [
  {
    id: "proyecto-1",
    pagePath: "proyecto-1.html",
    name: "Proyecto 01",
    location: "Ubicacion editable",
    logo: "",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    tagline: "Ultimas unidades disponibles",
    description:
      "Descripcion breve editable para presentar atributos del proyecto, conectividad, entorno y propuesta de valor.",
    video: {
      title: "Conoce el proyecto en video",
      embedUrl: "https://www.youtube-nocookie.com/embed/alxCxVoEMu0?rel=0"
    },
    quickFacts: [
      { type: "distance", text: "A 25 min de ciudad editable" },
      { type: "area", text: "Parcelas desde 5.000 m2" },
      { type: "price", text: "Precios desde $XX.XXX.XXX" }
    ],
    badge: "Ultimas unidades disponibles",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
    ],
    units: [
      {
        code: "Lote A-01",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Disponible",
        features: ["Rol propio", "Acceso controlado", "Factibilidad de agua"]
      },
      {
        code: "Lote A-02",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Disponible",
        features: ["Entorno natural", "Camino interior", "Documentacion editable"]
      }
    ]
  },
  {
    id: "proyecto-2",
    pagePath: "proyecto-2.html",
    name: "Proyecto 02",
    location: "Ubicacion editable",
    logo: "",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tagline: "Parcelas listas para presentar",
    description:
      "Texto editable para resumir paisaje, plusvalia, acceso y estilo de vida asociado al proyecto.",
    quickFacts: [
      { type: "distance", text: "A 35 min de ciudad editable" },
      { type: "area", text: "Parcelas desde 5.000 m2" },
      { type: "price", text: "Precios desde $XX.XXX.XXX" }
    ],
    badge: "Ultimas unidades disponibles",
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    units: [
      {
        code: "Lote B-04",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Disponible",
        features: ["Vista abierta", "Acceso vehicular", "Entorno consolidado"]
      },
      {
        code: "Lote B-07",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Reservable",
        features: ["Sector tranquilo", "Factibilidad electrica", "Acceso seguro"]
      }
    ]
  },
  {
    id: "proyecto-3",
    pagePath: "proyecto-3.html",
    name: "Proyecto 03",
    location: "Ubicacion editable",
    logo: "",
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tagline: "Oportunidad de inversion editable",
    description:
      "Contenido editable para destacar atributos del proyecto, cercania a servicios y nivel comercial.",
    quickFacts: [
      { type: "distance", text: "A 20 min de ciudad editable" },
      { type: "area", text: "Parcelas desde 5.000 m2" },
      { type: "price", text: "Precios desde $XX.XXX.XXX" }
    ],
    badge: "Ultimas unidades disponibles",
    gallery: [
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80"
    ],
    units: [
      {
        code: "Lote C-03",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Disponible",
        features: ["Terreno limpio", "Proyeccion comercial", "Camino estabilizado"]
      },
      {
        code: "Lote C-05",
        area: "X.XXX m2",
        price: "$XX.XXX.XXX",
        status: "Disponible",
        features: ["Topografia amable", "Entorno natural", "Cierre perimetral"]
      }
    ]
  }
];

window.siteConfig = siteConfig;
window.projects = projects;
