import logo from './logo.svg';
import './App.css';
import {Routes,Route } from "react-router-dom"
import Home from "./component/Home"
 import Colleges from "./component/Navbar/Colleges"
 import Exams from "./component/Navbar/Exams"
 import About from "./component/Navbar/About"
 import Navbar from './component/Navbar';
 import Details from './component/Navbar/Details';

function App() {
  return (
    <div className="App">
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/colleges' element={<Colleges/>}/>
             <Route path='/exams' element={<Exams/>}/>
             <Route path='colleges/details' element={<Details/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
