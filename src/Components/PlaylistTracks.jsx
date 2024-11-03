import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlaylistTracks = () => {
  const [tracks, setTracks] = useState([]);
  const playlistId = '54ZA9LXFvvFujmOVWXpHga'; // ID của playlist

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      const token = localStorage.getItem('spotify_token'); // Lấy token từ localStorage
      if (token) {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTracks(response.data.items); // Lưu toàn bộ bài nhạc vào state
        } catch (error) {
          console.error('Error fetching playlist tracks:', error);
        }
      }
    };

    fetchPlaylistTracks();
  }, [playlistId]);

  return (
    <div>
      <h1>Playlist Tracks</h1>
      {tracks.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>{item.track.name}</strong> - {item.track.artists.map(artist => artist.name).join(', ')}</p>
          {item.track.preview_url && (
            <audio controls style={{ marginTop: '10px' }}>
              <source src={item.track.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlaylistTracks;
