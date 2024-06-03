# Use official Node.js image as the base image
FROM node:21.5.0


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["node", "index.js"]
