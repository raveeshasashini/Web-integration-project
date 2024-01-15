require("dotenv").config()

const express =require("express")
const router = require("./src/routes/_index.routes")

const SERVER_PORT=process.env.SERVER_PORT || 5000


const app=express()

app.get("/test",(req,res)=>{
    res.json({msg:"Test ok!"})
})
app.use("/api/v1/",router)
app.listen(3000,()=>console.log("Server is running on port:"+SERVER_PORT))
