### API for posting comments

```
curl -X POST   http://localhost:5000/posts/create   -H 'Content-Type: application/json'   -d '{"title": "test new post", "content":"Hello", "created_at":"2020-01-01T00:00:00.000Z","author":"John Doe"}'

``