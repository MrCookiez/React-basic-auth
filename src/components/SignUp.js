import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp Page</h1>
    <SignUpForm history={history} />
  </div>
);

//Capture User Information
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

//onChange handler
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//Create an Event on submit form button
class SignUpForm extends Component {
  constructor(pros) {
    super(pros);

    this.state = { ...INITIAL_STATE };
  }
  //Send data
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
    event.preventDefault();
  };
  render() {
    //Initial state
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    //Validation
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        {/*Username*/}
        <input
          value={username}
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        {/*Email*/}
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        {/*Password #1*/}
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        {/*Password #2*/}
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>error.message</p>}
      </form>
    );
  }
}
//Link
const SignUpLink = () => (
  <p>
    Don't have account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
