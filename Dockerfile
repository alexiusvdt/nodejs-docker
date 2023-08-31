FROM node:18-alpine

# dev or prod
ENV NODE_ENV=production

# working dir, default cmd point
WORKDIR /app

# load needed .json into working dir for install cmds
# COPY ["<src1>", "<src2>",..., "<dest>"] 
COPY ["package.json", "package-lock.json", "./"]

# can flag --production --development
RUN npm install --production

# takes all files in current dir and copies into the image
COPY . .
# what cmd to run when the image is inside the container
CMD ["node", "server.js"]
