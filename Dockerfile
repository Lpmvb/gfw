FROM node:8.12.0-alpine

WORKDIR /app

COPY package.json /app

RUN npm i --production

COPY . /app

EXPOSE 80

CMD npm run docker