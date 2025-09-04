import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createPost } from "../api/posts.js";

export function CreatePost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const queryClient = useQueryClient();
    const createPostMutation = useMutation({
  mutationFn: () => createPost({ title, author, content }),
  onSuccess: () => {
    queryClient.invalidateQueries(["posts"]);
    setTitle("");
    setAuthor("");
    setContent("");
  },
  onError: (error) => {
    console.error("Mutation error:", error);
  }
});

    const handleSubmit = (e) => {
        e.preventDefault();
        createPostMutation.mutate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="create-author">Author:</label>
                <input type="text" name="create-author" id="create-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="create-content">Content:</label>
                <textarea name="create-content" id="create-content" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <br />
            <input type="submit" value={createPostMutation.isLoading ? "Creating..." : "Create"} disabled={!title || createPostMutation.isPending} />
            {createPostMutation.isSuccess ? (
                <>
                    <br />
                </>
            ) : null}
        </form>
    );
}
