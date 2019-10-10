

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
    return
}

function validerpsw() {
    var psw = document.getElementById("password").value;
    var cpsw = document.getElementById("pass").value;

    if (psw !== cpsw) {
        alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
        return false;
    }

    return true;
}

function register() {
    var stringlocale = localStorage.getItem('tabuser');
    var tabuser = JSON.parse(stringlocale) || [];


    // var nameisValid = verif()
    // if (nameisValid = false)
    //     alert("name is invalid")


    // if (tabuser == null) {
    //     tabuser = []
    // }




    // var emailisValid = validation();
    // if (emailisValid == false) {
    //     alert("email est invalid");
    // }

    // var pswisValid = validerpsw()
    // if (pswisValid == false) {
    //     alert("psw est invalid");
    var a = document.getElementById("nom").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;

    var obj = {
        id: Math.round(Math.random() * 1000 + 1),
        nom: a,
        email: b,
        password: c,
    }
    tabuser.push(obj)
    var str = JSON.stringify(tabuser);
    localStorage.setItem('tabuser', str);
    location.href='login.html'
    console.log(str);
    // }

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
     

        if (tab[i].email == user && tab[i].password == psw) {
            console.log("ok");
            localStorage.setItem('connectedUser', JSON.stringify(tab[i]))
            location.href = "../register/index.html";

        }
        else {
            console.log("error")
        }



    }
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
} 


function AffichProd() {
    let prod = JSON.parse(localStorage.getItem('liste-produits')) || []
    let html = ``
    for (let i = 0; i < prod.length; i++) {
        html += `<div class="col-lg-3 col-md-3 col-sm-6">
        <div class="f_p_item">
            <div class="f_p_img">
                <img class="img-fluid" src="${prod[i].image}" alt="">
                <div class="p_icon">
                    <a href="#">
                        <i onclick='addPanier(${prod[i].id})' class="fa fa-cart-arrow-down"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-heart-o"></i>
                    </a>
                </div>
            </div>
            <a href="#">
                <h4>${prod[i].name}</h4>
            </a>
            <h5>${prod[i].prix}dt</h5>
        </div>
    </div>`

    }

    document.getElementById('Proc').innerHTML = html;
    

}





function addPanier(idProduit) {
    let tabPanier = JSON.parse(localStorage.getItem('tabPanier')) || []


    var connectedUser = JSON.parse(localStorage.getItem('connectedUser'))

    var panier = {
        id: Math.round(Math.random() * 1000 + 1),
        idUser: connectedUser.id,
        idProduit: idProduit,
        qt : 1    
    }

    tabPanier.push(panier)

    localStorage.setItem('tabPanier',JSON.stringify(tabPanier))
    


}



















