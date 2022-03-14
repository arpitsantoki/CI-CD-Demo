var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist/demo')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/demo/index.html'));
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
})