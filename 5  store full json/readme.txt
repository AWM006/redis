previously we can only a full single string value in an key using set 
if we want to store a json value we need to convert it to string then store it



now we gonna store a entire json value in this project without any convertion



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/:id/insert" , async (req, res)=>{})

in this endpoint we send a post request to our local server http://localhost:5000/12345/insert     (where 12345 is an id you can set any id you want)
there before request create any json body with it and send example:-
{
    "phone" : 7001510642,
    "otp" : 731369,
    "dfddf" : "Sddfsds",
    "fssefg" : "addaawwa"
}
the entire body will store you can make large or small values also







--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/:id/view" , async (req, res)=>{})

in this field you can see your just store value just send a post request in http://localhost:5000/12345/view     (where 12345 is an id you can set any id you want)







-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/:id/:element/exist" , async (req, res)=>{})

in this field you can see any specific element exist or not in your key's value send a post request http://localhost:5000/12345/phone/exist     (where 12345 is an id and "phone" is the element we want to search, you can set any id and element you want)









------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/:id/:element/delete" , async (req, res)=>{})

in this field you can delete an element from your json send a post request http://localhost:5000/12345/phone/delete     (where 12345 is an id and "phone" is the element we want to delete, you can set any id and element you want)