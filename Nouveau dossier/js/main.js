// function verif() {
//     var ch = document.getElementById("name").Value;

//     for (i = 0; i < length.ch; i++) {
//         if (ch[i] = '')
//             console.log("error")
//         console.log("name")

//     }
// }


// function validation() {
//     var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

//     if (expressionReguliere.test(document.getElementById("Email").value)) {
//         document.getElementById("Email").style.color = 'green';
//     }
//     else {

//         document.getElementById("Email").style.color = 'red';
//     }
//     return false;
// }

// function valider_numero() {
//     var nombre = document.getElementById("nbre").value;
//     var chiffres = new String(nombre);

//     // Enlever tous les charactères sauf les chiffres
//     chiffres = chiffres.replace(/[^0-9]/g, '');

//     // Le champs est vide
//     if (nombre == "") {
//         alert("Le champs est vide !");
//         return;
//     }


//     // Nombre de chiffres
//     compteur = chiffres.length;

//     if (compteur != 8) {
//         alert("Assurez-vous de rentrer un numéro à 8 chiffres (xx-xxx-xxx)");
//         return;
//     }

//     else {
//         alert("Le numéro me semble bon !");
//     }
// }



// function verifedate() {
//     var td = new Date();
//     console.log(td.toLocaleDateString("en-US"));
//     console.log(td.getFullYear());
//     var date = document.getElementById("date_de_naissance").value;
//     var mydate = new Date(date);
//     var an = mydate.getFullYear();
//     console.log(an);
//     var age = td.getFullYear() - an;
//     console.log('age');
//     if (age < 18) {
//         console.log('error');

//     }

// }
// function validatemdp() {


//     var psw = document.getElementById("mdp").value;
//     if (psw == ' ') {
//         console.log("error");

//     }
//     if (psw.lengh < 8) {
//         alert("invalid");
//     }
//     return;

// }



// function Validate() {
//     var password = document.getElementById("mdp").value;
//     var confirmPassword = document.getElementById("cmdp").value;
//     if (password != confirmPassword) {
//         console.log("You first Passwords is not similar with 2nd password. Please enter same password in both");
//         return false;
//     }

//     return true;
// }

// function register() {
//     var stringlocale = localStorage.getItem('tabuser');
//     var tabuser = JSON.parse(stringlocale);
//     if (tabuser == null) {
//         tabuser = []
//     }


//     var a = document.getElementById("name").value;
//     var b = document.getElementById("email").value;
//     var c = document.getElementById("nbre").value;
//     var d = document.getElementById("date").value;
//     var e = document.getElementById("mdp").value;
//     var f = document.getElementById("cmdp").value;
  
  

//     var nameisValid = validateName();
//     if (nameisValid == false) {
//         alert('nom est invalid');
       
//     }


//     var emailisvalid = verifedate();
//     if (emailisvalid == false) {

//         alert('email est invalid');
      
//     }

//     for(i=0; i<tabuser.length;i++) {
//         console.log(tabuser.username==a);
//         console.log(a);
//         console.log(tabuser[i].username);

//         if(tabuser[i].username==a){
//             alert('username existant');
//             return;
//         }

//     }
        
//         var obj = {
//             id: Math.floor(Math.random() * 1000) + 1,
//             username: a,
//             email: b,
//             nbre: c,
//             date: d,
//             mdp: e
//         }


//     tabuser.push(obj)
//     var str = JSON.stringify(tabuser);
//     localStorage.setItem('tabuser', str);
//     console.log(str);
   

//     location.replace("./login.html");
// }

// function validateName() {
//     var name = document.getElementById("name").value;

//     if (name == '')
//         return false;

//     return true;
// }

// function validateemail() {
//     var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

//     if (expressionReguliere.test(document.getElementById("email").value)) {
//         document.getElementById("email").style.color = 'green';
//         return true;
//     }
//     else {

//         document.getElementById("email").style.color = 'red';
//     }
//     return false;
// }

// function valider_numero() {
//     var nombre = document.getElementById("nbre").value;
//     var chiffres = new String(nombre);

//     // Enlever tous les charactères sauf les chiffres
//     chiffres = chiffres.replace(/[^0-9]/g, '');

//     // Le champs est vide
//     if (nombre == "") {
//         alert("Le champs est vide !");
//         return;
//     }


//     // Nombre de chiffres
//     compteur = chiffres.length;

//     if (compteur != 8) {
//         alert("Assurez-vous de rentrer un numéro à 8 chiffres (xx-xxx-xxx)");
//         return;
//     }

//     else {
//         alert("Le numéro me semble bon !");
//     }
// }


// function verifedate() {

//     var today = new Date();
//     console.log(today.toLocaleDateString("en-US"));

//     console.log(today.getFullYear());

//     var date = document.getElementById("date").value;
//     console.log(date)
//     var mydate = new Date(date);

//     var annee = mydate.getFullYear();
//     console.log(annee);
//     var x = today.getFullYear() - annee;
//     console.log(x);

//     if (x < 18) {
//         alert("invalid")
//         return;
//     }
// }


// function validatemdp() {


//     var psw = document.getElementById("mdp").value;
//     if (psw == ' ') {
//         alert("error");

//     }
//     if (psw.lengh < 8) {
//         alert("invalid");
//     }
//     return;

// }

// function Validatepsw() {
//     var password = document.getElementById("mdp").value;
//     var confirmPassword = document.getElementById("cmdp").value;
//     if (password != confirmPassword) {
//         alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
//         return false;
//     }

//     return true;
// }



// function sigin() {


    

//         var stringlocal = localStorage.getItem("tabuser");
//         var tab = JSON.parse(stringlocal);
//         if (tab == null) {
//             tab = []
//         }
//         var user = document.getElementById("user").value;
//         var psw = document.getElementById("psw").value;
    
//         console.log('fds');
    
//         for (i = 0; i < tab.length; i++) {
//             console.log(tab[i].username == user, tab[i].psw == psw);
    
//             if (tab[i].username == user && tab[i].mdp == psw) {
//                 console.log("ok");
//                 localStorage.setItem('connectedUser',JSON.stringify(tab[i]))
//                 location.href = "../register/contactform.html";
//             }
//             else {
//                 console.log("error")
//             }
    
    
//         }
//     }
//     // var stringlocal = JSON.parse(localStorage.getItem("tabuser"));
//     // console.log(stringlocal);
//     // // var tab = JSON.parse(stringlocal);
//     // if (stringlocal == null) {
//     //     stringlocal = []

//     // }

//     // var user = document.getElementById("user").value;
//     // var psw = document.getElementById("psw").value;

// //     stringlocal.forEach(element => {
// //         if ((element.id== user) &&(element.mdp==psw)) {
// //             console.log('ok')
// //             userunique=element.id;
// //             localStorage.setItem('connecteduser',JSON.stringify(userunique));
// //         }
    
// // });


//     // for (i = 0; i < stringlocal.length; i++) {
//         // var userunique = stringlocal.id;
//         // console.log(stringlocal[i].id)
//         // if(stringlocal[i].id= userunique ) {
           
//         //     localStorage.setItem('connecteduser',JSON.stringify(userunique));
//         //     // localStorage.setItem('userunique',JSON.stringify(tab[i]))
     
       
       
       
       
       
//         // console.log(tab[i].username == user, tab[i].psw == psw);

//         // if (tab[i].username == user && tab[i].mdp == psw) {
//         //     console.log("ok");
//         //     localStorage.setItem('connectedUser',JSON.stringify(tab[i]))
//         //     location.href = "../register/contactform.html";
//         // }
//         // else {
//         //     console.log("error")
//         // }
    




// //dashboard
// function addd() {
//     var taches = JSON.parse(localStorage.getItem('taches'));
//     if (taches == null) {
//         taches = []
//     }

//     var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
//     var tache = {
//         id: connectedUser.id,
//         name: document.getElementById("contact-name").value,
//         date: document.getElementById("contact-date").value
//     }


//     taches.push(tache)
//     localStorage.setItem("taches", JSON.stringify(taches))

//     location.href = '../register/todo_list.html'


// }



// // function add() {
// //     document.getElementById("edit").style.display = 'none';


// // }
// // function display() {

// //     document.getElementById("edit").style.display = 'none';
// // }



// function calculateDate(date, name) {
//     var countDownDate = new Date(date).getTime();

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     if (distance < 0) {
//         document.getElementById("demo-" + name).value = "Expirée";
//     } else {

//         // Time calculations for days, hours, minutes and seconds
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
//         // Output the result in an element with id="demo"
//         document.getElementById("demo-" + name).value = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
//     }
// }
// /* 
// // Set the date we're counting down to
// var countDownDate = new Date("Sep 17, 2019 16:13:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
//   afficheTache()
// }, 1000); */




















// function afficheTache() {

//     var taches = JSON.parse(localStorage.getItem('taches'))

//     if (tache = "") {
//         tache = []
//     }

//     var connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
//     for (i = 0; i < taches.length; i++) {
//      if ( taches[i].id == connectedUser.id ) {

        
//         tache += `<li class="list-primary">
//      <i class=" fa fa-ellipsis-v"></i>
//                  <div class="task-checkbox">
//      <input type="checkbox" class="list-child" value="" onclick="" />
//        </div>
//      <div class="task-title ">

//        <span class="task-title-sp"> ${taches[i].name} </span>

//      <span class="badge bg-theme"> ${taches[i].date} </span>
//      <input type="text" id="demo-${taches[i].name}" ></input>
//       <div class="pull-right hidden-phone">
//        <button class="btn btn-success btn-xs fa fa-check"></button>
//        <button class="btn btn-primary btn-xs fa fa-pencil" onclick="Edit(${i})"></button>
//         <button class="btn btn-danger btn-xs fa fa-trash-o" onclick="deleteTask(${i})"
//          <i class="fas fa-trash-alt"></i>
//           </button>
//          </div>
//         </div>
//          </li>`
//     }
//     }

//     document.getElementById('tache').innerHTML = tache;

//     for (i = 0; i < taches.length; i++) {
//         if ( taches[i].id == connectedUser.id ) {
//             calculateDate(taches[i].date, taches[i].name);
//         }
//     }
// }
// function deleteTask(index) {
//     var taches = JSON.parse(localStorage.getItem('taches'))
//     if (taches == null) {
//         taches = []
//     }
//     taches.splice(index, 1)
//     localStorage.setItem('taches', JSON.stringify(taches))
//     afficheTache()
// }


// function Edit(index) {
//     var taches = JSON.parse(localStorage.getItem('taches'))


//     if (taches == null) {
//         taches = []


//     }
//     document.getElementById('edit').style.display = 'block';
//     const tache = taches[index]
//     document.getElementById('nameEdit').value = tache.name
//     document.getElementById('dateEdit').value = tache.date
//     document.getElementById('index').value = index
// }

// function SEdit() {
//     var taches = JSON.parse(localStorage.getItem('taches'))
//     if (taches == null) {
//         taches = []
//     }
//     var name = document.getElementById('nameEdit').value
//     var date = document.getElementById('dateEdit').value
//     var index = document.getElementById('index').value

//     const tache = {
//         id: taches[index].id,
//         name: name,
//         date: date
//     }
//     taches.splice(index, 1, tache)
//     localStorage.setItem('taches', JSON.stringify(taches))
//     afficheTache()
// }
