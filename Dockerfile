FROM node:lts

# Create App Directory
RUN mkdir -p /usr/src/smart-brain-api
WORKDIR /usr/src/smart-brain-api

# Install App Dependency
COPY package.json /usr/src/smart-brain-api
RUN npm install

# Bundle App Source
COPY ./ ./

# Build Arguments
ARG NODE_VERSION=12.18.1

# Enviroments
ENV NODE_VERSION ${NODE_VERSION}

CMD [ "/bin/bash" ]