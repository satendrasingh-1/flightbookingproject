let oneway=document.querySelector("#one");
let date=document.querySelector(".d")
let returndate=document.querySelector("#returndate")

$(document).ready(function(){
    $("#one").click(function(){
        $("#returndate").hide();
        date.style.width="225px";
        date.style.marginRight="0px";
    })
    $("#round").click(function(){
        $("#returndate").show();
        date.style.width="100px";
        date.style.marginRight="20px";
    })
})

