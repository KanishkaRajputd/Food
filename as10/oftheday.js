import navbar from "./components/nav.js";
import { getitem,appenddata} from "./scripts/s.js";
var res=document.querySelector("#nav")
res.innerHTML=navbar();

let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${"Pancakes"}`;
    let r= await getitem(url);
    let parent=document.querySelector('#con')
    appenddata(r,parent);