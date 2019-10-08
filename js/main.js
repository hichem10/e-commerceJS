

function verif() {

    var ch = document.getElementById("nom").value

    for (var i = 0; i < name.length; i++);
    if (ch[i] = '') {
        console.log("error");
        console.log("nom");
    }
}

function validation() {
    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (expressionReguliere.test(document.getElementById("email").value)) {
        document.getElementById("email").style.color = 'green';
        return true;
    }
    else {

        document.getElementById("email").style.color = 'red';
        return false;
    }
    
}



function verifpassword() {
    var psw = document.getElementById("password").value;
    if (psw.length < 8) {
    
        alert("invalid");
    
    }
    return;
}

function validerpsw() {
    var psw = document.getElementById("password").value;
    var cpsw = document.getElementById("pass").value;

    if (psw != cpsw) {

        alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
        return false;
    }

    return true;
}

function register() {
    var stringlocale = localStorage.getItem('tabuser');
    var tabuser = JSON.parse(stringlocale);
    var a = document.getElementById("nom").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    var d = document.getElementById("pass").value;
    var nameisValid = verif();
    if (nameisValid == false) {
        alert("nom est invalid");
    }

    var emailisValid = validation();
    if (emailisValid == false) {
        alert("email est invalid");
    }

    var pswisValid = validerpsw()
    if (pswisValid == false) {
        alert("psw est invalid");
    }
    if (tabuser == null || tabuser.length == 0) {
        tabuser = []
        var obj = {

            username: a,
            email: b,
            password: c,
        }
        tabuser.push(obj)
        console.log(tabuser);
        var str = JSON.stringify(tabuser);
        localStorage.setItem('tabuser', str);
        console.log(str);
        location.replace("../register/login.html");
    } else {
        let verif = false;
    
        for(i=0; i<tabuser.length;i++) {
            console.log(a);
            console.log(tabuser[i].username);
            if(tabuser[i].username==a){
                verif = true;
            }
        }
    if(verif == true) {
        alert('username existant');
    } else {
    var obj = {
    
        username: a,
        email: b,
        password: c,
    }
    tabuser.push(obj)
    console.log(tabuser);
    var str = JSON.stringify(tabuser);
    localStorage.setItem('tabuser', str);
    console.log(str);
    location.replace("../register/login.html");
    }
}




}

function sigin() {


    

    var stringlocal = localStorage.getItem("tabuser");
    var tab = JSON.parse(stringlocal);
    if (tab == null) {
        tab = []
    }
    var user = document.getElementById("user").value;
    var psw = document.getElementById("psw").value;

    console.log('fds');

    for (i = 0; i < tab.length; i++) {
        console.log(tab[i].username == user, tab[i].psw == psw);

        if (tab[i].username == user && tab[i].mdp == psw) {
            console.log("ok");
            localStorage.setItem('connectedUser',JSON.stringify(tab[i]))
            location.href = "../register.index.html";
        }
        else {
            console.log("error")
        }


    }
}















































