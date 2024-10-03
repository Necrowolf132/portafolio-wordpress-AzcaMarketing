# Usa una imagen base de PHP o WordPress
FROM wordpress:latest

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Cargar las variables de entorno
ARG WORDPRESS_DB_HOST
ARG WORDPRESS_DB_USER
ARG WORDPRESS_DB_PASSWORD
ARG WORDPRESS_DB_NAME

# Definir variables de entorno en el contenedor
ENV WORDPRESS_DB_HOST=${WORDPRESS_DB_HOST}
ENV WORDPRESS_DB_USER=${WORDPRESS_DB_USER}
ENV WORDPRESS_DB_PASSWORD=${WORDPRESS_DB_PASSWORD}
ENV WORDPRESS_DB_NAME=${WORDPRESS_DB_NAME}

# Exponer el puerto
EXPOSE 80