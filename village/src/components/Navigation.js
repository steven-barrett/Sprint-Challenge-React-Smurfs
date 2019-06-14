import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link style={linkStyles} to="/">
            Home
          </Link>
        </div>
        <div className='link-div'>
          <Link style={linkStyles} to="/smurf-form">
            Add Smurf
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
