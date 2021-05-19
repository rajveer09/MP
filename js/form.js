function validation(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("email").value;
    var cpass = document.getElementById("mobile").value;
    var mnum = document.getElementById("address").value;
    var mnum = document.getElementById("messege").value;

    
    if(user == ""){
        document.getElementById("username").innerHTML = "Username is required";
        return false;
    }

    if(pass == ""){
        document.getElementById("youremail").innerHTML = "Email id is required";
        return false;
    }

    if(cpass == ""){
        document.getElementById("mnum").innerHTML = "Mobile number is required";
        return false;
    }

    if(mnum == ""){
        document.getElementById("paddr").innerHTML = "Permanent Address is required";
        return false;
    }

    if(email == ""){
        document.getElementById("mymessege").innerHTML = "Text messege is required";
        return false;
    }

    else{
        document.write("<h1>Congratulation! Your Registration is Successful.We will call back soon.</h1>")
    }
}