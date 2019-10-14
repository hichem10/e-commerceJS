function affichepanier() {
  let tabPanier = JSON.parse(localStorage.getItem('tabPanier')) || []
  var listProd = JSON.parse(localStorage.getItem('liste-produits'))
  var connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
  var tabuser = JSON.parse(localStorage.getItem('tabuser'))
  let html = ``
  for (let i = 0; i < tabPanier.length; i++) {
    for (let j = 0; j < listProd.length; j++) {
      if (tabPanier[i].idProduit == listProd[j].id) {
        tabPanier[i]['nomProduit'] = listProd[j].name


      }
    }
    console.log(tabuser);
    
    for (let j = 0; j < tabuser.length; j++) {
      if (tabPanier[i].idUser == tabuser[j].id) {

          tabPanier[i]['nomClient'] = tabuser[j].nom

          
      }
    }

    html += `
        <tr>
          <td>${tabPanier[i].id}</td>
          <td>${tabPanier[i]['nomClient']}</td>
          <td>${tabPanier[i]['nomProduit']}</td>
          <td>${tabPanier[i].qt}</td>
          <td>${tabPanier[i].status == null ? 'En attente' : tabPanier[i].status}</td>
          <td>
            <div class="pull-left">
              <button onclick="validerCommande(${tabPanier[i].id})">
                <i class="btn btn-success btn-xs fa fa-check"></i>
              </button>
              <button onclick="refuserCommande(${tabPanier[i].id})">
                <i class="far fa-times-circle"
                    style= "padding: 1px 5px; font-size: 12px;
                    line-height: 1.5; border-radius: 3px;
                    color: #fff; background-color: #d9534f;
                    border-color: #d43f3a"; ></i>   
              </button>
            </div>
          </td>
        </tr>`
  }
  document.getElementById('commande').innerHTML = html;

}

function validerCommande(commandeId) {

  let tabPanier = JSON.parse(localStorage.getItem('tabPanier'));

  for (var i = 0; i < tabPanier.length; i++) {
    if (tabPanier[i].id == commandeId) {
      tabPanier[i].status = 'Validé';
    }
  }

  localStorage.setItem('tabPanier', JSON.stringify(tabPanier));
  affichepanier();
}

function refuserCommande(commandeId) {

  let tabPanier = JSON.parse(localStorage.getItem('tabPanier'));

  for (var i = 0; i < tabPanier.length; i++) {
    if (tabPanier[i].id == commandeId) {
      tabPanier[i].status = 'Refusé';
    }
  }

  localStorage.setItem('tabPanier', JSON.stringify(tabPanier));
  affichepanier();
}
