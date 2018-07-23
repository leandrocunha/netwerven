import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBriefcase,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header id="Navbar">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button className="btn btn-link hamburguer">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className="navbar-brand">Logo</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Departments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Search for jobs by keywords"
              type="text"
            />
          </div>
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <a className="btn btn-link briefcase" href="#">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
