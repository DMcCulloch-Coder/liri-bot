const axios = require('axios');
require("dotenv").config();

const keys = require('./keys.js');
const fs = require('fs')

// let spotify = new Spotify(keys.spotify);

let command = process.argv[2]

function logInput () {
    let data = process.argv.splice(2);
    console.log(data)
    fs.appendFile('log.txt', `{ ${data} }, `, (err) => {
        if (err) {
            console.log('Filing error!')
        } else {
            console.log('Log Updated!')
        }
    })
}

switch (command) {
    case "concert-this":
        let artist = process.argv[3].split(' ').join('+')
        axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
        .then(function(response) {
            console.log(response)
        })
        break;
    case "spotify-this-song":
        console.log("spotify-this-song")
        break;
    case "movie-this":
        console.log("movie-this")
        break;
    case "do-what-it-says":
        console.log("do-what-it-says")
        break;
}

logInput();