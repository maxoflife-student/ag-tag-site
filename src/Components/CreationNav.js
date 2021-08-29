import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function CreationNav() {
  return (
    <nav>
        <ul className="nav-links">
            <Link className="rd-link" to="/badges/style">Style</Link>
            <Link className="rd-link" to="/badges/color">Color</Link>
            <Link className="rd-link" to="/badges/names">Names</Link>
        </ul>
    </nav>
  );
}

export default CreationNav;