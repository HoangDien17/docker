FROM node:18.15.0-alpine AS build

ARG WORK_DIR=/var/www/node

WORKDIR ${WORK_DIR}

COPY . .

RUN yarn install

CMD yarn run build


# ---- Release ----
FROM node:18.15.0-alpine AS release

ARG WORK_DIR=/var/www/node

WORKDIR ${WORK_DIR}

# copy the rest of files
COPY --from=build ${WORK_DIR}/node_modules ./node_modules
COPY --from=build ${WORK_DIR}/dist ./dist
COPY --from=build ${WORK_DIR}/config ./config
COPY swagger*.json package*.json yarn.lock ./

# define CMD
CMD npm run start:prod