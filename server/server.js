const express = require('express');
const cors = require('cors');
const spotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors())

app.post('/login',(req,res)=>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: ' a870774ba0f54cca924fba0d0a4f23f1',
        clientSecret: ' 857ac871015149f480d66b7b660310e3'

    })

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({ 
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() =>{
        res.sendStatus(400)
    })
})

app.listen(3001)