function loginFunction() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var title = document.getElementById("Title");

    title.innerHTML = "";

    if(email.value.length < 1 || password.value.lenght < 1){
        title.innerHTML = "Bitte E-Mail Adresse und Passwort eingeben!";
        return;
    }

    if((email.value === "mustafa@sulzer.de") && (password.value === "Password1!")){
        title.innerHTML = "Login erfolgreich: Mustafa Masetic!";
    }else{
        title.innerHTML = "Falsche E-mail Adresse oder Passwort!";
    }
  }