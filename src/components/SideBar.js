import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <div className={props.sidebar}>
      <FaTimes
        className="close"
        onClick={props.setSidebar}
      />
      <ul className="sidebar-list-container">
        <li className="sidebar-list-container-list"><Link to="/">HOME</Link></li>
        <li className="sidebar-list-container-list"><Link to="/about">ABOUT</Link></li>
      </ul>
    </div>
  );
};


export default Sidebar;
Sidebar.propTypes = {
    sidebar: PropTypes.string.isRequired,
    setSidebar: PropTypes.func.isRequired,
};
