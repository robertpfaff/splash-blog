export const getPosts = async (queryParams) => {
  const res = await fetch(
     `${import.meta.env.VITE_BACKEND_URL}/posts?` +
        new URLSearchParams(queryParams)
  );
  if (!res.ok) {
    throw new Error(`Error fetching posts: ${res.status} ${res.statusText}`);
  }
  return await res.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return await response.json();
};
