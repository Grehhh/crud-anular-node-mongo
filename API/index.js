const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;
const apiRoutes = require("./api-routes");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub',{useNewUrlParser: true});
const db = mongoose.connection;

if(!db) {
    console.log('Error connecting DB');
} else {
    console.log('DBconnete succesfully');
}

app.use('/api', apiRoutes);
app.get('/', (req,res) => res.send('Hello World with Express and Nodemon'));

app.listen(port, function() {
    console.log("Running RestHub on port " + port);
})