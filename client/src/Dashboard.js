import React, { useEffect } from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyAPI = new SpotifyWebApi ({
  clientId: '41aacb7de87347a28af75fa5a557c3a9',
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyAPI.setAccessToken(accessToken);
    spotifyAPI.getMe().then(data => {
      console.log(data);
    })
  }, [accessToken]);
  return (
    <div>{code}</div>
  )
}

export default Dashboard;