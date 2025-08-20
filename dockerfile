FROM node:latest
WORKDIR /app
EXPOSE 3000

# Setup node
COPY package.json ./
RUN npm install

# Copy build src code
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# Start
CMD [ "npm", "start" ]