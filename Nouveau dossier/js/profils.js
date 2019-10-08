function initialisationProfil() {
    const profilsInitialise = localStorage.getItem('profils-initialise');
    if(profilsInitialise != "true") {
        initProfils();
    }

    afficherProfils();
}

function initProfils() {
    var profils = [];

    profils.push({
        id: Math.round(Math.random() * 1000),
        nom: "Admin",
        prenom: "Adminstrateur",
        email: "admin@boutique.com",
        status: "Connecté"
    });

    profils.push({
        id: Math.round(Math.random() * 1000),
        nom: "Client",
        prenom: "Client 1",
        email: "client1@boutique.com",
        status: "Non Connecté"
    });

    profils.push({
        id: Math.round(Math.random() * 1000),
        nom: "Client",
        prenom: "Client 2",
        email: "client2@boutique.com",
        status: "Non Connecté"
    });

    localStorage.setItem('profils-initialise', "true");
    localStorage.setItem('liste-profils', JSON.stringify(profils));
}

function afficherProfils() {
    var profils = JSON.parse(localStorage.getItem('liste-profils'));

    if (profils == null) {
        profils = [];
    }

    var html = "";
    for (var i = 0; i < profils.length; i++) {
        html += `<tr>
             <td>${profils[i].id}</td>
             <td>${profils[i].nom}</td>
             <td>${profils[i].prenom}</td>
             <td>${profils[i].email}</td>
             <td>${profils[i].status}</td>
         </tr>`

    }

    document.getElementById('profils-table-body').innerHTML = html
}