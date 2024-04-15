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



const userSchema=new mongoose.Schema({
    img:String,
    flightname:String,
    from: String,
    to: String,
    start: String,
    end: String,
    totaltime: String,
    flightno: Number
  });
  
  
  const flightdetail= new mongoose.model("Flightdetail",userSchema);
  
  let data=[
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno:679 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2339 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 1960 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2339 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 1960 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2650 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 1960 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2487 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 679 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 684 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 679 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2650 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 1960 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 684 },
  { img:"aa.png", flightname:"American Airline", from: "LAX", to: "LAS", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 679 },
  { img:"aa.png", flightname:"American Airline", from: "LAS", to: "LAX", start: "10pm", end: "12pm", totaltime:"02h 10m", flightno: 2487 },
  ];
  
  // flightdetail.insertMany(data);
  
  module.exports=flightdetail;
  

  