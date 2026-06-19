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

El contenido (marca, dirección 3 Norte 144, web, propiedades, zonas) ya es real,
tomado del Facebook/Instagram de Dueñas Propiedades. Falta solo:

1. **Número de WhatsApp** → reemplaza `56900000000` en `index.html` (botón
   flotante, sección contacto) y en `js/main.js` (formulario). Opcional: agrega
   un correo si quieres mostrarlo.
2. **Fotos de las propiedades** → en `js/properties.js` las imágenes son de
   referencia (Unsplash). Sube las fotos reales a `img/` y apunta cada `img:` a
   tu archivo. También puedes editar precios, dormitorios, baños, m² y el campo
   `status` (`disponible` / `vendido` / `arrendado`).
3. **Textos** del hero y la sección *Nosotros* si quieres afinar el relato.

## Notas

- Diseño responsivo (móvil, tablet, desktop).
- El formulario de contacto arma un mensaje y lo abre en WhatsApp (no requiere
  backend). Si prefieres envío por email, conéctalo a un servicio como Formspree.
- Imágenes y datos de muestra están claramente marcados como placeholders.
