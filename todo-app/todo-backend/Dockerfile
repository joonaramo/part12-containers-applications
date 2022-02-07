FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

run npm ci

ENV DEBUG=docker:*

USER node

CMD npm start
