const greetingBox = document.querySelector(".js-greeting__innerBox");
const greetingFrom = greetingBox.querySelector("form");
const greetingInput = greetingFrom.querySelector("input");
const greetingText = greetingBox.querySelector(".greetingText");
const savedUser = document.querySelector(".savedUser");
const firstColumn = document.querySelector(".first__column");


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

function init(){
    loadUserName();
    greetingFrom.addEventListener("submit",handleGreeting);
}
init();