# Alma Mater Sur

Sitio estatico en HTML, CSS y JavaScript para un proyecto educativo.

## Estructura

- `index.html`
- `css/styles.css`
- `js/script.js`
- `vercel.json`
- `.github/workflows/deploy-pages.yml`

## Ejecutar localmente

1. Abre `index.html` en el navegador.
2. Si prefieres un servidor local:

```powershell
cd c:\Users\victo\Desktop\desarollos\alma-mater-sur
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Publicacion

- GitHub Pages: el workflow en `.github/workflows/deploy-pages.yml` despliega el contenido del proyecto en cada push a `main`.
- Vercel: `vercel.json` deja el proyecto listo para importarlo como sitio estatico desde la raiz del repo.

## Personalizacion

- Cambiar textos e imagenes en `index.html`.
- Ajustar estilos en `css/styles.css`.
- Extender interacciones en `js/script.js`.
