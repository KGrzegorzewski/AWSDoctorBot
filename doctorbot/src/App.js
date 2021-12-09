import './App.css';
import React , { Component } from 'react';
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Registration from './components/Registration';


class App extends Component {
  render() {
    return (
      <div className = 'navigation'>
         <Router>
         <div>
           <Navigation />
           <Routes>
             <Route path="/about" element={<About/>}>
             </Route>
             <Route path="/" element={<Home/>}>
             </Route>
             <Route path="/registration" element={<Registration/>}>
             </Route>
           </Routes>
         </div>
       </Router>
       <Footer/>
     </div>
    );
  }
}
export default App;
