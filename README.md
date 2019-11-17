# liri-bot

# About 

-liri bot helps you find information on your favorite bands, songs, and movies!
-Now, instead of going to muiltiple sites you can find it all in one helpful location.

-To Use: 
    -In terminal, navigate to the liri-bot directory.
    -Then type in the command node liri-bot.
    -followed by the command you want to run.
    Commands:
    -"concert-this" -which finds the next concert for your band.
        -This command needs to be followed with you favorite band's name.
    -"spotify-this-song" -to find out all about your favorite song.
        -This command needs to be followed up with the name of your
        favorite song.
    -"movie-this" -to find out about your favorei movie.
        -This command needs to be followed up with the name of your
        favorite movie.
    -"do-what-it-says" -to have the program run a command for you!

# technology:

-This program is written in Node.js.
    -which allows the user to interact with Javasrcipt on the back-end.
-This program also uses four npm packages.
    -Node-Spotify-API which is used to access the spotify api to find the song details
    -Axios which is used to make get requests for information to the omdb api and the bands in town api
    -moment which is used to convert the time for the concert command
    -dotenv which is used to access the hidden api keys for spotify.

# the code:

-First, I required all the npm packages and file system to access a log to keep track of the commands that are run.
-Then I set the argument vectors to variables.
-I set a variable to log all the commands run for the program, which is called at the end of the program.
-Finally, I have a large switch statement which takes in the command and executes the code the gather the information from the api that is requested.

# video: 

https://drive.google.com/file/d/1Pq1idIACsZgDsVVuEDYUV7RM_RKODUKA/view
