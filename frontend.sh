docker build -t frontend -f ./frontend/src/Dockerfile ./frontend/
docker tag frontend $1
docker push $1