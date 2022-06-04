import './App.css';
import Navbar from "./components/Navbar"
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
