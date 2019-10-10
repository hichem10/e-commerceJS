function ajouterProduit() {
    localStorage.setItem('modifier-produis', "");
    location.href = "./index.html";
}

function afficherListeProduits() {


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

    document.getElementById('liste-produits').innerHTML = listeProduits;
}


function editProduct(productId) {

    var produits = JSON.parse(localStorage.getItem('liste-produits'));

    for (i = 0; i < produits.length; i++) {
        if(produits[i].id == productId) {
            localStorage.setItem('modifier-produis', JSON.stringify(produits[i]));
            location.href = "./index.html";
        }
    }
}

function deleteProduct(productId) {
    var produits = JSON.parse(localStorage.getItem('liste-produits'));
    for (i = 0; i < produits.length; i++) {
        if(produits[i].id == productId) {
            produits.splice(i,1)
            // produits[i].hidden = true;
        }
    }

    localStorage.setItem('liste-produits', JSON.stringify(produits));
    listProduit();
}