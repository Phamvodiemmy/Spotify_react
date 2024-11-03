import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToPlaylist = () => {
    navigate('/playlist');
  };

  const goToTrackInfo = () => {
    navigate('/trackinfo');
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Spotify Dashboard</h1>
      <button onClick={goToPlaylist} className="dashboard-button">
        View Playlist Tracks
      </button>
      <button onClick={goToTrackInfo} className="dashboard-button">
        View Track Information
      </button>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
