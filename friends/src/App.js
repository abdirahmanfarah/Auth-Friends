import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends App</h1>
          <div>
              <Link to='/login'>Login</Link><br />
            
              <Link to='/friends'>Friends Page</Link>
          </div>
            
          <Switch>
            <PrivateRoute path='/friends' component={FriendsList} />
            <Route path='/login' component={Login} />
            {/* <Route component={Login} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
