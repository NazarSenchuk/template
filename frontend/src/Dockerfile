# Use official Node.js runtime as base image
FROM node:18-alpine

RUN apk update && apk upgrade --no-cache

# Set working directory
WORKDIR /app


# Copy package files
COPY package*.json ./

RUN npm ci --omit=dev

# Install serve globally
RUN npm install -g serve

# Copy application source
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "src", "-l", "3000"]