FROM nginx:alpine

# Copia el sitio estático al directorio público de Nginx
COPY . /usr/share/nginx/html

EXPOSE 80
