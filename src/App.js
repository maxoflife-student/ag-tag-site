import React from 'react';
import Badges from './Pages/Badges';
import About from './Pages/About';
import Home from './Pages/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1><a href="/">Ag-Tags</a></h1>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/badges" exact component={Badges}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;