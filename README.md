### API for posting comments

I tested MongoDB and Express with JavaScript. 

***Note: You must change the ID in the example when updating, getting or removing post.***

## Running app

Please create an env file for the following variables: MONGO_URI and PORT before running the app in the terminal.

If you run  with node:

```shell
git clone https://github.com/nadia-mm/api-posts.git
cd api-posts
npm run dev
```


If you run with docker:

```shell
git clone https://github.com/nadia-mm/api-posts.git
cd api-posts
docker-compose up -d
```


## Create post

```shell
curl -X POST   http://localhost:5000/api/v1/posts   -H 'Content-Type: application/json'   -d '{"title": "test new post", "content":"Hello", "created_at":"2020-01-01T00:00:00.000Z","author":"John Doe"}'
```


## Find all posts

```shell
curl -X GET   http://localhost:5000/api/v1/posts   -H 'Content-Type: application/json'
```


## Find post by ID

```shell
curl -X GET   http://localhost:5000/api/v1/posts/665db8025c5ee3472cf8a0ea  -H 'Content-Type: application/json'
```

## Update post by ID

```shell
curl -X PUT   http://localhost:5000/api/v1/posts/665db8025c5ee3472cf8a0ea   -H 'Content-Type: application/json' -d '{"title": "Edit post", "content":"Edit Content"}'
```


## Remove post by ID

```shell
curl -X DELETE   http://localhost:5000/api/v1/posts/665db8025c5ee3472cf8a0ea   -H 'Content-Type: application/json'
```