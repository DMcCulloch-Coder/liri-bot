const axios = require('axios');
const moment = require('moment');
const Spotify = require('node-spotify-api');
require("dotenv").config();

const keys = require('./keys.js');
const fs = require('fs')

let spotify = new Spotify(keys.spotify);

let command = process.argv[2]
let commandData = process.argv[3]

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
    case "do-what-it-says":
        let dataBuffer = fs.readFileSync('random.txt');
        let parse = dataBuffer.toString();
        let data = parse.split(',');
        command = data[0];
        commandData = data[1];
    case "concert-this":
        let artist = commandData.toLowerCase().split(' ').join('+')
        axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
        .then(function(response) {
            console.log(`Artist: ${response.data[0].artist.name}`);
            console.log(`Venue: ${response.data[0].venue.name}`)
            console.log(`Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.region}`)
            let eventTime = response.data[0].venue.datetime
            let eventTimeVisual = moment(eventTime).format("MM/DD/YYYY");
            console.log(`Event Date: ${eventTimeVisual}`)
        })
        .catch(function (err) {
            console.log(`Error: ${err}`)
        })
        break;
    case "spotify-this-song":
        if (commandData) {
            let song = commandData.toLowerCase().split(' ').join('+')
        } else {
            let song = "the+sign"
        }
        spotify.search({ type: 'track', query: song}, function (err, data) {
            if (err) {
                return console.log(`Spotify Error: ${err}`)
            }
            console.log(data);
        })
        break;
    case "movie-this":
        console.log("movie-this")
        break;
    
}

logInput();