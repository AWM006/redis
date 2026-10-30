in this tutorial we use CURD opration means add, view, delete datas in redis

in this project
we notice websites set banner llike some event anouncment etc
now if we store it to database the data should be fetch too many time cause we show the banner to everyone there redis comes



start the redis server and view the demo project



project explanation

- redis usually store data using key we can aceess the data with the key

- use POSTMAN or something like that for send request


- in app.post("/bannerTest" , async (req, res))

in this endpoint if you do a post request with a json body {"MyMessage" : "<your_message>"}
then the data store in this rredis server which can access throw the key's name which is "my_website_banner"



- app.get("/bannerTest", async (req, res))

in this endpoint if we use a get request then we got  the data which is tored with the key




- app.delete("/bannerTest", async (req, res))

in this endpoint if we send delete requesst then the data deleted which we insert using the key





- app.get("/existBanner", async (req, res))

in this endpoint if we send a get request then we can see the the data exist or not along the key respose 0 means not exist and 1 means exist










now if you understand this so you request key name and value both also while calling for use usermanagement also means like this

{
    "keyname" : "my_user_sessionID"
    "data" : "my_user_data"
}

then insert into redis and use your operation