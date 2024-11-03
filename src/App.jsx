import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PlaylistTracks from './Components/PlaylistTracks';
import TrackInfo from './Components/TrackInfo';
import useAuth from './hooks/useAuth';

const App = () => {
  useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playlist" element={<PlaylistTracks />} />
        <Route path="/trackinfo" element={<TrackInfo />} />
      </Routes>
    </div>
  );
};

export default App;
