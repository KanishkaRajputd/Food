import navbar from "./components/nav.js";


let res=document.querySelector("#nav")
res.innerHTML=navbar();
const city="Dhampur"

var map=document.querySelector("#gmap_canvas");

map.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

document.querySelector("#con").append(image);

  