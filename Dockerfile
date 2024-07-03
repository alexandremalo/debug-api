FROM node:20-alpine


# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm run build

EXPOSE 5000
CMD [ "node", "server.js" ]
