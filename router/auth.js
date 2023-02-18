const express= require('express');
const router = express.Router();



const register_test = require('../models/userSchema');
const register= require('./login');
const login= require('./register');
router.get('/', (req, res) => {
    res.send("live it is auth.js");
});


/*   USING PROMISES
router.post('/register', (req, res) => {
 // to get data from user
    const{name,email,phone,work,password,cpassword}=req.body;
    //validation i.e every data is inputed 
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({errors: "fill the data properly"});
    }
    //test_register.findOne({email stored at database:email while registering checking})
    register_test.findOne({email:email})
     .then((userexist) => {
        if(userexist)
        {
            return res.status(422).json({errors: "email already exist"});
        }
        const register = new register_test({name,email,phone,work,password,cpassword});
        // new user registeration
        
         register.save().then(()=> {
            res.status(201).json({message: "user registered"});

     } ).catch((err) => res.status(500).json({message: "Failed to register"}));
   }).catch(err => {console.log(err)});

});
*/ 
/*-------------------------------REGISTER-------------------------------------- */
router.post('/register', async(req, res) => 
    {
          // to get data from user
         const{name,email,phone,work,password,cpassword}=req.body;
         //validation i.e every data is inputed 
         if(!name || !email || !phone || !work || !password || !cpassword)
         {
           return res.status(422).json({errors: "fill the data properly"});
         }

          try {
         //test_register.findOne({email stored at database:email while registering checking})
          const userexist= await register_test.findOne({email:email});
          if(userexist)
          {
             return res.status(422).json({errors: "email already exist"});
          }
          //storing new data
          const register = new register_test({name,email,phone,work,password,cpassword});
          //data hashing for safety protocol for password and cpassword before saving
          
          await register.save()
          res.status(201).json({message: "user registered"});
         } 
         catch(err){
         console.log(err);
         }
    
    }
);

/*-------------------------------LOGIN-------------------------------------- */
router.post('/login', async(req, res) => 
    {
          
         try
         {
             // to get data from user
             const{email,password}=req.body;
             //validation i.e every data is inputed 
             if( !email || !password )
             {
              return res.status(422).json({errors: "fill the data properly"});
             } 

             const userlogin= await register_test.findOne({email:email});
             if(!userlogin){
                return res.status(422).json({errors: "email doesn't exist"});
             }
             console.log(userlogin.email);
             return res.json({message: "Login successfull"});
         } catch(err){
             console.info(err);
            }
    }
)       

module.exports = router; 