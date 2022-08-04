require('dotenv').config();
const express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('chanchito feliz');
});

app.get('/coffee', (req, res) => res.send('So sorry', 418));

app.listen(process.env.PORT, () => console.log('El servidor esta levantado en ,', process.env.PORT));