const button = document.getElementById("add__todo");

button.addEventListener("click", tache);

function tache() {
  const input = document.getElementById("todo__list");

  const inputvalue = input.value;

  // POur afficher les valeurs en bas de l'input il faut d'abord :

  /*
  JE SELECTIONNE MA LIST
  */
  const list = document.getElementById("list__todo");

  /* 
  UNE FOIS LA LISTE SELECTIONNER J'UTILISER document.createElement POUR CRÉER UN NOUVEL ÉLÉMENT, 
  DANS NOTRE CAS ON CRÉE UNE BALISE LI DANS LA CONSTANT crea.
  */

  const crea = document.createElement("li");

  /*
  À PARTIR DE MAINTENANT, QUAND JE CLICK SUR LE BOUTON Ajouter, JE CRÉER DES BALISES LI VIDE 
  GRACE À LA CONSTANTE crea MAIS CELLE CI RESTE VIDE.

  LA CONSTANTE ajout SERT À AFFICHER LES LI DANS LE UL GRACE À appendChild().
  */
  const ajout = list.appendChild(crea);

  /*
  POUR AFFICHER LA VALUEUR DE L'INPUT DANS LES LI IL SUFFIT D'UTILISER append('valeur');
*/
  ajout.append(inputvalue);
}
