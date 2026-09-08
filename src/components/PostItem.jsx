function PostItem({ post, onDelete }) {
  return (
    <div className="post-card">
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}

      <div className="post-info">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>

      <button className="delete-btn" onClick={() => onDelete(post._id)}>
        Delete
      </button>
    </div>
  );
}

export default PostItem;