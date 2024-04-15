const mongoose=require("mongoose");

main().then(()=>{
    console.log("Hare Krishna Hare Krishna");
    console.log("Krishna Krishna Hare Hare");
    console.log("Hare Ram Hare Ram");
    console.log("Ram Ram Hare Hare");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ticketbooking")
}

const dataSchema=new mongoose.Schema({
    fname:{
        type: String,
        require: true
    },
    lname:{
        type: String,
        require: true
    },
    contact:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    comment:{
        type: String,
        require: true
    }
})

const help=new mongoose.model("Help",dataSchema);

module.exports=help;