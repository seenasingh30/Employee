const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api", require("./api"));
// Connect to mongodb
mongoose.connect(process.env.mongoose, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb');
}).on('error', (err) => {
    console.log('Error in mongodb connection: ' + err);
}).on('disconnected', () => {
    console.log('Disconnected from mongodb');
});

app.listen(process.env.port, () => {
    console.log(`Server started on port ${process.env.port}`);
});
