function showHxContent(pNumber) {
    // Cacher tous les divs avant d'afficher celui qui est demandé
    hideAllDivs();
    // Sélectionner le div correspondant au titre cliqué et le rendre visible
    document.getElementById("title" + pNumber).style.display = "block";
}
function hideAllDivs() {
    // Sélectionner tous les divs avec un id commençant par "title"
    var divs = document.querySelectorAll("div[id^='title']");
    // Masquer chaque div sélectionné
    divs.forEach(function(div) {
        div.style.display = "none";
    });
}
function alertTitle() {
    // Récupérer la valeur du champ de saisie
    var titleNumber = document.getElementById("title").value;
    // Sélectionner le titre correspondant
    var titleElement = document.querySelectorAll("h1")[titleNumber - 1];
    if (titleElement) {
        // Afficher le contenu du titre dans une alerte
        alert(titleElement.textContent);
    } else {
        alert("Titre non trouvé");
    }
}
function deleteTitle() {
    // Récupérer la valeur du champ de saisie
    var titleNumber = document.getElementById("title").value;
    // Sélectionner le titre correspondant
    var titleElement = document.querySelectorAll("h1")[titleNumber - 1];
    if (titleElement) {
        // Supprimer le contenu textuel du titre
        titleElement.textContent = "";
    } else {
        alert("Titre non trouvé");
    }
}
function defineTitle() {
    // Récupérer la valeur du champ de saisie
    var titleNumber = document.getElementById("title").value;
    // Sélectionner le titre correspondant
    var titleElement = document.querySelectorAll("h1")[titleNumber - 1];
    if (titleElement) {
        // Vérifier si le titre a déjà un contenu
        if (titleElement.textContent) {
            // Supprimer le contenu existant
            titleElement.textContent = "";
        }
        // Définir le nouveau contenu du titre
        titleElement.textContent = "Nouveau titre";
    } else {
        alert("Titre non trouvé");
    }
}

{/* <script>
$(document).ready(function() {
    $("#monParagraphe").hover(
        function() {
            $(this).text("ceci n’est pas un paragraphe");
        },
        function() {
            $(this).text("ceci est un paragraphe");
        }
    );
});
</script> */}