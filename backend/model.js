const mongoose=require('mongoose');
const schema=mongoose.Schema
const loginschema= new schema(
{
FirstName:{type:String},
LastName:{type:String},
Emailid:{type:String},
Password:{type:String},


}
)
module.exports=mongoose.model('loginschema',loginschema);   