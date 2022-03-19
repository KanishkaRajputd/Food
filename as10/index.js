const display=async()=>{
   try{
   let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${""}`)
   let data =await res.json();
   data=data.meals;
   displaydata(data);
   
   }catch(err){
      console.log(err);
   }
   
      }
     
      var arr=[];   
   const displaydata=(data1)=>{
      console.log(data1)
   document.querySelector("#con").innerHTML=" ";
   
   data1.map(function (ele){
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
         // button.style.marginLeft="20px";
         button.onclick=myfn;
         
         
         div1.append(image,name,price,button);
         document.querySelector("#con").append(div1);      
         
          
function myfn(){
   arr.push(ele);
    localStorage.setItem("item",JSON.stringify(arr));
    window.location.href="detail.html";
   }
 
  
      })
  
   }
   display();

//import {getitem,appenddata} from "./scripts/s.js";
function myfun(){

async function get(){
var s=document.querySelector('#search').value;

   try{
let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`);
let data=await res.json();
data=data.meals;

console.log(data);
appenddata(data);

   }catch(err){
      alert("Sorry");
      console.log(err);
   }
}
get();

}

function appenddata(data){
   document.querySelector("#con").innerHTML="";
   data.map ((ele)=>{
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
// button.style.marginLeft="20px";
button.onclick=myfn;

   div1.append(image,name,price,button);
   document.querySelector("#con").append(div1);
   
   
        
   function myfn(){
      arr.push(ele);
       localStorage.setItem("item",JSON.stringify(arr));
       window.location.href="detail.html";
      }
    

   })
   }


   