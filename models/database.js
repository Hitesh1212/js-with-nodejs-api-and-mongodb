const mongoose = require('mongoose');
// var Binary = mongoose.Binary;

const DataSchema = mongoose.Schema({
   full_name:{
        type: String,
        require: true   
    },
    phone:{
        type: Number,
        require : true
    },
    email:{
        type: String,
        require : true
    },
    designation:{
        type: String
    },
    company:{
        type: String
    },
    query: {
        type: String
    }
    


});


 const Data = module.exports = mongoose.model('Data', DataSchema);
 
