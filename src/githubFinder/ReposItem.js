import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div style={Style}>
      <a href={repo.html_url} style={btn}>
        {repo.name}
      </a>
    </div>
  );
};

ReposItem.prototype = {
  repo: PropTypes.array.isRequired,
};

const Style = {
  maxWidth: '800px',
  height: '50px',
  margin: '10px auto',
  padding: '5px 10px',
  border: '1px solid grey',
  backgroundColor: 'grey',
};

const btn = {
  color: 'white',
  textDecoration: 'none',
};

export default ReposItem;
