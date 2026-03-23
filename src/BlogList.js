import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {

  return (
    <div className="blogs-list">
      <div className="home">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by: {blog.author}</p>
              <p>{blog.body}</p>
            
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
