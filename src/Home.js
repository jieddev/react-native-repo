import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)
  const [blogs, setBlogs] = useState([
    {title: "Happy Birthday", body: "Okay", id: 1},
    {title: "Merry Christmas", body: "pasko", id: 2},
    {title: "New Year", body: "new lifestyle", id: 3},
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
    < BlogList blogs={blogs}/>
 
   );
}
 
export default Home;