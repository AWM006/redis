const express = require("express")
const Redis = require("ioredis")

const app = express()
app.use(express.json())

const redis = new Redis("redis://localhost:6379")









//insertion
app.post("/:id/insert" , async (req, res)=>{

    const userId = req.params.id;

    const reply = await redis.hset(userId , req.body) //set any json body in request body you want then send, redis store without any problem

    res.json({"insert sucess" : reply})
    
})






//viewing data
app.post("/:id/view" , async (req, res)=>{

    const userId = req.params.id;

    const reply = await redis.hgetall(userId) //hgetaall return entire json if you want a single value then use hget(<key_name>, <element_name>)

    res.json(reply)

})





//checking element exist or not in json body
app.post("/:id/:element/exist" , async (req, res)=>{
    
    const userId = req.params.id;
    const searchElement = req.params.element

    const reply = await redis.hexists(userId , searchElement) //hexists take key name and element name to search if you want you can search multiple element just set their name one by one in paramenter with comma(,) to see that the key exist or not then use "redis.exists(<key_name>)"
    
    res.json(reply)
})






//delete an element from json body
app.post("/:id/:element/delete" , async (req, res)=>{
    
    const userId = req.params.id;
    const elementToDelete = req.params.element

    const reply = await redis.hdel(userId , elementToDelete) //same like hexists here you can also delete multiple element just set there name in parameter and for delete full key use "redis.del(<key_name>)"

    res.json({ deletedCount: reply });
})














app.listen(5000)