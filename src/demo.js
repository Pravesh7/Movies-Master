import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=> {
  // const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  const func = () => {
    localStorage.removeItem("token");
  };
  // const [isAuth, setisAuth] = useState(false);

  // useEffect(() => {
  //   setisAuth(token);
  // }, [token]);

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
            {token ? (
              <li className="navbar-brand text-white text-lg brand-text">
                <Link
                  className="navbar-brand text-white text-lg brand-text"
                  to="/login"
                  onClick={func}
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

export {Navbar};
