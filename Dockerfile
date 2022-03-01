FROM node:14.16.1

# Create app directory
WORKDIR /etc/service

# Install app dependencies
COPY package.json ./
COPY . /etc/service

RUN npm install

ENV NODE_PORT 3000
EXPOSE ${NODE_PORT}

CMD npm run dev