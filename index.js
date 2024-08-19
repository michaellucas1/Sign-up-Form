const password = document.querySelectorAll('input[type="password"');
const message =document.querySelectorAll(".error-messages > span");
password.forEach((currentValue)=>{
    currentValue.addEventListener("keyup",(event)=>{
       checkLength(currentValue.value);
       checkUpperCase(currentValue.value);
       checkForNumberLetters(currentValue.value);
       checkSpecialCharacter(currentValue.value);
       checkPasswordMatch();
    });
});
const checkPasswordMatch=()=>{
    if(password[1].value!==password[0].value){   
        password[0].setCustomValidity(" "); 
        password[1].setCustomValidity(" "); 
        password[0].classList="invalid";
        password[1].classList="invalid";
        retrieveSpan("matching").style.visibility="visible";
    }
    else if(password[1].value===password[0].value &&password[1].value !=="" &&password[0].value !==""){
        password[0].setCustomValidity(""); 
        password[1].setCustomValidity(""); 
        password[0].classList.remove("invalid");
        password[1].classList.remove("invalid");
        retrieveSpan("matching").style.visibility="hidden";
    }
}
const checkSpecialCharacter=(currentValue)=>{
    if(/[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(currentValue)){
        retrieveSpan("specialChar").style.visibility="hidden";
    }
    else{
        retrieveSpan("specialChar").style.visibility="visible";
    }
}
const checkForNumberLetters=(currentValue)=>{
    if((/[a-z]/.test(currentValue)) && (/[0-9]/.test(currentValue))){
        retrieveSpan("numberLetters").style.visibility="hidden";
    }
    else{
        retrieveSpan("numberLetters").style.visibility="visible";
    }
}
const checkUpperCase=(currentValue)=>{
    if(/[A-Z]/.test(currentValue)){
        retrieveSpan("upperCase").style.visibility="hidden";
        return true;
    }
    else{
        retrieveSpan("upperCase").style.visibility="visible";
        return false;
    }
}
const checkLength=(currentValue)=>{
    if(currentValue.length>=8){
        retrieveSpan("minLength").style.visibility="hidden";
    }
    else{
        retrieveSpan("minLength").style.visibility="visible";
    }
}
const retrieveSpan=(idName)=>{
    for(let i=0;i<message.length;i++){
        if(idName===message[i].id){
            return message[i];
        }
    }
}
