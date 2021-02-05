const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const routes = require('./routes');
const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}, console.log('Connected to database'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);


app.listen(Number(process.env.PORT) || 3333, '0.0.0.0', () => {
    console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`);
  });