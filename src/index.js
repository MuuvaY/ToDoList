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
  creacheckbox.type = "checkbox";
  creacheckbox.className = "checkbox";

  /*
  Crée un bouton "Supprimer" pour chaque nouvelle tâche.
  Ce bouton permettra de supprimer les tâches complétées.
  */
  const creasupp = document.createElement("button");
  creasupp.textContent = "Supprimer";
  creasupp.className = "supp";

  // Crée un élément <span> pour afficher le texte de la tâche
  const creaspan = document.createElement("span");
  creaspan.textContent = inputvalue;

  /*
  Ajoute la case à cocher et le texte de la tâche à l'intérieur du nouvel élément <li>.
  Cela permet d'avoir la case à cocher visible à côté de chaque tâche.
  */
  creali.appendChild(creacheckbox); // Ajoute la case à cocher
  creali.appendChild(creaspan); // Ajoute le span contenant le texte
  creali.appendChild(creasupp); // Ajoute le bouton de suppression

  /*
  Ajoute l'élément <li> (avec la case à cocher, le texte et le bouton) à la liste UL.
  Cela permet d'afficher la tâche complète dans la liste sous l'input.
  */
  list.appendChild(creali);

  // Réinitialise l'input pour permettre l'ajout d'une nouvelle tâche
  input.value = "";

  // Ajoute un écouteur d'événement au bouton de suppression
  creasupp.addEventListener("click", supprimer);

  // Fonction pour supprimer l'élément <li> lorsque le bouton de suppression est cliqué
  function supprimer() {
    creali.remove();
  }

  // Ajoute un écouteur d'événement à la case à cocher
  creacheckbox.addEventListener("change", barre);

  // Fonction pour gérer le style de la tâche en fonction de l'état de la case à cocher
  function barre() {
    if (creacheckbox.checked) {
      // Si la case est cochée, on ajoute une classe pour barrer le texte
      creaspan.classList.add("barre");
    } else {
      // Si la case n'est pas cochée, on retire la classe de barré
      creaspan.classList.remove("barre");
    }
  }
}
