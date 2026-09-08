import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { fetchPosts, addPost, removePost } from "./api/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.log("Error fetching posts:", err.message);
      setError("Could not connect to the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData) => {
    const newPost = await addPost(formData);
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const handleDelete = async (id) => {
    try {
      await removePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (err) {
      console.log("Error deleting post:", err.message);
      alert("Could not delete this post.");
    }
  };

  return (
    <div className="container">
      <h1>Sprint 11 - Fullstack Posts App</h1>

      <PostForm onCreate={handleCreate} />

      {loading && <p className="status-message">Loading posts...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && <PostList posts={posts} onDelete={handleDelete} />}
    </div>
  );
}

export default App;