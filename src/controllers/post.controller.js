import postService from "../services/post.service.js";

async function publishPost(req, res) {
  const { url, content } = req.body;
  await postService.publishPost(url, content, res.locals.userId);
  res.sendStatus(201);
}

async function getPosts(req, res) {
  const posts = await postService.getPosts();
  res.send(posts.rows);
}

async function like(req, res) {
  const { postId } = req.params;
  const { userId } = res.locals;
  const response = await postService.like({ postId, userId });
  res.send(response);
}

async function updatePost(req, res) {
  const { postId } = req.params;
  const { content } = req.body;
  const { userId } = res.locals;
  await postService.updatePost({ postId, content, userId });
  res.sendStatus(200);
}

async function deletePost(req, res) {
  const { postId } = req.params;
  const { userId } = res.locals;
  await postService.deletePost({ postId, userId });
  res.sendStatus(200);
}

const postController = { publishPost, getPosts, like, updatePost, deletePost };
export default postController;
