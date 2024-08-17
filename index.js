const password = document.querySelectorAll('input[type="password"');
password.forEach((currentValue)=>{
    currentValue.addEventListener("keyup",(event)=>{
        const numberOfNode=currentValue.parentElement.childNodes.length;
        if(password[1].value!==password[0].value){       
            password[0].classList="invalid";
            password[1].classList="invalid";
            if(numberOfNode<=5){
                const message =document.createElement("span");
                message.textContent="* Passwords do not match";
                message.style.fontSize="12px";
                message.style.color="red";
                currentValue.parentElement.appendChild(message);
            }     
        }
        else if(password[1].value===password[0].value &&password[1].value !=="" &&password[0].value !==""){
            password[0].classList="valid";
            password[1].classList="valid";
            const passOneLength = password[0].parentElement.childNodes.length;
            const passTwoLength = password[1].parentElement.childNodes.length;
            if(passOneLength>=6){
                password[0].parentElement.removeChild(password[0].parentElement.lastElementChild);
            }
            if(passTwoLength>=6){
                password[1].parentElement.removeChild(password[1].parentElement.lastElementChild);
            }
        }
    });
});
