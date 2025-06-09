// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ token }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (token) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/profile/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
    }
  }, [token]);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Name: {profile.first_name} {profile.last_name}</p>
    </div>
  );
};

export default Profile;
