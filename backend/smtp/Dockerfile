FROM php:apache

RUN apt-get update && apt-get upgrade -y sendmail && rm -rf /var/lib/apt/lists/*

COPY ./ /usr/share/nginx/html
COPY ./config_files/mail_config.sh /usr/share/nginx'
COPY ./config_files/php.ini /usr/local/etc/php/php.ini

CMD[]