# Specify a base image
FROM node:alpine

WORKDIR /usr/app
# Install some depenendencies
COPY ./package.json ./
RUN npm install

# Default command
CMD ["npm", "start"]
