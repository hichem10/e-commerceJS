function initialisationProfil() {
    afficherProfils();
}

function afficherProfils() {
    var profils = JSON.parse(localStorage.getItem('tabuser'));

    if (profils == null) {
        profils = [];
    }

    var html = "";
    for (var i = 0; i < profils.length; i++) {
        html += `<tr>
             <td>${profils[i].id}</td>
             <td>${profils[i].nom}</td>
             <td>${profils[i].email}</td>
         </tr>`

    }

    document.getElementById('profils-table-body').innerHTML = html
}