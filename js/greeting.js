const greetingBox = document.querySelector(".js-greeting__innerBox");
const greetingFrom = greetingBox.querySelector("form");
const greetingInput = greetingFrom.querySelector("input");
const greetingText = greetingBox.querySelector(".greetingText");
const savedUser = document.querySelector(".savedUser");
const saveUserShadow = document.querySelector(".savedUserShadow");

function loadUserName(){
    const loadedUser = localStorage.getItem("User");
    if( loadedUser !== null ){
        savedUser.innerText = `Hello. \n ${loadedUser}`;
        savedUser.classList.remove("none");
        saveUserShadow.classList.remove("none");
    }else{
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
}

function init(){
    loadUserName();
    greetingFrom.addEventListener("submit",handleGreeting);
}
init();