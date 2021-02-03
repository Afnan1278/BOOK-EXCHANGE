var mongose=require("mongoose");
var user=require("../models/User");
var Location=new mongoose.schema({
   
    UserID:{
        type:String,
        require:true
    },

    City:{
        type:String,
        require:true
    },

    Street:{
        type:String,
        require:true
    },
   
});

const Location = mongoose.model('location',Location );
 module.exports = Location;