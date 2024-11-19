FROM node:alpine

# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN pnpm install
# Copy the app files
COPY . .
# Build the app
RUN pnpm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["pnpm", "start"]
