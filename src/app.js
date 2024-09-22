const button = document.getElementById("add__todo");

button.addEventListener("click", tache);

function tache() {
  const input = document.getElementById("todo__list");

  const inputvalue = input.value;
  if (inputvalue.trim().length === 0) {
    return;
  }
  /*
  Sélectionne la liste UL (élément avec l'ID "list__todo") où les nouvelles tâches seront affichées.
  Cette liste contiendra les éléments <li> qui représentent les tâches.
  */
  const list = document.getElementById("list__todo");

  /*
  Crée un nouvel élément de liste <li>.
  Chaque nouvelle tâche sera ajoutée comme un élément <li> dans cette liste.
  */
  const creali = document.createElement("li");

  /*
  Crée une case à cocher (input de type "checkbox") pour chaque nouvelle tâche.
  Cette case permettra de marquer les tâches comme complétées.
  */
  const creacheckbox = document.createElement("input");
  creacheckbox.type = "checkbox"; // Définit le type comme étant une case à cocher
  creacheckbox.className = "checkbox"; // Ajoute une classe CSS "checkbox" pour styliser la case à cocher

  /*
  Crée un bouton supprimer pour chaque nouvelle tâche.
  Cette case permettra de supprimer les taches complétées.
  */
  const creasupp = document.createElement("button");
  creasupp.textContent = "Supprimer";
  creasupp.className = "supp";

  /*
  Ajoute la case à cocher à l'intérieur du nouvel élément <li>.
  Cela permet d'avoir la case à cocher visible à côté de chaque tâche.
  */
  creali.appendChild(creacheckbox);

  /*
  Ajoute le texte de la tâche (valeur de l'input) dans l'élément <li>.
  Cela affiche la tâche saisie par l'utilisateur à côté de la case à cocher.
  */
  creali.append(inputvalue);
  creali.append(creasupp);

  /*
  Ajoute l'élément <li> (avec la case à cocher et la tâche) à la liste UL.
  Cela permet d'afficher la tâche complète dans la liste sous l'input.
  */
  list.appendChild(creali);

  input.value = "";

  creasupp.addEventListener("click", supprimer);

  function supprimer() {
    creali.remove();
  }

  creacheckbox.addEventListener("change", barre);

  function barre() {
    if (creacheckbox.checked) {
      // creali.style.textDecoration = "line-through;";
      creali.classList.add("barre");
    } else {
      creali.classList.remove("barre");
    }
  }

  console.log(creali);
}
