import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div style={card}>
      <Link to={`/user/${login}`} style={btn}>
        Profile
      </Link>
      <h3 style={{ margin: '20px' }}>{login}</h3>
      <img src={avatar_url} style={imgSize} alt='Github User' /> {'  '}
    </div>
  );
};

const btn = {
  marginTop: '30px',
  textDecoration: 'none',
  padding: '5px 10px',
  backgroundColor: '#333',
  color: 'white',
};

const card = {
  textAlign: 'center',
  width: '100%',
  minHeight: '200px',
  boxShadow: '2px 4px 2px #888888',
};

const imgSize = {
  height: '60px',
  borderRadius: '50%',
  maringLeft: '20px',
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
