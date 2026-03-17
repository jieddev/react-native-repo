import Navbar from './Nav';
import Home from './Home';

function App() {
  // const title = "Welcome to the New Blog"
  // const likes = 50

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="content">
        <Home/>        
        {/* <h1> { title }  </h1> 
        <p> Liked { likes } times</p> */}

      </div>

    </div>
  );
}

export default App;
