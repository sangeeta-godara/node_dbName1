const menu =require("../module/menu")

const createMenu=async(req,res)=>{
    try {
       const data=req.body;
       const newMenu=  await new menu(data)
       const response=newMenu.save();
       console.log('menu data saved');
       
        res.status(200).json(response)

    } catch (error) {
        res.status(500).json({error:'internal server error'})
    }
};
module.exports={
createMenu,
}