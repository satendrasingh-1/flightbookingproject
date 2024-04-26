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
    await mongoose.connect("mongodb+srv://satendraprataps56:Windos123@cluster0.cig8esf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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
