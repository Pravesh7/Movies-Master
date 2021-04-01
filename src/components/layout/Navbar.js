import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {isLogged} from "../../actions/searchActions";
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
 
  handleLogout =(e) => {
    e && e.stopPropagation();
    this.props.isLogged(false);
    this.props.history.push('/');
    // this.setState({ isAuth: false });
  };

  render() {
    // console.log('----------->', this.props.isLoggedIn)
    return (
      <div>
        <nav className="navbar navbar-light bg-dark mb-5">
          <div className="container">
            <div className="navbar-header">
              <br />
              <br />
              <p className="navbar-brand text-white text-lg brand-text">
                IMDB Movies
              </p>
            </div>

            <ul className="navbar-nav ml-auto text-light d-inline-block">
              {this.props.isLoggedIn ? (
                <li className="navbar-brand text-white text-lg brand-text">
                  <Link
                    className="navbar-brand text-white text-lg brand-text"
                    to="/"
                    onClick={e => this.handleLogout(e)}
                  >
                    LOGOUT
                  </Link>
                </li>
              ) : (
                <>
                  <li className="navbar-brand text-white text-lg brand-text">
                    <Link
                      className="navbar-brand text-white text-lg brand-text"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="navbar-brand text-white text-lg brand-text">
                    <Link
                      className="navbar-brand text-white text-lg brand-text"
                      to="/"
                    >
                      Register
                    </Link>
                  </li>{" "}
                </>
              )}

              <li className="nav-item d-inline-block mr-4">
                <i className="fab fa-imdb fa-5x" id="imdb-logo" />
              </li>
              <li className="nav-item d-inline-block mr-4">
                <i className="fab fa-react fa-5x" id="react-logo" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.movies.isLogged,
});

export default connect(mapStateToProps, { isLogged })(withRouter(Navbar));
