const express = require("express")
const Redis = require("ioredis")    //package for redis

const app = express()

const redis = new Redis("redis://localhost:6379") //create a redis object and stablish connection port alrady define at docker starting

app.get("/redis" , async (req, res)=>{

    const reply = await redis.ping() //ping to our redis server
    
    res.send(`got reply from redis ->${reply}`)

})


app.listen(5000)
