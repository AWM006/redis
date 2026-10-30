const express = require("express");
const Redis = require("ioredis");



const app = express();
app.use(express.json()); //a express middleware helps to send response in json format



const redis = new Redis("redis://localhost:6379");



const MY_BANNER_KEY = "my_website_banner";




//insert value along key
app.post("/bannerTest" , async (req, res)=>{


    let response = await redis.set(MY_BANNER_KEY , req.body.MyMessage); //it insert a data along to key in redis whenever post request came with a body MyMessage (we use the key to access the data)
    
    res.json({response})
})



//fetch data from server 
app.get("/bannerTest", async (req, res)=>{
    
    const message = await redis.get(MY_BANNER_KEY); //it sendd the data along the key from redis
    
    res.json({message})
})



//checking data exist or not
app.get("/existBanner", async (req, res)=>{

    const message = await redis.exists(MY_BANNER_KEY); //it checks the data exist in database or not

    res.json({message})
})



//delete data using the key
app.delete("/bannerTest", async (req, res)=>{
    
    const message = redis.del(MY_BANNER_KEY); //it delete the data which has the key value

    res.json({message})
})





app.listen(5000, ()=>{
    console.log("app started on http://localhost:5000")
})