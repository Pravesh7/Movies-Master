import React, { Component } from "react";
// import { Link } from "react-router-dom";
import history from "../history";
import { isLogged } from "../actions/searchActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }
  flag = true;
  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You are logged in");
    console.log(this.state);
    this.data = JSON.parse(localStorage.getItem("state"));
    // undefined
    this.check = Boolean(this.data);
    if (
      //checks whether the data is available or not , and then compares the data
      this.check &&
      this.data.email === this.state.email &&
      this.data.password === this.state.password
    ) {
      this.props.isLogged(true);
      localStorage.setItem("token", true);
      history.push("/home");
    } else {
      this.flag = false;
    }
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <center>
        <div className="login">
          <form onSubmit={this.displayLogin}>
            <h2>Login</h2>
            <div className="username">
              <input
                type="email"
                placeholder="Username..."
                value={this.state.email}
                onChange={this.update}
                name="email"
                id=""
                required
              />
            </div>

            <div className="password">
              <input
                type="password"
                placeholder="Password..."
                value={this.state.password}
                onChange={this.update}
                name="password"
                required
              />
            </div>

            <button type="Submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </form>
          <Link to="/">Go to Register</Link>
          {this.flag ? null : <h3>Wrong email or password</h3>}
        </div>
      </center>
    );
  }
}

export default connect(
  null,
  { isLogged }
)(Login);
