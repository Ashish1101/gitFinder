import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <React.Fragment>
      <h1 style={styleComp}>
        <i className={props.icon}></i> {props.title}
        <Link to='/about' style={btn}>
          About
        </Link>
        <Link to='/' style={btn}>
          Home
        </Link>
      </h1>
    </React.Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};

const btn = {
  display: 'inline-block',
  float: 'right',
  fontSize: '18px',
  padding: '5px 10px',
  textDecoration: 'none',
  marginTop: '2px',
  color: 'white',
};

const styleComp = {
  width: '100%',
  height: '40px',
  backgroundColor: '#f25252',
  color: 'white',
};

export default Navbar;
