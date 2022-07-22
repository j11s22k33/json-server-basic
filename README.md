# JSON-SERVER-BASIC
- https://github.com/j11s22k33/json-server-basic.git

```
+-- [json-server] - 테스트 용도
+----- [middlewares] - 미들웨어 모음
+----- [public] - static files
+----- db.json - json데이터
+----- routes.json - 라우트경로
```

- https://github.com/typicode/json-server
- https://jsonplaceholder.typicode.com/guide - online 테스트
- https://www.npmjs.com/package/json-server
```
--id _id
--fks _id

GET	/posts
GET	/posts/1
GET	/posts/1/comments - posts/1 의 comments들
GET	/comments?post_id=1 - 필터링
GET	/posts/1?_embed=comments -  posts/1 에 comments를 포함시킨다
GET	/comments/1?_expand=post - comments/1 에 posts를 포함시킨다
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
