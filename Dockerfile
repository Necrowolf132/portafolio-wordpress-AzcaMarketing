# Usa una imagen base de PHP o WordPress
FROM php:7.4-apache

# Establece el directorio de trabajo
WORKDIR /var/www/html
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli && docker-php-ext-install pdo_mysql
RUN a2enmod rewrite
RUN service apache2 restart
# Cargar las variables de entorno
ARG WORDPRESS_DB_HOST
ARG WORDPRESS_DB_USER
ARG WORDPRESS_DB_P
ARG WORDPRESS_DB_NAME
COPY html/ /var/www/html/
RUN chown -R www-data:www-data /var/www/html
# Definir variables de entorno en el contenedor
ENV WORDPRESS_DB_HOST=${WORDPRESS_DB_HOST}
ENV WORDPRESS_DB_USER=${WORDPRESS_DB_USER}
ENV WORDPRESS_DB_P=${WORDPRESS_DB_P}
ENV WORDPRESS_DB_NAME=${WORDPRESS_DB_NAME}
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY ./custom-php.ini "$PHP_INI_DIR/conf.d/"
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data
# Exponer el puerto
EXPOSE 443
EXPOSE 80