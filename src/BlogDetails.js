import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
  const { id } = useParams()
  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
  const pageHistory = useHistory()

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      pageHistory.push("/")
    })
  }

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
   );
}
 
export default BlogDetails;