const axios = require('axios');
const moment = require('moment');
require("dotenv").config();

const keys = require('./keys.js');
const fs = require('fs')

// let spotify = new Spotify(keys.spotify);

let command = process.argv[2]

function logInput () {
    let data = process.argv.splice(2);
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
        let artist = process.argv[3].toLowerCase().split(' ').join('+')
        console.log('test-artist' + artist)
        axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
        .then(function(response) {
            console.log(`Artist: ${response[0].artist.name}`);
            console.log(`Venue: ${response[0].venue.name}`)
            console.log(`Venue Location: ${response[0].venue.city}, ${response[0].venue.region}`)
            let eventTime = response[0].venue.datetime
            let eventTimeVisual = moment(eventTime).format("MM/DD/YYYY");
            console.log(`Event Date: ${eventTimeVisual}`)
        })
        .catch(function (err) {
            console.log(`Error: ${err}`)
        })
        break;
    case "spotify-this-song":
        let artist = process.argv[3].toLowerCase().split(' ').join('+')
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