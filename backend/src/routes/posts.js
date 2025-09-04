import express from 'express';
import Post from '../db/models/post.js';

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Create a new post
router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

export default router;
