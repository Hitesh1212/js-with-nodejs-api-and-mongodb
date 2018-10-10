const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();
let route = require('./routing/route');

 mongoose.connect('mongodb://localhost:27017/formdata', {useNewUrlParser: true});
    mongoose.connection.on('connected', ()=>{
        console.log('connected to database mongodb @ 27017');
    });
    mongoose.connection.on('error', (err)=>{
        if(err) {
            console.log('error when connecting to database : '+err);
        }
    })

let path = require('path');
app.use(bodyParser.json());

//const routes = require('./api/routes');


let port = 3000;



app.use(express.static(path.join(__dirname, "public")));
app.use('/api', route);

app.listen(port, ()=>{
    console.log('server is running at'+ port);
})



