FROM node:13.8-alpine

# Verification API port
EXPOSE 7000

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache mongodb-tools \ 
    && apk add --no-cache unzip

WORKDIR /srv/app

COPY . /srv/app

RUN npm install && chmod 777 .

CMD unzip ./Resources/nutrition.zip -d ./Resources/ && mongorestore --host root:password@db:27017 -d nutrition ./Resources/nutrition && npm start 
