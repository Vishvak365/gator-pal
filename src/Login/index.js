import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../constants/apiconfig";

import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LoginContainer);