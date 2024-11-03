import React from 'react';
import { authUrl } from '../utils/spotifyAuth';
import './Login.css'; // Import file CSS cho Login

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login to Spotify</h1>
      <a href={authUrl} className="login-button">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
