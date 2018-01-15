import React from 'react';        
import UserDetails from '../UserDetails/UserDetails';

import css from './profile.css'
const UserProfile = ({userProfile}) => (
  <div className="userCard">
    <img className="avatar" src={userProfile.avatar_url} alt="Avatar Pic"/>
    <p>{userProfile.login}</p>
    <p>{userProfile.bio}</p>
  </div>
);

export default UserProfile;
