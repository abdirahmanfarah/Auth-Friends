import React from 'react';
import FriendCard from './FriendCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Form from './Form';

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res.data)
        this.setState({
          friends:res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div >
        <h1>The Friends</h1>
        <Form />
        <div className='friends-container' >
          {this.state.friends.map(item => (
            <FriendCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    )
  }
}

export default FriendsList;