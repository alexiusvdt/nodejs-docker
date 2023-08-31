[Docker docs](https://docs.docker.com/language/nodejs/build-images/)
it's a simple REST server that responds to requests.

# Building & running:
<!-- tag used to set name of image 'name:tag', else 'latest' -->
`docker build --tag node-docker .`

<!-- to check images -->
`docker images`

<!-- add a tag (additive) -->
`docker tag node-docker:latest node-docker:v1.0.0`

<!-- oopsie! delete that tag  (will not delete image)-->
`docker rmi node-docker:v1.0.0`

<!-- run it -->
`docker run node-docker`

<!-- publish ports -->
`docker run --publish [host]:[container] node-docker`

<!-- run in detached -->
`docker run -d -p 8000:8000 node-docker`

<!-- show running containers -->
`docker ps`

<!-- stop & remove countainrs -->
`docker stop name_one name_two`
`docker rm name_one name_two`

<!-- give it a name -->
`docker run -d -p 8000:8000 --name rest-server node-docker`

<!-- create volumes -->
volumes are features that docker provides instead of bind mounts
`docker volume create mongodb`
`docker volume create mongodb_config`

<!-- make a network for application and db to communicate -->
`docker network create mongodb`

<!-- set the env to know the conn string -->
`docker run \
  -it --rm -d \
  --network mongodb \
  --name rest-server \
  -p 8000:8000 \
  <!-- 'notes' here is the db name -->
  -e CONNECTIONSTRING=mongodb://mongodb:27017/notes \ 
  node-docker`

<!-- or, just put that all into docker-compose -->

<!-- add to the scripts -->
  "debug": "nodemon --inspect=0.0.0.0:9229 -L server.js"

<!-- add nodemon, starting server in debug mode & watches for changes -->

<!-- start it up agin note the dockercompose ref. passing build compiles & starts -->
`docker compose -f docker-compose.dev.yml up --build`

<!-- modify scripts to run tests & build -->
<!-- edit dockerfile to use dev deps too -->
`docker compose -f docker-compose.dev.yml run --build notes npm run test`

<!-- multi-stage containers are also possible -->
<!-- environments can be targeted too -->
`docker build -t node-docker --target test .`


# CI/CD update
<!-- repo -> secrets and vars -> actions -->
create `DOCKERHUB_USERNAME` with your ID as val
create `DOCKERHUB_TOKEN` via account settings > security

<!-- set up the flow -->

<!-- set up deployment -->
[Azure](https://docs.docker.com/cloud/aci-integration/)
[AWS](https://docs.docker.com/cloud/ecs-integration/)
[Kubernetes](https://docs.docker.com/desktop/kubernetes/)