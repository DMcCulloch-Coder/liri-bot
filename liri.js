require("dotenv").config();

const keys = require('./keys.js');
const fs = require('fs')

let spotify = new Spotify(keys.spotify);

