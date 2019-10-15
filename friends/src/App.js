import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Login from './components/FriendsFrom'
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
            <Route path='/login' component={Login} />
            {/* <Route component={Login} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
