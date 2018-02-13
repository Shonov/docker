FROM node

RUN mkdir /usr/share/frontend
WORKDIR /usr/share/frontend

COPY package.json /usr/share/frontend/package.json

RUN npm install

CMD ["npm","start"]