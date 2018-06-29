import React from 'react';
import { Router, Route, Switch, } from 'mirrorx';

// 按需加载
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo';

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/userinfo" component={createComponent(UserInfo)} />
    </Switch>
  </Router>
);

export default getRouter;