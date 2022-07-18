"use strict"; //force un mode plus cadré (moins permissif) de JS

/**********************
 *  Liste de repas
 *********************/
let meals = [
  "Fondue bourguignone",
  "Courgettes farcies",
  "Couscous",
  "Falafels",
  "Poké bowl",
  "Buddha bowl",
  "Pizza",
  "Beurek",
  "Keuftés",
  "Pâtes roquefort",
];

/**********************
 *  Fonctions
 *********************/

/**
 * Boucle sur le tableau de repas afin d'afficher dans un h3 le nombre de repas contenu puis de lister les différents plats dans une liste.
 */
function displayMeals() {
  const DIV = document.querySelector("#meals");
  DIV.innerHTML = `<h3>Il y a ${meals.length} plats au menu :</h3>`;
  let ul = "<ul>";
  for (let meal of meals) {
    ul += `<li>${meal}</li>`;
  }
  ul += "</ul>";
  DIV.insertAdjacentHTML("beforeend", ul);
}

/**
 * Récupère ce que l'utilisateur a saisi et l'ajoute au tableau si le plat n'est pas déjà présent.
 *
 */
function addMeal() {
  //récupère la valeur saisie par l'utilisateur
  let meal = document.querySelector("input[type=text]").value;

  //Si l'utilisateur a bien saisi quelque chose, on fait la gestion de l'ajout, sinon on affiche un message indiquant qu'il n'a rien saisi
  if (meal.trim().length > 0) {
    //la fonction .some() retourne true si la valeur est déjà dans le tableau
    let already = meals.some(
      (ligne) => ligne.toLowerCase() == meal.toLowerCase()
    );

    if (already) {
      //si le plat est déjà dans le tableau, on met un message le précisan
      alert(meal + " est déjà au menu ❌");
    } else {
      // sinon, on ajoute le plat au tableau et on rafraichi l'affichage tout en indiquant que le plat est bien ajouté
      meals.push(meal);
      displayMeals();
      alert(meal + " a bien été ajouté au menu");
    }
  } else {
    alert("Vous n'avez rien saisi 😱");
  }

  //réinitialisation du formulaire
  document.querySelector("form").reset();
}

/**********************
 *  Code principal
 *********************/
document.addEventListener("DOMContentLoaded", function () {
  displayMeals(); //on affiche les plats présents dans le tableau dès le chargement de la page

  //gestionnaire d'événement au clic sur le bouton Ajouter
  document
    .querySelector("input[type='button'")
    .addEventListener("click", addMeal);
});
