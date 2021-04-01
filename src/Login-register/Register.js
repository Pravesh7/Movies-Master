import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../history";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      date: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You have successfully registered");
    console.log(this.state);
    localStorage.setItem("state", JSON.stringify(this.state)); // we will get the value by the variable state,,,getItem()

    this.setState({
      fullname: "",
      email: "",
      password: "",
      date: "",
    });
    history.push("/login");
  }

  render() {
    return (
      <center>
        <div className="register">
          <form onSubmit={this.displayLogin}>
            <h2>Register Here</h2>

            <div className="name">
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={this.state.fullname}
                onChange={this.update}
                required
              />
            </div>

            <div className="email">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.update}
                required
              />
            </div>
            {/* <div className="dob">
						<input
							type="date"
							placeholder="Enter your DOB"
							name="dob"
							value={this.state.email}
							onChange={this.update}
						/>
					</div> */}

            <div className="pasword">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.update}
                required
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                name="date"
                value={this.state.date}
                onChange={this.update}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={false}
            >
              Submit
            </button>
          </form>

          <Link to="/login">Go to Login</Link>
        </div>
      </center>
    );
  }
}

export default Register;
