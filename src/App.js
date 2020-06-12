import React from 'react';
import './App.css';
import Navbar from './githubFinder/Navbar';
import Users from './githubFinder/Users';

import Search from './githubFinder/Search';
import Alert from './githubFinder/Alert';
import About from './githubFinder/About';
import User from './githubFinder/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
import NotFound from './githubFinder/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <div>
                  <Alert />
                  <Search />
                </div>
                <Users />
              </Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
