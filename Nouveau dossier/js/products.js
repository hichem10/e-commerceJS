function ajouterProduit() {
    // en mode creation produit: modifier-produis = ""
    localStorage.setItem('modifier-produis', "");
    location.href = "./index.html";
}

function afficherListeProduits() {
    var intilisation = localStorage.getItem('produits-initialise');
    if(intilisation != "true") {
        initProducts();
    }

    listProduit();
}

function listProduit() {

//    var produits = document.getElementById('liste-produits');

    var produits = JSON.parse(localStorage.getItem('liste-produits'));

    if (produits == "") {
        produits = []
    }

    var listeProduits = "";
    for (i = 0; i < produits.length; i++) {
        if (produits[i].hidden == false) {

            listeProduits += `<li>
                        <div class="task-checkbox">
                            <input type="checkbox" class="list-child" value="" />
                        </div>
                        <div class="task-title" id="veste">
                            <span class="task-title-sp">
                                <img title="${produits[i].description}" src="${produits[i].image}" width="100px" height="130px" />
                            </span>

                            <span class="badge bg-theme"></span>
                            <div class="pull-right hidden-phone">
                                <button class="btn btn-primary btn-xs" onclick="editProduct(${produits[i].id})">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn btn-danger btn-xs" onclick="deleteProduct(${produits[i].id})">
                                    <i class="fa fa-trash-o"></i>
                                </button>
                            </div>
                        </div>
                    </li>`

        }
    }

    document.getElementById('liste-produits').innerHTML = listeProduits;
}

function initProducts() {
    var produits = [];

    produits.push({
        id: 1,
        name: "POLO",
        description: "POLO TENNIS HOMME DRY 100 BLANC",
        image: "../img/POLO+TENNIS+HOMME+DRY+100+BLANC.jpg",
        prix: 15.990,
        hidden: false
    });

    produits.push({
        id: 2,
        name: "Maillot",
        description: "Maillot football replique Barcelone third adulte",
        image: "../img/Maillot+football+r+plique+Barcelone+third+adulte.jpg",
        prix: 27.050,
        hidden: false
    });

    produits.push({
        id: 3,
        name: "Tee shirt",
        description: "Tee+shirt+Athl+tisme+Homme+club+personnalisable+bleu",
        image: "../img/Tee+shirt+Athl+tisme+Homme+club+personnalisable+bleu (1).jpg",
        prix: 5.900,
        hidden: false
    });

    produits.push({
        id: 4,
        name: "Pantalon",
        description: "Pantalon 900 regular zip Gym Stretching noir homme",
        image: "../img/Pantalon+900+regular+zip+Gym+Stretching+noir+homme.jpg",
        prix: 12.300,
        hidden: false
    });

    produits.push({
        id: 5,
        name: "Pantalon survêtement",
        description: "Pantalon survêtement fitness cardio homme noir FPA100",
        image: "../img/Pantalon+surv+tement+fitness+cardio+homme+noir+FPA100.jpg",
        prix: 45.000,
        hidden: false
    });

    produits.push({
        id: 6,
        name: "Polaire",
        description: "Polaire de randonnée montagne homme MH100 Gris Chiné",
        image: "../img/Polaire+de+randonn+e+montagne+homme+MH100+Gris+Chin.jpg",
        prix: 114.900,
        hidden: false
    });

    localStorage.setItem('produits-initialise', "true");
    localStorage.setItem('liste-produits', JSON.stringify(produits));
}

function editProduct(productId) {

    var produits = JSON.parse(localStorage.getItem('liste-produits'));

    for (i = 0; i < produits.length; i++) {
        if(produits[i].id == productId) {
            // En mode edit produit: modifier-produis = produit selectionné
            localStorage.setItem('modifier-produis', JSON.stringify(produits[i]));
            location.href = "./index.html";
        }
    }
}

function deleteProduct(productId) {
    var produits = JSON.parse(localStorage.getItem('liste-produits'));
    for (i = 0; i < produits.length; i++) {
        if(produits[i].id == productId) {
            produits[i].hidden = true;
        }
    }

    localStorage.setItem('liste-produits', JSON.stringify(produits));
    listProduit();
}