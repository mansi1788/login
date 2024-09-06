const p = document.getElementById("p");
const btn = document.getElementsByClassName('btn');
let c=1;
function tim() {
    
  p.innerHTML=`${c++}+1`;
 
  p.style.color = "red"; 
  p.style.fontSize = "60px";
}

//const time = setTimeout(tim,3000);
//const time = setInterval(tim,1);
const time = setImmediate(tim,3000);
