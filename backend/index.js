import express from "express"
import dotenv from "dotenv"

dotenv.config({})

const PORT=process.env.PORT || 8000
const app=express()

app.use(express.json())

app.get("/healthcheck",(req,res)=>{
    res.json({"status":"Server Running!"})
})

app.listen(PORT,()=>{console.log("Server Running on Port :",PORT)})