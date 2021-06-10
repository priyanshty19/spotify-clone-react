const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    // console.log("hi")
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a870774ba0f54cca924fba0d0a4f23f1',
        clientSecret: '857ac871015149f480d66b7b660310e3',
        refreshToken
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        refreshToken: data.body.refreshToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post('/login',(req,res)=>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a870774ba0f54cca924fba0d0a4f23f1',
        clientSecret: '857ac871015149f480d66b7b660310e3'

    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data =>{
        res
        .json({ 
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
})

app.get('/lyrics',async(req,res)=>{
    const lyrics = await lyricsFinder(req.query.artist, req.query.track) || 
    "No Lyrics Found"
    res.json({lyrics})
})

app.listen(3001)