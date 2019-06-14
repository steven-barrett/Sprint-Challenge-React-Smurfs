import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const linkStyles = {
  padding: "0 2rem",
  textDecoration: "none"
};

const Navigation = () => {
  return (
    <div>
      <div className="nav-bar">        
        <div className='link-div'>
          <NavLink style={linkStyles} to="/">
            Home
          </NavLink>
        </div>
        <div className='link-div'>
          <NavLink style={linkStyles} to="/smurf-form">
            Add Smurf
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
