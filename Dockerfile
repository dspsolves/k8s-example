FROM node:19-alpine

WORKDIR /hello-world

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["node", "src/index.js"]
