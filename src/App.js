import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

import store from "./store";
import Login from "./Login-register/Login";
import Register from "./Login-register/Register";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Navbar />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Register} />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <br />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
