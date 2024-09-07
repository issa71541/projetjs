document.addEventListener('DOMContentLoaded', function () {
    
    const CLIENTS_URL = 'http://localhost:3000/clients';
    const ARTICLES_URL = 'http://localhost:3000/articles';

    
    const prenomElement = document.getElementById('prenom');
    const nomElement = document.getElementById('nom');
    const telElement = document.getElementById('tel');
    const emailElement = document.getElementById('email');
  
    const inputArticle = document.getElementById('inputArticle');
    const tbody = document.getElementById('tBody');

    // Fonction pour afficher les infos du client
    function afficherInfosClient(client) {
        prenomElement.textContent = `Prenom: ${client.prenom}`;
        nomElement.textContent = `Nom: ${client.nom}`;
        telElement.textContent = `Telephone: ${client.telephone}`;
        emailElement.textContent = `Email: ${client.email}`;
    }

    
    function getClientData() {
        fetch(CLIENTS_URL)
            .then(response => response.json())
            .then(data => {
                const client = data[0];
                afficherInfosClient(client);
            })
            .catch(error => console.error('Erreur lors de la récupération des données client:', error));
    }

   
    function filterArticles(saisie) {
        fetch(ARTICLES_URL)
            .then(response => response.json())
            .then(articles => {
                const filteredArticles = articles.filter(article => article.libelle.toLowerCase().includes(saisie));

                tbody.innerHTML = '';

                filteredArticles.forEach(article => {
                    const row = document.createElement('tr');

                    // Case à cocher
                    const checkboxTd = document.createElement('td');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkboxTd.appendChild(checkbox);
                    row.appendChild(checkboxTd);

                    // Ajouter libellé, prix, quantité
                    row.innerHTML += `
                        <td class="p-2">${article.libelle}</td>
                        <td class="p-2">${article.prix}</td>
                        <td class="p-2">${article.quantiteEnStock}</td>
                    `;

                        
                    tbody.appendChild(row);
                });
            })
    }

    
    inputArticle.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        filterArticles(query);
    });

    getClientData();
});
