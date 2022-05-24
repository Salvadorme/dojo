import Navbar from './navbar';
import Home from './home';

function App() {
  // const title = 'welcome to the new blog';
 // const likes = 23 ;
  //const link = "http://www.google.com" 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
