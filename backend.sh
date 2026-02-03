docker build -t backend -f ./backend/Dockerfile ./backend/
docker tag backend $1
docker push $1