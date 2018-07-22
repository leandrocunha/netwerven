import React from 'react';

const Navbar = () => (
  <header id="Navbar">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">Logo</h1>
        <ul className="navbar-nav">
          <li clasName="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li clasName="nav-item">
            <a className="nav-link" href="#">
              Jobs
            </a>
          </li>
          <li clasName="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li clasName="nav-item">
            <a className="nav-link" href="#">
              Departments
            </a>
          </li>
          <li clasName="nav-item">
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
          <button className="btn">Search</button>
        </form>
        <a className="btn btn-link" href="#">
          Jobs
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
