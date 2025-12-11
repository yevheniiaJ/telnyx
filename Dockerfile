FROM selenium/node-chrome:latest

USER root

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "wdio", "run", "wdio.conf.js"]
