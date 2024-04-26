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
  await mongoose.connect('mongodb+srv://satendraprataps56:Windos123@cluster0.cig8esf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
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
