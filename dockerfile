FROM node:10.16.0-alpine

RUN apk update && apk upgrade && apk add  \
	git 


COPY package.json /var/app/package.json
COPY src /var/app/

WORKDIR /var/app
RUN npm i

CMD ["node", "index.js"]