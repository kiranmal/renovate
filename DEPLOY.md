# Renovate Max2Max — Static Deployment

Website ab **fully static** hai — koi backend, database, ya admin panel nahi.
Saara content `frontend/src/data/*.json` mein baked hai aur build `frontend/dist/`
mein aata hai jo kisi bhi static host pe chalta hai.

## Build

```bash
cd frontend
npm install
npm run build          # output → frontend/dist/
```

## Hostinger (shared hosting bhi chalega)

1. `frontend/dist/` ki **saari files** `public_html/` mein upload karo
   (File Manager ya FTP)
2. `public_html/.htaccess` banao SPA routing ke liye:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. Domain point karo — done. No Node.js, no VPS, no database needed.

## Content update kaise karein

- **Images**: file `frontend/public/images/` mein daalo, phir
  `frontend/src/data/siteImages.json` ya `serviceImages.json` mein uska path add karo
- **Projects**: `frontend/src/data/projectsData.json` mein entry add karo
- **Testimonials**: `frontend/src/data/testimonialsData.json` edit karo
- Phir `npm run build` → naya `dist/` upload → changes live

## Forms

Contact/quote forms visitor ke email app mein `Renovatemax2max@gmail.com` pe
mailto kholte hain — koi server-side submission nahi.
