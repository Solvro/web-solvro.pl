FROM docker.io/library/node:22-alpine AS builder
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
COPY . /source
WORKDIR /source
RUN --mount=type=cache,dst=/root/.local/share/pnpm/store \
  corepack enable \
  && pnpm install --frozen-lockfile \
  && pnpm build

FROM docker.io/library/nginx:alpine
COPY --from=builder /source/dist /usr/share/nginx/html/
