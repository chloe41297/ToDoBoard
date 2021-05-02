const greetingBox = document.querySelector(".js-greeting__innerBox");
const greetingFrom = greetingBox.querySelector("form");
const greetingInput = greetingFrom.querySelector("input");
const greetingText = greetingBox.querySelector(".greetingText");
const savedUser = document.querySelector(".savedUser");
const firstColumn = document.querySelector(".first__column");
const animationArea = document.querySelector(".whole__name");
const letter1 = document.querySelector("#first");
const letter2 = document.querySelector("#second");
const letter3 = document.querySelector("#third");
const letter4 = document.querySelector("#forth");
const letter5 = document.querySelector("#fifth");
const letter6 = document.querySelector("#sixth");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");
const dot6 = document.querySelector(".dot6");



function loadUserName(){
    const loadedUser = localStorage.getItem("User");
    if( loadedUser !== null ){
        savedUser.innerText = `${loadedUser}`;
        savedUser.classList.remove("none");
       
    }else{
        firstColumn.classList.add("none");
        greetingBox.classList.remove("none");
    }
    
}

function saveUserName(text){
    localStorage.setItem("User",text);
}

function handleGreeting(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    saveUserName(currentValue);
    loadUserName(currentValue);
    greetingBox.classList.add("none");
    firstColumn.classList.remove("none");
}
function handleAnimation(){
    letter1.style.color = "var(--main--blue)"
    dot1.style.animation = "dotMovement 1s ease-in-out forwards"
    setTimeout( colorE,1000 );
    setTimeout( colorL1,2000 );
    setTimeout( colorL2,3000 );
    setTimeout( colorO,4000 );
    setTimeout( colorDot,5000 );

}
function colorE(){
    letter2.style.color = "var(--main--red)",
    dot2.style.animation = "dotMovement 1s ease-in-out"
}
function colorL1(){
    letter3.style.color = "var(--main--yellow)",
    dot3.style.animation = "dotMovement 1s ease-in-out"
}
function colorL2(){
    letter4.style.color = "var(--main--green)",
    dot4.style.animation = "dotMovement 1s ease-in-out"
}
function colorO(){
    letter5.style.color = "var(--main--red)",
    dot5.style.animation = "dotMovement 1s ease-in-out"
}
function colorDot(){
    letter6.style.color = "var(--main--blue)",
    dot6.style.animation = "dotMovement 1s ease-in-out"
}
function init(){
    loadUserName();
    greetingFrom.addEventListener("submit",handleGreeting);
    animationArea.addEventListener("mouseenter",handleAnimation);
}
init();