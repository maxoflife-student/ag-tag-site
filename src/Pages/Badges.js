import React from 'react';
import Style from '../Pages/Style'
import Color from '../Pages/Color'
import Names from '../Pages/Names'
import CreationNav from '../Components/CreationNav';
import {BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';

function Badges() {

  return (
    <Router>
      <div>
        <h2>Badge Customization Page</h2>
        <CreationNav/>
        <Switch>
          <Route path="/badges/style" exact component={Style} />
          <Route path="/badges/color" exact component={Color} />
          <Route path="/badges/names" exact component={Names} />
        </Switch>
      </div>
    </Router>
  );
}

export default Badges;