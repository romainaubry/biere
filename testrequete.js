$(document).ready(function(){

//Get - Liste des produits
  $.ajax({
    method : "GET", // Liste les produits
    url : "http://storeapi.skalv-studio.fr/app.php/products",
    data :{name : "tutu"},
    success : function(products) { //callback appelé en cas de succès, la liste des produits est passée en paramètres
    console.log(products)
    },
    error : function(err){ //callback appelé en cas d'erreur de la requête
    console.log(err);
    }
  })

//Post - Ajouter un produit
  var testValues = {
    "name": "Starwars",
    "award": "cesar",
    "category": "dvd",
    "logo": "http://toussticks.fr/159-thickbox_default/logo-star-wars.jpg",
    "productID": "123456"
  }

  $.ajax({
    method: "POST",
    url: "http://storeapi.skalv-studio.fr/app.php/products",
    data: JSON.stringify(testValues),
    contentType: "application/json",
    success: function(product) {
      console.log("new product : ", product);
    },
    error: function(err) {
      console.error(err);
    }

  })


})