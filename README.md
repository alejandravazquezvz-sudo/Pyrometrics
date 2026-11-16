# Pyrometrics

Sitio web sobre experimentos de la NASA de combustión en microgravedad (PSI-117 y PSI-174): chat con búsqueda en la documentación, tabla de investigaciones, comparador y simulador (experimento frente a modelo).

- Español: `/` · English: `/en/`
- Sitio estático (GitHub Pages). Cuentas, guardados, chats y comunidad se guardan en el navegador (`assets/local.js`).
- Documentos y datos originales en `datos/` (PDF, CSV, metadatos); índice de búsqueda en `datos/indice-*.json`.
- Para activar cobros, pega tus Payment Links de Stripe en `PAGOS` dentro de `assets/local.js`.
- Datos públicos del repositorio PSI de la NASA. Herramienta de consulta; no sustituye el juicio experto.

## Publicar en GitHub Pages
1. Crea un repositorio público en GitHub (p. ej. `pyrometrics`) y sube TODO el contenido de esta carpeta a la raíz (incluido `.nojekyll`).
2. Settings → Pages → Source: *Deploy from a branch* → Branch `main` / carpeta `/ (root)` → Save.
3. El sitio queda en `https://TU-USUARIO.github.io/pyrometrics/`.
4. Copia los 4 PDF de presentaciones a `datos/PSI-117/02_presentaciones/` (ver `LEEME.txt` ahí). Sin ellos, los enlaces "Original: presentación…" dan 404.

## Usuario demo
Correo `demo@pyrometrics.mx` · Contraseña `Demo-Pyro-2026` (Premium sin vencimiento).
Las cuentas viven en el `localStorage` de cada navegador, así que la cuenta demo se crea sola la primera vez que alguien inicia sesión con esas credenciales; no hay base de datos que configurar.
