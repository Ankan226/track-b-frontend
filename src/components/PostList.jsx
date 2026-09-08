import PostItem from "./PostItem";

function PostList({ posts, onDelete }) {
  if (posts.length === 0) {
    return <p className="status-message">No posts yet. Add one above!</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;