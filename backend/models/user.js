const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required:true,
        trim : true
    },
    email:{
        type : String,
        required:true,
        trim : true,
        validate:{
            validator :(value)=>{
               const re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               return value.match(re);
            },
            message: "Please enter a valid email address"
        }
    },
    password:{
        required:true,
        type:String
    }
});
const User = mongoose.model('User',userSchema);

module.exports = User;