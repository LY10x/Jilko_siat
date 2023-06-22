function validate()
{
var username =document.getElementById("username1").value;
var password =document.getElementById("password1").value;

if(username == "admin"&& password == "1234")
{
    window.open("hp.html", "_blank");
} else{
    alert("Enter an exicting user");
}
}