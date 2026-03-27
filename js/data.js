// Reemplaza aqui nombres, logos, imagenes, unidades y datos de contacto.
// Si agregas logos reales, usa rutas locales como "/logos/proyecto-1.png" o URLs completas.

const siteConfig = {
  brandName: "Alma Matter Sur",
  brandTagline: "Parcelas premium en el sur de Chile",
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  website: "https://www.almamatersur.cl",
  copyright: "2026 Alma Matter Sur. Todos los derechos reservados.",
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
    id: "proyecto-01",
    name: "Proyecto 01",
    location: "Ubicacion editable",
    logo: "",
    description:
      "Descripcion breve editable para presentar atributos del proyecto, conectividad, entorno y propuesta de valor.",
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
    id: "proyecto-02",
    name: "Proyecto 02",
    location: "Ubicacion editable",
    logo: "",
    description:
      "Texto editable para resumir paisaje, plusvalia, acceso y estilo de vida asociado al proyecto.",
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
    id: "proyecto-03",
    name: "Proyecto 03",
    location: "Ubicacion editable",
    logo: "",
    description:
      "Contenido editable para destacar atributos del proyecto, cercania a servicios y nivel comercial.",
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
