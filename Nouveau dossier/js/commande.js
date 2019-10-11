function affichepanier() {
    let tabPanier = JSON.parse(localStorage.getItem('tabPanier')) || []
    let html = ``
    for (let i = 0; i < tabPanier.length; i++) {
        html +=`
        <tr>
          <td>${tabPanier[i].id}</td>
          <td>${tabPanier[i].idUser}</td>
          <td>${tabPanier[i].idProduit}</td>
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

  for(var i = 0; i < tabPanier.length; i++) {
    if(tabPanier[i].id == commandeId) {
      tabPanier[i].status = 'Validé';
    }
  }

  localStorage.setItem('tabPanier', JSON.stringify(tabPanier));
  affichepanier();
}

function refuserCommande(commandeId) {

  let tabPanier = JSON.parse(localStorage.getItem('tabPanier'));

  for(var i = 0; i < tabPanier.length; i++) {
    if(tabPanier[i].id == commandeId) {
      tabPanier[i].status = 'Refusé';
    }
  }

  localStorage.setItem('tabPanier', JSON.stringify(tabPanier));
  affichepanier();
}