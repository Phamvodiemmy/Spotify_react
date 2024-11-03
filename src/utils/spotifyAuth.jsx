const client_id = 'f360dca477a244558bdc0ae00b0c0217';  // Thay YOUR_CLIENT_ID bằng client ID thực tế
const redirect_uri = 'http://localhost:5173/';  // Thay YOUR_REDIRECT_URI bằng URI thực tế
const scopes = 'user-read-private user-read-email user-library-read';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const authUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
