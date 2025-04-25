FROM node:18
WORKDIR /app
COPY . .
RUN RUN groupadd -g 1 docker &&\ 
    usermod -aG docker jenkins &&\
    npm install express
EXPOSE 3000
CMD ["node", "app.js"]
