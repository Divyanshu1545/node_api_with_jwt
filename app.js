require('dotenv').config();
const express = require('express')
const app = express()
const userRouter=require("./users/user.router")
const productRouter=require("./products/products.router")
app.use(express.json()) 
app.use("/users",userRouter)
app.use("/products",productRouter)
app.listen(9000,()=>{
    console.log("Server is running");
    console.log(process.env.DB_PORT)
})
