# Imagem de produção (Coolify): gera o site estático e serve com nginx.

# 1) Build: instala as dependências e gera dist/ (as fontes são baixadas do Google nesta etapa)
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# 2) Servidor: só o nginx e os arquivos gerados, sem Node nem node_modules
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
