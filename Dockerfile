FROM selenium/standalone-chrome:134.0-20250323 
ADD . /app

RUN npm install

CMD ["npx", "wdio", "run", "wdio.conf.js"]