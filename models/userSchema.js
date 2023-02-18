const mongoose= require('mongoose');
const bcrypt= require('bcrypt')
const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
     email:{
        type: 'string',
        required: true
    },
     phone:{
        type: 'Number',
        required: true
    },
     work:{
        type: 'string',
        required: true
    },
     password:{
        type: 'string',
        required: true
    },
     cpassword:{
        type: 'string',
        required: true
    },
});

//Hashing password

userSchema.pre('save', async function(next) {
     if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
        console.log('Password Hasing done');
    }
    next();
});
//collection creation
const register_test = mongoose.model('REGISTER_test',userSchema);
//exporting the page 
module.exports = register_test;