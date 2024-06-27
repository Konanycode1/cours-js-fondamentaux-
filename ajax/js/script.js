$(document).ready(function() {
    // Charger le fichier JSON avec AJAX
    $.ajax({
        url: "./js/data.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
          data.forEach(element => {
            console.log(element)
            //annee
            //entrees_millions
            //recette_guichet_meur_courants
            //recette_moyenne_par_entree_eur
            //seances_milliers

            const text = `
                <ul class="liste">
                    <li>${element.fields.annee}</li>
                    <li>${element.fields.entrees_millions}</li>
                    <li>${element.fields.recette_guichet_meur_courants}</li>
                    <li>${element.fields.recette_moyenne_par_entree_eur}</li>
                    <li>${element.fields.seances_milliers}</li>
                </ul>
            `;
            $(".myDiv").append(text)

          });
        },
        error: function() {
           console.log("Erreur lors du chargement des données.");
        }
    });

    
});
