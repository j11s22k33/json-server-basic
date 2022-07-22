# JSON-SERVER-BASIC
- https://github.com/j11s22k33/json-server-basic.git
- https://www.npmjs.com/package/json-server
```
+-- [json-server] - 테스트 용도
+----- [middlewares] - 미들웨어 모음
+----- [public] - static files
+----- db.json - json데이터
+----- routes.json - 라우트경로
```

### Relationships
- https://jsonplaceholder.typicode.com/guide/
```
--id _id
--fks _id

GET	/posts
GET	/posts/1
GET	/posts/1/comments - Listing nested resources
GET	/comments?post_id=1 - Filtering resources
POST /posts
PUT	/posts/1
PATCH /posts/1
DELETE /posts/1

{
    posts: [
        {_id:1}
    ],
    comments: [
        {posts_id:1, _id:1}
    ]
}
```
