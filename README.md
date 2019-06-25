### API ###

- faire npm install
- nodemon.js ou node server.js pour démarrer l'api

./API/servers.js
J'ai parametré un CORS pour que les urls api soient acceptées par l'application React

urls api :
http://localhost:3000/api/users
http://localhost:3000/api/components


### APP ###

- npm install
- npm start pour démarrer l'app

./APP/src/api.js
Contient les urls api utilisées dans l'app
-----

./APP/src/components
contient les composants, précédement des class, convertis en Hook comme demandé

Le champ de recherche accepte nom, prénom, nom + prénom, prénom + nom, avec ou sans majuscules
Si une ville est sélectionnée le champ peut être laissé vide pour afficher tous les résultats liés à la ville
-----

./APP/src/hoc
Mise en pratique du code envoyé

Composant simple où on retire un élément du tableau en entrant une ID dans le champ texte
-----
