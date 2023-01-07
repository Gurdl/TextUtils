import React from "react";
import PropTypes from "prop-types";
// import InputColor from 'react-input-color';
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <input
      type="color"
      value={props.color}
      onChange={e => props.setColor=()=>(e.target.value)}
      ></input>
       <InputColor initialValue={props.initial} onChange={props.setColor} /> */}
      <div className={`form-check form-switch text-${props.txt}`}>
        <input
          className="form-check-input"
          type="checkbox"
          onClick={props.toggle}
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          dark mode
        </label>
      </div>
    </nav>
  );
}
//This will check that title must be a string only:
Navbar.propTypes = { title: PropTypes.string.isRequired };
//Set the default value of a title:
Navbar.defaultProps = {
  title: "Write Your Title",
};
