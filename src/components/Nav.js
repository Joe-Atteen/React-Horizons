import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light top">
        <a className="navbar-brand logo" href="#">
          <img
            src="site-img/carousel1.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          COKER OFFICES
        </a>
        <ul className="link">
          <li>About us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
