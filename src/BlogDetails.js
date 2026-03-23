import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams()
  
  return ( 
    <div className="blog-details-content">
      <h1>Blog Details - { id } </h1>
    </div>
   );
}
 
export default BlogDetails;