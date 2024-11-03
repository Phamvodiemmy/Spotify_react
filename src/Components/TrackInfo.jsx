import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrackInfo = () => {
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
      <h1>Track Information</h1>
      {tracks.length > 0 ? (
        tracks.map((item, index) => (
          <div key={index} style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h2>{item.track.name}</h2>
            <p>Artist: {item.track.artists.map(artist => artist.name).join(', ')}</p>
            <p>Album: {item.track.album.name}</p>
            <img src={item.track.album.images[0]?.url} alt={item.track.name} style={{ width: '200px' }} />
            <p>Popularity: {item.track.popularity}</p>
            <p>Duration: {(item.track.duration_ms / 60000).toFixed(2)} minutes</p>
            {item.track.preview_url && (
              <audio controls style={{ marginTop: '10px' }}>
                <source src={item.track.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))
      ) : (
        <p>No track information available.</p>
      )}
    </div>
  );
};

export default TrackInfo;
