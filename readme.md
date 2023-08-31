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

