import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Form extends React.Component {

  state = {
    newFriend : {
      id: Date.now(),
      name: '',
      age: '',
      email: ''
    },
    isAddingFriend: false
  }
  handleChange = e => {
    e.preventDefault();
      this.setState({
        newFriend: {
          ...this.state.newFriend, [e.target.name]: e.target.value
        }
      })
  }
  
  componentDidMount() {
    this.postData();
  }

  postData = () => {
    this.setState({
      isAddingFriend:true
    });
    axiosWithAuth()
      .post('/friends')
        .then(res => {
          console.log(res)
          this.setState({
            newFriend:res.data
          })
        })
        .catch(err =>  console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.postData}>
          <input 
          name='name' 
          placeholder='Name' 
          onChange={this.handleChange}
          value={this.state.newFriend.name}
          />

          <input 
          name='age'
          placeholder='Age'
          onChange={this.handleChange}
          value={this.state.newFriend.age}
          />

          <input 
          name='email' 
          placeholder='Email' 
          onChange={this.handleChange} 
          value={this.state.newFriend.email}
          />
          <button>Add Friend</button>
        </form>
      </div>
    )
  }
}
export default Form;