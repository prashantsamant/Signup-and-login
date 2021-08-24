const express=require('express');
const app=new express();
const mongodb=require('./mongoconnect')
const appmodel=require('./model')
const bodyParser = require('body-parser')
// CORS requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept,Authorization,Cache-Control',
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  });
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
  app.get('/userlogins',(req,res)=>{
    appmodel.find({}, (err, result) => {
        return res.json(result);
      })
    
  })
  app.post('/saveuserdetails', (req, res) => {
    var inputuser = req.body;
    console.log(req.body)
    appmodel.create(inputuser, (err, result) => {
      return res.json(result);
    })
  })
  
  app.post('/userSignin',async(req,res)=>{
      try{
          const email=req.body.Emailid;
          const paasw=req.body.Password;
          const userDetails= await appmodel.findOne({Emailid:email})
          if(paasw === userDetails.Password)
            res.send("Email and password matched.");
          else
            res.send("Wrong password.");
        //   const lpassw=await Register.findOne({Password:passw})
        //   res.send(lpassw)

      }
      catch(error){
          res.send("invalid email")

      }
   
  
})
app.listen(3006, () => {
    console.log("appication is running", mongodb);
  })