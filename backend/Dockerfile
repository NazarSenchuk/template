# Use official Node.js runtime as base image
FROM node:18-alpine
RUN apk update && apk upgrade --no-cache

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]