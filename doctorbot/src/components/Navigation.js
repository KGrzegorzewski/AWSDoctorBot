import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Navigation() {
    return (
        <nav>
            <Link className="navigation__link" to="/">Home</Link>
            <Link className="navigation__link" to="/registration">Registration</Link>
            <Link className="navigation__link" to="/about">Authors</Link>
            
        </nav>
    );
  }