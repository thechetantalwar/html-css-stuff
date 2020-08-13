function validateForm(){
    var name = document.user.firstname.value;
    var email = document.user.email.value;

    if(name == ""){
        alert("Name Field Requrired");
        //document.getElementById("nameError").innerHTML = "Name Field Requrired";

    }
    else if(email == ""){
        alert("Email Field Requrired")
        //document.getElementById("emailError").innerHTML = "Email Field Requrired";
    }
    else{
        alert("Name is "+name+ " and email is "+ email);
        console.log();
        console.log("All went well");
    }
}
function onclick()
{
    var name = document.user.name.value;
    var email = document.user.email.value;
    console.log("Name is "+name+ " and email is "+ email);
}