FROM selenium/node-chrome:latest

USER root

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm && \
    apt-get clean

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "wdio", "run", "wdio.conf.js"]
