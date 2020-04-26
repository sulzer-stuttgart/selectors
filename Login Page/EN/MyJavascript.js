function loginFunction() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var title = document.getElementById("Title");

    title.innerHTML = "";

    if(email.value.length < 1 || password.value.lenght < 1){
        title.innerHTML = "Please enter email and password!";
        return;
    }

    if((email.value === "mustafa@sulzer.de") && (password.value === "Password1!")){
        title.innerHTML = "Login successful: Mustafa Masetic!";
    }else{
        title.innerHTML = "Invalid email or password!";
    }
  }