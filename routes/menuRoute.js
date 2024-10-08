const express=require('express')
const {createMenu,}=require('../controller/menuController')
const router=express.Router();
 
router.post('/createMenu',createMenu);

module.exports = router;
