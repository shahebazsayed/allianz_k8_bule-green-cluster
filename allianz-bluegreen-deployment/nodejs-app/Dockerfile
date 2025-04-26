FROM node:14
WORKDIR /app
COPY allianz-bluegreen-deployment/nodejs-app/package.json ./
RUN npm install
COPY allianz-bluegreen-deployment/nodejs-app/. .
EXPOSE 3000
CMD ["node", "index.js"]
