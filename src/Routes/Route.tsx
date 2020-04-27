// Components/Routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Dashboard from '../Components/MainContents/Dashboard';
import Chart from '../Components/MainContents/Chart';
import Gis from '../Components/MainContents/Gis';
import SideNav from '../Components/SideNav';
const TsRouter: React.FC = () => (
  <Router>
    <div style={{ display: 'inline-flex', width: '100vw' }}>
      <SideNav />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/chart" component={Chart} />
        <Route path="/map" component={Gis} />
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  </Router>
);
export default TsRouter;
