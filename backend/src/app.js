import express from 'express';
import mongoose from 'mongoose';
import postsRouter from './routes/posts.js';

// MongoDB connection
const mongoUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/blog';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

app.use('/api/posts', postsRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
