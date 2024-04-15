const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("Hare Krishna Hare Krishna");
    console.log("Krishna Krishna Hare Hare");
    console.log("Hare Rama Hare Rama");
    console.log("Rama Rama Hare Hare");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ticketbooking');
}


const loginSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  contact:{
    type: Number,
    require: true
  },
  password:{
    type: String,
    require: true
  },
});

const signup=new mongoose.model("Signup",loginSchema);

module.exports=signup;
