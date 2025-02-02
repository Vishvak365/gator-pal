import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from './PrivateRoute';
import app from './constants/apiconfig';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>
    }
    return (
      <Router>
        <PrivateRoute
              exact
              path="/"
              component={Home}
              authenticated={authenticated}
            />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
      </Router>
    );
  }
}

export default App;
