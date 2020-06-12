import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import Repos from './Repos';
import GithubContex from '../context/github/githubContext';
const User = ({ match }) => {
  const githubContext = useContext(GithubContex);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    bio,
    followers,
    following,
    public_repos,
    public_gists,
    avatar_url,
    html_url,
  } = githubContext.user;
  if (githubContext.loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link
        to='/'
        style={{
          backgroundColor: 'grey',
          position: 'absolute',
          margin: '10px 40px',
          padding: '5px 10px',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        Search
      </Link>
      <div style={outerBox}>
        <div style={imgCard}>
          <img
            src={avatar_url}
            alt=''
            style={{ width: '150px', borderRadius: '50%' }}
          />
          <h3>{login}</h3>
        </div>
        <div style={imgCard}>
          <h4 style={{ maringTop: '50px' }}>Bio</h4>
          {bio && <p>{bio}</p>}
          <a href={html_url} style={btn}>
            Github Profile
          </a>
        </div>
      </div>
      <div style={number}>
        <div style={{ margin: '10px 0px' }}>
          <button
            style={{
              color: 'white',
              backgroundColor: '#5b5b5b',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '30px',
              margin: '0px 3px',
            }}
          >
            followers : {followers}
          </button>
          <button
            style={{
              color: 'white',
              backgroundColor: 'red',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '30px',
              margin: '0px 3px',
            }}
          >
            following : {following}
          </button>
          <button
            style={{
              color: 'white',
              backgroundColor: 'purple',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '30px',
              margin: '0px 3px',
            }}
          >
            Repos : {public_repos}
          </button>
          <button
            style={{
              color: 'white',
              backgroundColor: 'black',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '30px',
              margin: '0px 3px',
            }}
          >
            Gists : {public_gists}
          </button>
        </div>
      </div>
      <Repos />
    </Fragment>
  );
};

const outerBox = {
  maxWidth: '800px',
  margin: '50px auto',
  height: '300px',
  border: '1px solid grey',
  display: 'grid',
  gridTemplateColumns: 'repeat(2 ,1fr)',
  justifyContent: 'space-around',
};

const btn = {
  textDecoration: 'none',
  padding: '5px 10px',
  backgroundColor: 'black',
  color: 'white',
  margin: '20px -60px',
  position: 'absolute',
};

const imgCard = {
  margin: '40px 20px',
  textAlign: 'center',
  backgroundColor: '',
};

const number = {
  maxWidth: '800px',
  margin: '50px auto',
  height: '50px',
  border: '1px solid grey',
};

export default User;
