FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install pm2 -g
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "pm2-dev", "server.js" ]
