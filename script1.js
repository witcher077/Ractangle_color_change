var rect=document.getElementById("container");

rect.style.color = "blue";
rect.addEventListener("mousemove",(details)=>{
    var ractangleLoc=rect.getBoundingClientRect();
    
    let mouseloc=Math.round(details.clientX-ractangleLoc.left);
    
   

//     function scale (number, inMin, inMax, outMin, outMax) {
//         return Math.round((number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
//     }

//    var colorDensity= scale(mouseloc,0, 250, 0, 255);
//    console.log(colorDensity)
   
var colVal=gsap.utils.mapRange(0,ractangleLoc.width/2,255,0,mouseloc)
console.log(colVal);

if(mouseloc<ractangleLoc.width/2){
    console.log("left");
    rect.style.backgroundColor = `rgb(${colVal},0,0)`;
}
else{
    console.log("right");
    rect.style.backgroundColor = `rgb(0,0,${-colVal})`;
}

})


rect.addEventListener("mouseleave",(details)=>{
    rect.style.backgroundColor = "white";
})