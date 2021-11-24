FROM node:14
WORKDIR /app
RUN npm install
COPY . ./app
EXPOSE 4000
VOLUME [ "/app/node_modules" ]
CMD ["npm", "run", "dev"]