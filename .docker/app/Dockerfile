FROM node:25-alpine3.23

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ../.. .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000