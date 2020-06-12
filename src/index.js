import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function FullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: 'Ashish',
//   lastName: 'Shakya',
// };

// const Name = <h1>Hello {FullName(user)}</h1>;

serviceWorker.unregister();
