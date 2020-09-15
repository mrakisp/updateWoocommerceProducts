import React, { Component }  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Dashboard as DashboardView,
  Products as ProductsView
} from './views';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <DashboardView />
          </Route>
          <Route path="/products">
            <ProductsView />
          </Route>
          <Route path="/">
            <DashboardView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};



export default Routes;