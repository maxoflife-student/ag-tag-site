import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

import '../App.css';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="vertical-box">
        <Link to='/badges'>
          <Button variant="contained" color="primary">Create a Badge</Button>
        </Link>
        <Link to='/about'>
          <Button variant="contained" color="primary">About Me</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;