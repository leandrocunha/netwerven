import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ handleSidebar, open }) => (
  <div
    id="Sidebar"
    className={classNames(open && 'open')}
    onClick={() => handleSidebar()}
  >
    <div className="navbar">
      <header>
        <h1 className="navbar-brand">Logo</h1>
        <button className="btn btn-link close-sidebar">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </header>
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
    </div>
  </div>
);

export default Sidebar;
