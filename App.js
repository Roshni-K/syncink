import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
