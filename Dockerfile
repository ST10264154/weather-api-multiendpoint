# Use the official Node.js LTS version based on Alpine Linux (lightweight image)
FROM node:lts-alpine

# Set the environment to production (optimizes performance and dependency handling)
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency files only (for better caching during build)
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install production dependencies silently and move node_modules outside working directory
RUN npm install --production --silent && mv node_modules ../

# Copy the rest of the application files
COPY . .

# Expose port 3000 to the outside world (used by the app)
EXPOSE 3000

# Change ownership of app files to the non-root 'node' user for security
RUN chown -R node /usr/src/app

# Switch to the non-root 'node' user
USER node

# Default command to run the app
CMD ["node", "index.js"]
