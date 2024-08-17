const password = document.querySelectorAll('input[type="password"');
const message =document.querySelectorAll(".form-column > span");
password.forEach((currentValue)=>{
    currentValue.addEventListener("keyup",(event)=>{
        const numberOfNode=currentValue.parentElement.childNodes.length;
        
        if(password[1].value!==password[0].value){       
            password[0].classList="invalid";
            password[1].classList="invalid";
            message[0].style.visibility="visible";
            message[1].style.visibility="visible";
        }
        else if(password[1].value===password[0].value &&password[1].value !=="" &&password[0].value !==""){
            password[0].classList="valid";
            password[1].classList="valid";
            message[0].style.visibility="hidden";
            message[1].style.visibility="hidden";
        }
    });
});
