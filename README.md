# The Garcia Store and Solutions — sitio web comercial

Versión estática responsive basada en la maqueta visual aprobada. Incluye Inicio, Servicios, Galería, Nosotros, Cotización y Contacto.

## Probar localmente

1. Descomprime el ZIP.
2. Abre `index.html` en Chrome, Edge o Firefox.
3. Recorre las secciones y prueba el formulario de cotización. El botón abre WhatsApp y **no envía el mensaje sin confirmación del usuario**.

También puedes ejecutar `python -m http.server 8000` en la carpeta del proyecto y visitar `http://localhost:8000`.

## Publicar en Hostinger

1. Contrata un plan de alojamiento compatible con sitios HTML (y PHP/MySQL si lo vas a necesitar después).
2. Crea un sitio web en hPanel y abre el Administrador de archivos.
3. Sube el contenido de esta carpeta a `public_html` (el archivo `index.html` debe quedar directamente en esa carpeta).
4. Comprueba la página en el dominio, el certificado HTTPS y los enlaces de WhatsApp.

## Personalización

- Logo original: `assets/logo.png`.
- Colores: `styles.css` (`--blue: #073F83`, `--orange: #ff8500`).
- WhatsApp: `50660042799` en `script.js` y enlaces de `index.html`.
- Imágenes provisionales: `assets/*.webp`. Son **recortes de la maqueta ilustrativa**, no fotografías de trabajos realizados. Sustitúyelas por imágenes originales con permisos de uso y conserva los nombres o actualiza las rutas HTML/CSS.
- Los horarios, correo electrónico y testimonios no se publican porque aún no están confirmados.

## Alcance y limitaciones

Esta versión es HTML/CSS/JavaScript y funciona sin PHP ni MySQL. Las cotizaciones se preparan para WhatsApp, **no se guardan en una base de datos**. Para añadir almacenamiento, autenticación y panel administrativo habrá que implementar y probar un backend PHP/MySQL por separado.

Las imágenes de la galería están señaladas como ilustrativas para evitar confundirlas con trabajos reales.
