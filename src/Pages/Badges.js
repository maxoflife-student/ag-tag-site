import React from 'react';
import Style from '../Pages/Style'
import Color from '../Pages/Color'
import Names from '../Pages/Names'
import CreationNav from '../Components/CreationNav';
import {BrowserRouter as Router, Switch, Route, useParams, useRouteMatch, Link} from 'react-router-dom';

function Badges() {

  let {path, url} = useRouteMatch();
  
  console.log("path");
  console.log(url);

  return (
    <div>
      <h2>Badge Customization Page</h2>
      <nav>
            <ul className="nav-links">
                <Link className="rd-link" to={`${url}/style`}>Style</Link>
                <Link className="rd-link" to={`${url}/color`}>Color</Link>
                <Link className="rd-link" to={`${url}/names`}>Names</Link>
            </ul>
      </nav>
      <Switch>
        <Route path={`${path}/style`} exact component={Style} />
        <Route path={`${path}/color`} exact component={Color} />
        <Route path={`${path}/names`} exact component={Names} />
      </Switch>
    </div>
  );
}

export default Badges;