import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)
  const [blogs, setBlogs] = useState([
    {title: "Happy Birthday", body: "Okay", author: "mario", id: 1},
    {title: "Merry Christmas", body: "pasko", author: "luigi", id: 2},
    {title: "New Year", body: "new lifestyle", author: "mario", id: 3},
  ])


  const handleClick = (e) => {
    // console.log("hello ninjas", e.type);
    setName('luigi');
    setAge(30)
  }

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e);
  }
  

  return ( 
    <div className='home'>
      < BlogList blogs={blogs} title="All Blogs"/>
      < BlogList blogs={blogs.filter((blog) => blog.author == "mario")} title="Mario's Blogs"/>
    </div>
    
   );
}
 
export default Home;