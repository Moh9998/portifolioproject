const form = document.getElementById('contact-form');
const email= document.getElementById("gettouch");
const id = document.getElementById("email");
const EMAIL_CASE_CHECK = "Please Enter Email Address In Lower Case";
const span = document.createElement("span");
email.insertAdjacentElement('beforebegin', span);

form.addEventListener("submit",function(event){
    let email_add=(id.value);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email_add.match(validRegex) && (email_add == email_add.toLowerCase()))
    {
        alert("correct format and in lowercase");
    }
    else {
       /*  alert("not in correct format"); */
        event.preventDefault();
        span.innerHTML = EMAIL_CASE_CHECK;
        span.style.display = "block";
        span.style.color="red";
        /* form.appendChild(span); */
        
    }
})
