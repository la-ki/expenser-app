const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const color = require('colors');
const morgan = require('morgan');

dotenv.config({path: './config/config.env'});

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5001;


app.listen(PORT, console.log(`
    Server running in ${process.env.NODE_ENV} mode on port ${PORT}
`.yellow.bold));