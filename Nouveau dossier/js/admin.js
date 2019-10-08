function ajouterProduit() {

    var produitAmodifier = localStorage.getItem('modifier-produis');

    var image = document.getElementById("img");

    if(image.files.length > 0) {

        var reader = new FileReader();
        var binary, base64;
        
        reader.addEventListener('loadend', function () {
            binary = reader.result; // binary data (stored as string), unsafe for most actions
            base64 = btoa(binary); // base64 data, safer but takes up more memory
    
            var img = "data:" + image.files[0].type + ";base64, " + base64;

            // ajouter un nouveau produit
            if(produitAmodifier == "") {
                addProduct(img);
            } else {
                // update un produit existant
                updateProduct(img);
            }
        
        }, false);
    
        reader.readAsBinaryString(image.files[0]);
    } else {

        // ajouter un nouveau produit
        if(produitAmodifier == "") {
            addProduct("");
        } else {
            // update un produit existant
            updateProduct("");
        }
    }
}

function addProduct(image) {
    var produits = JSON.parse(localStorage.getItem('liste-produits'));
    if (produits == null) {
        produits = []
    }
    
    var produit = {
        id: Math.round(Math.random() * 1000),
        name: document.getElementById("name-produit").value,
        description: document.getElementById("description").value,
        prix: document.getElementById("prix").value,
        image: image,
        hidden: false
    }
    
    produits.push(produit);
    localStorage.setItem("liste-produits", JSON.stringify(produits));
    location.href = './Todo_list (2).html';
}

function updateProduct(image) {

    var produitAmodifier = JSON.parse(localStorage.getItem('modifier-produis'));

    var produits = JSON.parse(localStorage.getItem('liste-produits'));
    for (i = 0; i < produits.length; i++) {
        if(produits[i].id == produitAmodifier.id) {
            produits[i].name = document.getElementById("name-produit").value;
            produits[i].description = document.getElementById("description").value;
            produits[i].prix = document.getElementById("prix").value;
            produits[i].image = image;
            produits[i].hidden = false;
        }
    }

    localStorage.setItem('liste-produits', JSON.stringify(produits));
    localStorage.setItem('modifier-produis', "");
    location.href = './Todo_list (2).html';
}

function initialisation() {
    modifierProduit();
}

function modifierProduit() {

    var produitAModifier = JSON.parse(localStorage.getItem('modifier-produis'));

    if(produitAModifier != null) {
        console.log("produit = ", produitAModifier);
        document.getElementById("name-produit").value = produitAModifier.name;
        document.getElementById("description").value = produitAModifier.description;
        document.getElementById("prix").value = produitAModifier.prix;
    }
}