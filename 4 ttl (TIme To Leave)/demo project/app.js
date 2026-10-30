const express = require("express")
const Redis = require("ioredis")

const app = express()
app.use(express.json())
const redis = new Redis("redis://localhost:6379")






//generate and send send otp
app.post("/otp" , async (req, res)=>{


    const otp = Math.floor(100000 + Math.random() * 900000); //generate a otp 
    
    const phone = req.body.phone; //fetch a phone number from request body
    
    /*
    in real application send the otp there to user
    */

    const reply = await redis.set(phone, otp, "EX", 60); //otp valid for 30 second 
    
    res.json({reply : reply , otp : otp})
})







//verify otp
app.post("/verify" , async (req, res)=>{


    const phone = req.body.phone
    const otp = req.body.otp.toString()   //need to convert into string to verify
    

    const reply = await redis.get(phone) // return data along to the key which is phone number
    console.log(otp)
    console.log(reply)






    if(!reply){
        return res.json({"message":"otp expired or error occured"})
    }
    else if(reply !== otp){
        return res.json({"message" : "invalid otp"})
    }
    else{
      await redis.del(phone)
      res.json({"messsage":"otp verified"})
    }

})




//check how much time still remain to expire
app.post("/ttl/:phone" , async (req, res)=>{


    const phone = req.params.phone //get phone number from parameter
    
    const reply = await redis.ttl(phone) //send ttl time remain to before expire (use before verify otherwise if verified the data delete)
    
    res.json(reply)
})






app.listen(5000)