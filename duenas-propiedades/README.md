# Dueñas Propiedades — Sitio web

Landing page para la corredora **Dueñas Propiedades** (Instagram
[@duenaspropiedades_](https://www.instagram.com/duenaspropiedades_/)), corredora
de propiedades con más de 50 años de experiencia en **Viña del Mar, Chile**.

Es un sitio **estático** (HTML + CSS + JavaScript, sin dependencias ni build).
Funciona abriendo `index.html` directamente o sirviéndolo desde cualquier hosting
estático (GitHub Pages, Netlify, Vercel, etc.).

## Estructura

```
duenas-propiedades/
├── index.html          # Página principal
├── css/styles.css      # Estilos
├── js/properties.js    # Datos de las propiedades (EDITAR)
├── js/main.js          # Interactividad (filtros, buscador, formulario)
└── img/                # (opcional) imágenes propias
```

## Cómo verlo

```bash
cd duenas-propiedades
python3 -m http.server 8080
# abrir http://localhost:8080
```

O simplemente abre `index.html` con doble clic.

## Qué personalizar antes de publicar

Los datos son de ejemplo. Reemplaza:

1. **Propiedades** → edita `js/properties.js` (título, operación, tipo, comuna,
   precio, dormitorios, baños, m², imagen). Las imágenes son de Unsplash; súbelas
   a `img/` y apunta `img:` a tu archivo local.
2. **Contacto** → en `index.html` y `js/main.js` reemplaza el número de WhatsApp
   `56900000000`, el email `contacto@duenaspropiedades.cl` y la dirección.
3. **Estadísticas / textos del hero** y la sección *Nosotros* si quieres ajustar
   el relato.

## Notas

- Diseño responsivo (móvil, tablet, desktop).
- El formulario de contacto arma un mensaje y lo abre en WhatsApp (no requiere
  backend). Si prefieres envío por email, conéctalo a un servicio como Formspree.
- Imágenes y datos de muestra están claramente marcados como placeholders.
