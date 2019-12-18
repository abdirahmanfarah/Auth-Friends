import React from 'react';

const FriendCard = props => {
  console.log(props);
  return (
    <div className="friends-card">
         <p> Name: {props.item.name} </p>
         <p> Age: {props.item.age} </p>
         <p> Email: {props.item.email} </p>
    </div>
  )
}
export default FriendCard;