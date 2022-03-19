

async function getitem(url){
try{
let res=await fetch(url);
let data=await res.json();
data=data.meals;
console.log(data);
return data;

}catch (err){
    console.log(err);
}

}
var arr=[];
function appenddata(data,parent){


data.map(function (ele){

let div1=document.createElement("div")



let image=document.createElement("img")
image.setAttribute("src",ele.strMealThumb);
image.style.height="60%";
image.style.width="100%";

let name=document.createElement("p");
name.textContent=ele.strMeal;
 
let price=document.createElement("p");
price.textContent= "INR  " +Math.floor(Math.random()*300)

  
var button =document.createElement("button");
button.textContent="Read More";
button.style.height="30px";
button.style.width="120px";
button.style.background="coral";
button.style.marginTop="10px";

button.onclick=myfun;



div1.append(image,name,price,button);
parent.append(div1);

         
function myfun(){
  arr.push(ele);
   localStorage.setItem("item",JSON.stringify(arr));
   window.location.href="detail.html";
  }



})

}
export {getitem,appenddata};
 //strMealThumb
   //strMeal




