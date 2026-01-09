FROM nginx:alpine

# Copy static assets into nginx html root
COPY . /usr/share/nginx/html/

# Expose default web port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]