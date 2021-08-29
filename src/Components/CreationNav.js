import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import '../App.css';

function CreationNav({url}) {

    return (
        <nav>
            <ul className="nav-links">
                <Link className="rd-link" to={`${url}/style`}>Style</Link>
                <Link className="rd-link" to={`${url}/color`}>Color</Link>
                <Link className="rd-link" to={`${url}/names`}>Names</Link>
            </ul>
        </nav>
    );
    }

export default CreationNav;