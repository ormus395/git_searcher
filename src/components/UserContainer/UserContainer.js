import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import UserCard from '../UserCard/UserCard';

import css from './user_container.css';

const UserContainer = ({userProfile}) => {
  return(<div className="UserContainer">
    <UserCard userProfile={userProfile} />
    <UserDetails />
  </div>);
}

export default UserContainer;