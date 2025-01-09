FROM node:23.5-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i --no-cache
COPY . .

RUN npm run build
CMD ["node", "dist/main.js"]