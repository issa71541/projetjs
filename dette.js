
// document.addEventListener('DOMContentLoaded', function() {
//     var gestElement = document.getElementById('gest');
    
//         gestElement.addEventListener('click', function() {
//             alert('GESTION a été cliqué !');
            
//         });
  
// });
document.addEventListener('DOMContentLoaded', function () {
    const URL = 'http://localhost:3000/clients';

   
    const prenomElement = document.getElementById('prenom');
    const nomElement = document.getElementById('nom');
    const telElement = document.getElementById('tel');
    const emailElement = document.getElementById('email');
    const userPhotoElement = document.querySelector('.header-user img');

    function afficherInfosClient(client) {
        prenomElement.textContent = `Prenom: ${client.prenom}`;
        nomElement.textContent = `Nom: ${client.nom}`;
        telElement.textContent = `Telephone: ${client.telephone}`;
        emailElement.textContent = `Email: ${client.email}`;
      

    }

    
    function getClientData() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const client = data[0];
                afficherInfosClient(client);
            })
    }
    getClientData();
});

