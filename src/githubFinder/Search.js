import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/Alert/AlertContext';

//Changing class based component to Fucntional Component using Hooks
//this.state.text becomes text
//this.setState({text: 'something}) becomes setText
const Search = (props) => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const handleChange = (e) => {
    setText(([e.target.name] = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something');
    } else {
      githubContext.SearchUser(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          onChange={handleChange}
          style={search}
          placeholder='Enter Github User Name'
        />
        <input type='submit' value='Submit' style={btn} />
      </form>
      {githubContext.users.length > 0 && (
        <button style={clear} onClick={githubContext.clearUser}>
          Clear
        </button>
      )}
    </div>
  );
};

const search = {
  width: '100%',
  padding: '10px 10px',
  fontSize: '20px',
};

const btn = {
  width: '100%',
  backgroundColor: '#323e84',
  padding: '10px 10px',
  border: '0px ',
  color: 'white',
  fontSize: '18px',
};

const clear = {
  marginTop: '5px',
  width: '100%',
  backgroundColor: '#333333',
  padding: '10px 10px',
  border: '0px ',
  color: 'white',
  fontSize: '18px',
};

Search.prototype = {
  setAlert: PropTypes.object.isRequired,
};

export default Search;
