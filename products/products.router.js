const productController=require("./products.controller")
const router= require("express").Router();


router.get("/:id",productController.getProductByID)
router.get("/",productController.getAllProducts)
router.delete("/:id",productController.deleteById)
router.patch("/",()=>{console.log("Update is in progress");})

module.exports=router
