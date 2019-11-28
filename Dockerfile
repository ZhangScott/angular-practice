FROM node:11.6.0-alpine AS builder
COPY . ./angular-practice
WORKDIR /angular-practice
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /angular-practice/dist/first-ng-app/ /usr/share/nginx/html