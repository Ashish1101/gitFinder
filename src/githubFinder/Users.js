import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={grid}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1 rem',
  margin: '30px auto',
};

export default Users;
