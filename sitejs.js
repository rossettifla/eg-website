var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    
if (myForm.name.value == ""){
message.innerHTML = "Please enter name";
return false;

} else{ 
if (myForm.email.value == "" || myForm.email.value.indexOf('@')== -1 || myForm.email.value.indexOf('.')==-1){
message.innerHTML = "Please enter valid email";
return false;
}

alert("Thank you "+myForm.name.value+" for your message");
return true;
}}
