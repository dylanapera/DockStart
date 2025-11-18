FROM node:22
# Layer caching
WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "start"]