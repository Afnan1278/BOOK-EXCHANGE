const router = require('express').Router();
const verify = require('./token_verification');

router.get('/',verify, (req,res) =>{
    res.send(req.user);

});
module.exports = router;