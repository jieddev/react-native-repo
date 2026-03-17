const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs
  // const blogs_title = props.title

  return (
    <div className="blogs-list">
      <div className="home">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
