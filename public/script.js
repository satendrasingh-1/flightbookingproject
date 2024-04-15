let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
function change(){
    box1.style.backgroundImage='url("london2.jpg")';
    box2.style.backgroundImage='url("manila2.webp")';
    box3.style.backgroundImage='url("hawaii2.jpg")';
    box4.style.backgroundImage='url("las-vegas2.jpg")';
}
function change1(){
    box1.style.backgroundImage='url("london3.jpg")';
    box2.style.backgroundImage='url("manila3.jpg")';
    box3.style.backgroundImage='url("hawaii3.jpeg")';
    box4.style.backgroundImage='url("las-vegas3.jpg")';
}
function change2(){
    box1.style.backgroundImage='url("london1.webp")';
    box2.style.backgroundImage='url("manila1.webp")';
    box3.style.backgroundImage='url("hawaii1.webp")';
    box4.style.backgroundImage='url("las-vegas1.webp")';
}
setInterval(change,2000);
setInterval(change2,4000);
setInterval(change1,6000);


let oneway=document.querySelector("#one");
let date=document.querySelector(".d")
let returndate=document.querySelector("#returndate")

$(document).ready(function(){
    $("#one").click(function(){
        $("#returndate").hide();
        date.style.width="428px";
    })
    $("#round").click(function(){
        $("#returndate").show();
        date.style.width="200px";
    })
})

