here using TTL we gonna store a value for a specific time

here we use OTP send project


first start redis server as tell




we set a ttl value using this syntax

<redis_object_name>.set( <key_name>, <key_value>, "EX", <ttl_in_second> )







---------------------------------------------------------------------------------------------------------------------------------
app.post("/otp" , async (req, res))

in this endpoint send a post request with a json body {"phone" : 99999}     (the 99999 is user phone number)
you will get a response with egenrated otp




----------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/ttl/:phone" , async (req, res))

in this endpoint send a post request like that http://localhost:5000/ttl/99999      (the 99999 should be user phone number)
you will get aa response where how many second remain you can see



------------------------------------------------------------------------------------------------------------------------
app.post("/verify" , async (req, res))

in this endpoint send a post request with a json body 
{
    "phone" : 99999,
    "otp" : 731369
}
(99999 should be user phone nuumber and otp which you got previously)
here you can verify the otp but remember verify in 60 second
