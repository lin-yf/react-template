import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Router } from 'react-router-dom';
const RootRouter = ({ store, history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={() => <div>home</div>} />
      </Switch>
    </Router>
  );
};
export default hot(RootRouter);
