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
- https://keyholesoftware.com/2020/03/16/mock-restful-server-fast-with-json-server/
```
--id _id
--fks _id

GET localhost:3000/posts/1
GET localhost:3000/posts/1/comments
GET localhost:3000/comment?_expand=post&post_id=1
PATCH localhost:3000/posts/1/comments - 이거 안됨
{
    posts: [
        {_id:1, name:'post_id_1'}
    ],
    comments: [
        {posts_id:1, _id:1, name:'posts_1_comment_1'}
    ]
}
```
