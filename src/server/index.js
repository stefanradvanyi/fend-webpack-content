var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const adjustedPath = '/Users/sradvanyi/Documents/Webentwicklung/Udacity/Frontend/fend-webpack-content/src/client/views';

const app = express()

app.use(express.static('../client'))

console.log('DirName2: ', __dirname + '/../client/views/index.html')

app.get('/', function (req, res) {
    res.sendFile(adjustedPath + '/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
