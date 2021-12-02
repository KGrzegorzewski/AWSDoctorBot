
import './App.css';
import React from 'react';
 

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div>
        <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
} 
export default App;
