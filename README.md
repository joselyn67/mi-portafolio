# Mi Portafolio

Portafolio (CV) web como desarrollador de software: HTML + CSS + JavaScript puro, sin dependencias.

## Estructura

```
mi-portafolio/
├── assets/avatar.svg
├── css/style.css
├── js/main.js
├── index.html
├── about.html
├── contact.html
├── Dockerfile
└── README.md
```

## Personalizar

Reemplaza "Tu Nombre", los proyectos, la experiencia y los enlaces (GitHub, LinkedIn, correo) en los tres `.html`.

## Probar en local

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mi-portafolio.git
git push -u origin main
```

## Desplegar con Dokploy

1. En Dokploy: **Projects → Create Project → Create Service → Application**.
2. **Provider → GitHub** (o *Git* con la URL pública del repositorio), selecciona `mi-portafolio` y la rama `main`.
3. **Build Type → Dockerfile** (usa el `Dockerfile` incluido, ruta `./Dockerfile`).
4. En **Domains**, agrega un dominio o usa el puerto del contenedor `80` y publícalo (ej. puerto `8081`).
5. Pulsa **Deploy** y revisa los logs en la pestaña **Deployments**.
6. Abre `http://IP_DEL_SERVIDOR:PUERTO` desde la red local.
