const express = require('express');

let router = express.Router();

let Data = require('../models/database')

router.get('/showData', function(req, res, next){
    Data.find(function(err, datas){
        res.json(datas);
    });
});

router.post('/addData', function(req, res, next){
    let newData = new Data({
        full_name: req.body.full_name,
        phone: req.body.phone,
        email: req.body.email,
        designation: req.body.designation,
        company: req.body.company,
        query: req.body.query,
       // file: req.body.file
    });
 
    newData.save(function(err, contact){
        if(err)
        {
            res.json({msg: 'faild to add data'});
        }
        else{
            res.json({msg: 'data added succesfully'});;
        }
    });
 });
module.exports = router;