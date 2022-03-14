var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist/Demo')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/Demo/index.html'))
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
})