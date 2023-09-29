# Linkr - Backend

## Description

The API of the Linkr project acts as the backbone for an exciting social networking platform designed for sharing links and social interactions. This robust server is built using cutting-edge technologies such as Node.js, Express, and Postgres, offering a plethora of features and functionalities to deliver an exceptional user experience.


![Linkr demo](https://user-images.githubusercontent.com/115481094/270741486-42a66a26-a857-49d1-a285-d34c64d00338.gif)

🚀 **[Linkr Live Demo](https://projeto19-linkr-front-77u8lzs42-kadioba.vercel.app/)**

🪪 You can use the following test credentials email: "teste@teste.com" and password: "teste"

⚠️ The demo may exhibit instability due to the use of free servers.

API Demo Link: https://linkrapi-wcod.onrender.com

Frontend Repository: https://github.com/cfigueiroa/linkr-frontend

## About

Linkr is more than just a social network; it’s a digital space where users can share intriguing links with the world and interact with other web enthusiasts. Some of its key features include:

- **Link Posting:** Users can share links to articles, videos, images, and more.
- **Featured Hashtags:** Hashtags are highlighted in each post, allowing users to quickly explore specific topics.
- **Customized Feed:** Each user’s timeline features posts from other users they follow.
- **Comments and Reposts:** Users can comment on posts and even repost them on their own timelines.
- **Following and Followers:** Users can follow other users and see who is following them.
- **User Search:** A search functionality allows users to easily find other users.
- **Secure Authentication:** Authentication is handled securely, ensuring user information protection.

This project was developed with passion and dedication to create a unique link-sharing and social interaction experience on the web.

### Technologies

- Node.js
- Express.js
- Postgres
- Joi (for data validation)
- Other essential libraries and tools

### API Endpoints

The API offers the following endpoints:

#### Authentication

- `POST /api/auth/signup`: Route for registering new users.
- `POST /api/auth/signin`: Route for logging in existing users.
- `POST /api/auth/signout`: Route for logging out authenticated users.

#### Posts

- `POST /api/posts`: Route to create a new post.
- `GET /api/posts`: Route to list all posts.
- `GET /api/posts/:postId`: Route to get details of a specific post.
- `PUT /api/posts/:postId`: Route to edit an existing post.
- `DELETE /api/posts/:postId`: Route to delete a post.

#### Comments

- `POST /api/posts/:postId/comments`: Route to add a comment to a post.
- `GET /api/posts/:postId/comments`: Route to list all comments on a post.

#### Hashtags

- `GET /api/hashtags`: Route to get featured hashtags.
- `GET /api/hashtags/:hashtag/posts`: Route to list posts related to a specific hashtag.

#### Following and Followers

- `POST /api/users/:userId/follow`: Route to follow a user.
- `GET /api/users/:userId/followers`: Route to list a user’s followers.
- `GET /api/users/:userId/following`: Route to list the users followed by a user.

#### User Search

- `GET /api/users/search`: Route to search for other users based on specific criteria.

These endpoints allow Linkr users to interact with the platform in various ways, from creating posts to exploring popular hashtags and interacting with other users. The API is designed to be secure and efficient, ensuring an incredible user experience.

## How to Run

Follow the steps below to set up and run the Linkr backend on your local machine:

1. Clone the backend repository on your machine:

```bash
git clone https://github.com/expeditus303/linkr-backend.git
```

2. Create a .env file in the project's root directory and configure the following environment variables:

```dotenv
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=linkr
DATABASE_URL=postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
```

3. Install the project dependencies by running the following command:

```bash
npm install
```

4. Run the command to create the entities in the database:

```bash
npm run migrei:up
```

5. Start the backend server:

```bash
npm start
```

Now, the backend will be running at http://localhost:5000, ready to serve requests from the frontend application.

Make sure you have Node.js and npm installed on your machine.

Feel free to explore and integrate the backend with the Linkr frontend application! If you encounter any issues or have suggestions for improvement, do not hesitate to report or contribute to the project.

Enjoy using Linkr! 🌐

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
