var mongose=require("mongoose");

var book=new mongoose.schema({
    

    categoryID:{
        type:int
    },
    
    Quantity:{
        
        type:Int,

    },
 
    Name:{
        type:String,
        require:true,
    },

    Author:{
        type:String,
    },


   



});


var post=new mongoose.schema({
    
  
  
    UserID:{
        type:String,
    },
         
    type:{
        type:String,
    },

    bookId:{
       type:String,
       require:true,
   },

   Description:{
       type:String,
   },

   
   Image:{
       type:Image,
   },





  
    price:{
        type:String,
        require:true,
    },

    postType:{
          type:String,
          require:true
    },

    
});



var offer=new mongoose.schema({
    
  
  
    UserID:{
        type:String,
    },
         
    type:{
        type:String,
    },

    postId:{
       type:String,
       require:true,
   },

   offerId:{
       type:String,
       require:true,
   },

   


  
    bid:{
        type:String,
    },


    
});




var offer=new mongoose.schema({

categoryid:{
    type:int,
    require:true
},



name:{
    type:String,
    require:true,
},

});











const post = mongoose.model('post', post);
module.exports = post;

const book= mongoose.model('book',book);
module.exports=book;

const offer= mongoose.model('offer',offer);
module.exports=offer;
