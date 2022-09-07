import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>     <a className="nav-link" href="/ninjas">
              Ninjas
            </a>*/}
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link active" aria-current="page" to="/ninjas">
              Ninjas
            </Link>
            <Link className="nav-link active" aria-current="page" to="/ninjas/asdsdsdsdsd">
              Ninja Details
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
