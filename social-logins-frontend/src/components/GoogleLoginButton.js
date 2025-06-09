// src/components/GoogleLoginButton.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const handleSuccess = async (credentialResponse) => {
    try {
      // Send the token to backend for verification and login
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/google/`, {
        access_token: credentialResponse.credential,
      });
      onLoginSuccess(res.data);
    } catch (err) {
      console.error('Google login error:', err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
