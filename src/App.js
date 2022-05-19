import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './App.css'
function App() {
  return (
    <div className="content">
        <Navbar/>
        <div className="home">
            <Home/>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
