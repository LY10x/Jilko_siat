function validate()
{
var username =document.getElementById("username").value;
var password =document.getElementById("password").value;

if(username == "admin"&& password == "1234")
{
    window.open("hp.html", "_blank");
} else{
    alert("Enter an exicting user");
}
}