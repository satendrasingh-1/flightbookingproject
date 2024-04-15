const express=require("express");
const app=express();
const path=require("path");
const collection=require("./mongo/login.js")
const details=require("./mongo/details.js")
const info=require("./mongo/data.js")


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"photos")));
app.use(express.json());

app.use(express.urlencoded({extended:false}))

let c1=" ";

/* Root */
app.get("/",(req,res)=>{
    res.render("login",{c:c1});
})




/* Login page */
app.get("/login",(req,res)=>{

    res.render("login",{c:c1});
})


/* sign up page */
app.get("/signup",(req,res)=>{
    res.render("signup");
})

/* change password page */
app.get("/changepassword",(req,res)=>{
    res.render("changepassword")
})


/* checking data is correct or not page */
app.post("/login",async (req,res)=>{
    const n=req.body.email;
    try{
        
        const check=await collection.findOne({email:n})
        if(check.password===req.body.password){
            res.sendFile(__dirname+"/public/home.html");
        }
        else{
            c1="wrong password";
            res.render("login",{c:c1});
        }
    }catch(err){
        c1="Please signup"
        res.render("login",{c:c1});
    }
})

app.post("/signup",async (req,res)=>{
    const data={
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password
    }
    await collection.insertMany(data);
    res.sendFile(__dirname+"/public/home.html");
})

app.post("/changepassword",async (req,res)=>{
    c1="";
    const e=req.body.email;
    try{
        let check=await collection.findOneAndUpdate({email:e},{password:req.body.newpass})
        res.render("login",{c:c1});
    }catch(err){
        res.send("Email not found")
    }
})

app.get("/book",async (req,res)=>{
    let detail= await details.find();
    res.render("book",{d:detail});
})

app.post("/help", async (req,res)=>{
    let data1={
        fname:req.body.fname,
        lname:req.body.lname,
        contact:req.body.contact,
        email:req.body.email,
        comment:req.body.comment,
    }
    await info.insertMany(data1);
    res.sendFile(__dirname+"/public/help.html");
})
app.post("/support", async (req,res)=>{
    let data1={
        fname:req.body.fname,
        lname:req.body.lname,
        contact:req.body.contact,
        email:req.body.email,
        comment:req.body.comment,
    }
    await info.insertMany(data1);
    res.sendFile(__dirname+"/public/SpiritAirline.html");
})

app.post("/page",async (req,res)=>{
    let f=req.body.from;
    console.log(f);
    try{
        let detail= await details.find({from:f});
        if(detail.length!=0){
            res.render("book",{d:detail});
        }
        else{
            res.sendFile(__dirname+"/public/pagenotfound.html");
        }
        
    }catch(err){
        res.sendFile(__dirname+"/public/pagenotfound.html");
    }
})
app.listen(3000);