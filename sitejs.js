var myForm = document.forms.myForm;
var message = document.getElementById("message");



myForm.onsubmit = function() {

if (myForm.name.value == "") {
message.innerHTML = "Please enter a name";
return false;

} else { 
console.log(document.getElementById('name').value);
message.innerHTML = "";
return true;
}


};
    
//Focus on the name field
//Capture user name
//Log user name to console

