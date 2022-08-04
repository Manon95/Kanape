//Creation des liens et ajout des id des canapes//

function cardProduct (kanap){
  const lienProduit = document.createElement("a");
  lienProduit.href = "./product.html?id=" + kanap._id;
  return lienProduit
}

//Creation des articles//

function addArticle () {
  const article = document.createElement("article");
  return article
}

//Creation des img//

function addImg (imgUrl, altTxt) {
  const img = document.createElement("img");
  img.src = value.imgUrl;
  img.alt = value.altTxt;
  return img
}

//Lien vers API//

fetch(" http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  //creer le contenu HTML//
  .then(function (value) {
    console.log(value);
    for (let product = 0; product < value.length; product++) {    
      const parents = document.getElementById("items");
      const lienProduit = cardProduct(value[product]);
      parents.appendChild(lienProduit);
      const article = addArticle(value[product]);
      lienProduit.appendChild(article);
      const img = addImg(value[product]);
      article.appendChild(img); 
      let nomProduit = document.createElement("h3");
      nomProduit.className += "productName";
      article.appendChild(nomProduit);
      let descriptionProduit = document.createElement("p");
      descriptionProduit.className += "productDescription";
      descriptionProduit.textContent =
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      article.appendChild(descriptionProduit);
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

