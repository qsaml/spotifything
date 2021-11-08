const express = require('express')
const cors = require('cors')
const spotifyWebAPI = require('spotify-web-api-node')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json());

const credentials = {
  clientID = '41aacb7de87347a28af75fa5a557c3a9',
  clientSecret = '3b5d469b9b4e4aa0b60c879bc0868819',
  redirectURI = 'http://localhost:3000/',
};

app.get('/', (req, res) => {
  console.log('I hate this project')
})

app.post('/login', (req, res) => {
  let spotifyAPI = new spotifyWebAPI(credentials)
  const code = req.body.code
  spotifyAPI.authorizationCodeGrant(code).then((data) => {
    res.json({
      accessToken = data.body.access_token,
    })
  })
    .catch((e) => {
      console.log(e);
      res.sendStatus(400)
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})