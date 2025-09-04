import { useQuery } from '@tanstack/react-query';
import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx';
import { PostFilter } from './components/PostFilter.jsx';
import { PostSorting } from './components/PostSorting.jsx';
import { getPosts } from './api/posts.js';

export function Blog() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (postsQuery.isLoading) return <div>Loading...</div>;
  if (postsQuery.error) return <div>Error: {postsQuery.error.message}</div>;

  const posts = postsQuery.data ?? [];

  return (
    <div>
      <CreatePost />
      <PostFilter field="author" />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <PostList posts={posts} />
    </div>
  );
}
