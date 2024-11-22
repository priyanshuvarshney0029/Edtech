const express=require('express')
const router = express.Router();


router.get('/edtech',(req,res)=>{
    res.render('index')
})

module.exports=router;