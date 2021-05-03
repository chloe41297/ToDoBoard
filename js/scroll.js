const nav1 = document.querySelector(".nav__dot1");
const nav2 = document.querySelector(".nav__dot2");
const nav3 = document.querySelector(".nav__dot3");
const nav4 = document.querySelector(".nav__dot4");
const nav5 = document.querySelector(".nav__dot5");
const SCROLL = document.querySelector(".scroll");
let windowSize = window.innerWidth;

function handleNav1(){
    window.scrollTo(0,0);
}
function handleNav2(){
    window.scrollTo(windowSize,0);
}
function handleNav3(){
    window.scrollTo(2*windowSize,0);
}
function handleNav4(){
    window.scrollTo(3*windowSize,0);
}
function handleNav5(){
    window.scrollTo(4*windowSize,0);
}



function init(){
   nav1.addEventListener("click",handleNav1);
   nav2.addEventListener("click",handleNav2);
   nav3.addEventListener("click",handleNav3);
   nav4.addEventListener("click",handleNav4);
   nav5.addEventListener("click",handleNav5);
  
}
init();