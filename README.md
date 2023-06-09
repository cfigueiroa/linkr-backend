# linkr-backend

```
linkr-backend
├── .env.example
├── .gitignore
├── dump.sql
├── package-lock.json
├── package.json
├── README.md
├── migrations
│   ├── 001_create_table_users.sql
│   ├── 002_create_table_sessions.sql
│   ├── 003_create_table_posts.sql
│   ├── 004_create_table_likes.sql
│   ├── 005_create_table_hashtags.sql
│   ├── 006_create_table_posts_hashtags.sql
│   ├── 007_alter_tables_add_constrains.sql
│   ├── 008_sprint_2.sql
│   └── 009_unique.sql
└── src
    ├── app.js
    ├── configs
    │   └── database.connection.js
    ├── controllers
    │   ├── comment.controller.js
    │   ├── hashtag.controller.js
    │   ├── post.controller.js
    │   └── user.controller.js
    ├── errors
    │   └── index.errors.js
    ├── middlewares
    │   ├── auth.middleware.js
    │   ├── error.middleware.js
    │   └── validateSchema.middleware.js
    ├── repositories
    │   ├── comment.repository.js
    │   ├── hashtag.repository.js
    │   ├── post.repository.js
    │   └── user.repository.js
    ├── routers
    │   ├── comments.router.js
    │   ├── hashtags.router.js
    │   ├── index.router.js
    │   ├── post.router.js
    │   └── users.router.js
    ├── schemas
    │   ├── post.schema.js
    │   └── user.schema.js
    ├── services
    │   ├── comment.service.js
    │   ├── hashtag.service.js
    │   ├── post.service.js
    │   └── user.service.js
    └── utils
        ├── extractHashtags.util.js
        ├── uuidValidator.util.js
        └── withTransaction.util.js
```
