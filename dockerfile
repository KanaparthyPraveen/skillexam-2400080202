FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build && npm install -g serve
EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]