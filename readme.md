[Docker docs](https://docs.docker.com/language/nodejs/build-images/)

# Building & running:
<!-- tag used to set name of image 'name:tag', else 'latest' -->
`docker build --tag node-docker .`

<!-- to check images -->
`docker images`

<!-- add a tag (additive) -->
`docker tag node-docker:latest node-docker:v1.0.0`

<!-- oopsie! delete that tag  (will not delete image)-->
`docker rmi node-docker:v1.0.0`