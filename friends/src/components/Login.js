import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }
o
  login = e => {
    e.preventDefault();
    this.setState({
      isLoading:true
    });
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  
  render(){
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button> Log in</button>
          {this.state.isLoading && 'loggin in'}
        </form>
      </div>
    )
  }

}
export default Login;