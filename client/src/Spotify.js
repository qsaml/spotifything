const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';
const clientID = '41aacb7de87347a28af75fa5a557c3a9';
const scopes = [
  'playlist-modify-private',
  'user-read-email',
  'user-top-read'
]

export const loginURL = `${authEndpoint}?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}`;
