const BlogList = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs
  // const blogs_title = props.title

  return (
    <div className="blogs-list">
      <div className="home">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
