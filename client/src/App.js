import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./components/login/Login.js";
import SignUp from "./components/login/Signup.js";
import Dashboard from "./components/user/Dashboard.js";
import Stats from "./components/user/Stats.js";
import Tracker from "./components/user/Tracker.js";
import User from "./components/user/User.js";

function App() {
  const [state, setState] = useState({ token: null, user: null });

  if (!state.token) {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Habit Stats
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Login}>
                  <Login setAppState={setState} />
                </Route>
                <Route path="/sign-in">
                  <Login setAppState={setState} />
                </Route>
                <Route path="/sign-up">
                  <SignUp setAppState={setState} />
                </Route>
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/dashboard"}>
                Habit Stats
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/tracker"}>
                      Tracker
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/stats"}>
                      Statistics
                    </Link>
                  </li>
                </ul>
              </div>

              <Link className="navbar-brand navbar-right" to={"/user"}>
                {state.user.firstname}
              </Link>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/stats" component={Stats} />
                <Route path="/tracker" component={Tracker} />
                <Route path="/user">
                  <User state={state} setAppState={setState} />
                </Route>
                <Redirect to="/dashboard" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
