import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { loginURL } from './Spotify';

const useStyles = makeStyles({
  login: {
    display: 'grid',
    placeItems: 'center',
    height: '20vh',
    backgroundColor: 'white',

    '& img': {
      width: '50%',
    },

    '& a': {
      padding: '20px',
      borderRadius: '99px',
      backgroundColor: '#1db954',
      fontWeight: 600,
      color: 'white',
      textDecoration: 'none',
    },

    '& a.hover': {
      backgroundColor: 'white',
      borderColor: '#1db954',
      color: '#1db954',
    }
  },
});

function Login() {
  const classes = useStyles()
  return (
    <div className={classes.login}>
      <a href={loginURL}>LOGIN WITH SPOTIFY.</a>
    </div>
  )
}

export default Login