var currentBoxIndex = 1; // Variable globale pour suivre l'index de la boîte actuelle
var gagne = 0


const dico_pays_capitale = {
    "Afghanistan (Asie)": "Kaboul",
    "Afrique du Sud (Afrique)": "Pretoria",
    "Albanie (Europe)": "Tirana",
    "Algérie (Afrique)": "Alger",
    "Allemagne (Europe)": "Berlin",
    "Andorre (Europe)": "Andorre-la-Vieille",
    "Angola (Afrique)": "Luanda",
    "Antigua et Barbuda (Amérique)": "Saint John's",
    "Arabie Saoudite (Asie)": "Riyad",
    "Argentine (Amérique)": "Buenos Aires",
    "Arménie (Asie)": "Erevan",
    "Australie (Océanie)": "Canberra",
    "Autriche (Europe)": "Vienne",
    "Azerbaïdjan (Asie)": "Bakou",
    "Bahamas (Amérique)": "Nassau",
    "Bahreïn (Asie)": "Manama",
    "Bangladesh (Asie)": "Dacca",
    "Barbade (Amérique)": "Bridgetown",
    "Belgique (Europe)": "Bruxelles",
    "Bénin (Afrique)": "Porto-Novo",
    "Bhoutan (Asie)": "Thimphou",
    "Biélorussie (Europe)": "Minsk",
    "Birmanie (Asie)": "Naypyidaw",
    "Bolivie (Amérique)": "Sucre",
    "Bosnie-Herzégovine (Europe)": "Sarajevo",
    "Botswana (Afrique)": "Gaborone",
    "Brésil (Amérique)": "Brasília",
    "Brunei (Asie)": "Bandar Seri Begawan",
    "Bulgarie (Europe)": "Sofia",
    "Burkina Faso (Afrique)": "Ouagadougou",
    "Burundi (Afrique)": "Gitega",
    "Cap-Vert (Afrique)": "Praia",
    "Cambodge (Asie)": "Phnom Penh",
    "Cameroun (Afrique)": "Yaoundé",
    "Canada (Amérique)": "Ottawa",
    "Centrafrique (Afrique)": "Bangui",
    "Chili (Amérique)": "Santiago",
    "Chine (Asie)": "Pékin",
    "Chypre (Europe)": "Nicosie",
    "Colombie (Amérique)": "Bogotá",
    "Comores (Afrique)": "Moroni",
    "République du Congo (Afrique)": "Brazzaville",
    "Corée du Nord (Asie)": "Pyongyang",
    "Corée du Sud (Asie)": "Séoul",
    "Costa Rica (Amérique)": "San José",
    "Côte d'Ivoire (Afrique)": "Yamoussoukro",
    "Croatie (Europe)": "Zagreb",
    "Cuba (Amérique)": "La Havane",
    "Danemark (Europe)": "Copenhague",
    "Djibouti (Afrique)": "Djibouti",
    "Dominique (Amérique)": "Roseau",
    "Egypte (Afrique)": "Le Caire",
    "Émirats arabes unis (Asie)": "Abou Dabi",
    "Equateur (Amérique)": "Quito",
    "Erythrée (Afrique)": "Asmara",
    "Espagne (Europe)": "Madrid",
    "Estonie (Europe)": "Tallinn",
    "Eswatini (Afrique)": "Mbabane",
    "États-Unis (Amérique)": "Washington, D.C.",
    "Éthiopie (Afrique)": "Addis-Abeba",
    "Fidji (Océanie)": "Suva",
    "Finlande (Europe)": "Helsinki",
    "France (Europe)": "Paris",
    "Gabon (Afrique)": "Libreville",
    "Gambie (Afrique)": "Banjul",
    "Géorgie (Europe)": "Tbilissi",
    "Ghana (Afrique)": "Accra",
    "Grèce (Europe)": "Athènes",
    "Grenade (Amérique)": "Saint-Georges",
    "Guatemala (Amérique)": "Guatemala",
    "Guinée (Afrique)": "Conakry",
    "Guinée équatoriale (Afrique)": "Malabo",
    "Guinée-Bissau (Afrique)": "Bissau",
    "Guyana (Amérique)": "Georgetown",
    "Haïti (Amérique)": "Port-au-Prince",
    "Honduras (Amérique)": "Tegucigalpa",
    "Hongrie (Europe)": "Budapest",
    "Îles Marshall (Océanie)": "Delap-Uliga-Darrit",
    "Inde (Asie)": "New Delhi",
    "Indonésie (Asie)": "Jakarta",
    "Irak (Asie)": "Bagdad",
    "Iran (Asie)": "Téhéran",
    "Irlande (Europe)": "Dublin",
    "Islande (Europe)": "Reykjavik",
    "Israël (Asie)": "Jérusalem",
    "Italie (Europe)": "Rome",
    "Jamaïque (Amérique)": "Kingston",
    "Japon (Asie)": "Tokyo",
    "Jordanie (Asie)": "Amman",
    "Kazakhstan (Asie)": "Astana",
    "Kenya (Afrique)": "Nairobi",
    "Kirghizistan (Asie)": "Bichkek",
    "Kiribati (Océanie)": "Tarawa-Sud",
    "Koweït (Asie)": "Koweït",
    "Laos (Asie)": "Vientiane",
    "Lesotho (Afrique)": "Maseru",
    "Lettonie (Europe)": "Riga",
    "Liban (Asie)": "Beyrouth",
    "Libéria (Afrique)": "Monrovia",
    "Libye (Afrique)": "Tripoli",
    "Liechtenstein (Europe)": "Vaduz",
    "Lituanie (Europe)": "Vilnius",
    "Luxembourg (Europe)": "Luxembourg",
    "Macédoine du Nord (Europe)": "Skopje",
    "Madagascar (Afrique)": "Antananarivo",
    "Malaisie (Asie)": "Kuala Lumpur",
    "Malawi (Afrique)": "Lilongwe",
    "Maldives (Asie)": "Malé",
    "Mali (Afrique)": "Bamako",
    "Malte (Europe)": "La Valette",
    "Maroc (Afrique)": "Rabat",
    "Maurice (Afrique)": "Port-Louis",
    "Mauritanie (Afrique)": "Nouakchott",
    "Mexique (Amérique)": "Mexico",
    "Micronésie (Océanie)": "Palikir",
    "Moldavie (Europe)": "Chisinau",
    "Monaco (Europe)": "Monaco",
    "Mongolie (Asie)": "Oulan-Bator",
    "Monténégro (Europe)": "Podgorica",
    "Mozambique (Afrique)": "Maputo",
    "Namibie (Afrique)": "Windhoek",
    "Nauru (Océanie)": "Yaren",
    "Népal (Asie)": "Katmandou",
    "Nicaragua (Amérique)": "Managua",
    "Niger (Afrique)": "Niamey",
    "Nigéria (Afrique)": "Abuja",
    "Norvège (Europe)": "Oslo",
    "Nouvelle-Zélande (Océanie)": "Wellington",
    "Oman (Asie)": "Mascate",
    "Ouganda (Afrique)": "Kampala",
    "Ouzbékistan (Asie)": "Tachkent",
    "Pakistan (Asie)": "Islamabad",
    "Palaos (Océanie)": "Ngerulmud",
    "Panama (Amérique)": "Panama",
    "Papouasie-Nouvelle-Guinée (Océanie)": "Port Moresby",
    "Paraguay (Amérique)": "Asunción",
    "Pays-Bas (Europe)": "Amsterdam",
    "Pérou (Amérique)": "Lima",
    "Philippines (Asie)": "Manille",
    "Pologne (Europe)": "Varsovie",
    "Portugal (Europe)": "Lisbonne",
    "Qatar (Asie)": "Doha",
    "République Démocratique du Congo (Afrique)": "Kinshasa",
    "République Dominicaine (Amérique)": "Saint-Domingue",
    "République Tchèque (Europe)": "Prague",
    "Roumanie (Europe)": "Bucarest",
    "Royaume-Uni (Europe)": "Londres",
    "Russie (Europe)": "Moscou",
    "Rwanda (Afrique)": "Kigali",
    "Saint-Christophe-et-Niévès (Amérique)": "Basseterre",
    "Saint-Vincent-et-les-Grenadines (Amérique)": "Kingstown",
    "Sainte-Lucie (Amérique)": "Castries",
    "Îles Salomon (Océanie)": "Honiara",
    "Salvador (Amérique)": "San Salvador",
    "Samoa (Océanie)": "Apia",
    "Sao Tomé-et-Principe (Afrique)": "São Tomé",
    "Sénégal (Afrique)": "Dakar",
    "Serbie (Europe)": "Belgrade",
    "Seychelles (Afrique)": "Victoria",
    "Sierra Leone (Afrique)": "Freetown",
    "Singapour (Asie)": "Singapour",
    "Slovaquie (Europe)": "Bratislava",
    "Slovénie (Europe)": "Ljubljana",
    "Somalie (Afrique)": "Mogadiscio",
    "Soudan (Afrique)": "Khartoum",
    "Soudan du Sud (Afrique)": "Djouba",
    "Sri Lanka (Asie)": "Sri Jayawardenapura",
    "Suède (Europe)": "Stockholm",
    "Suisse (Europe)": "Berne",
    "Suriname (Amérique)": "Paramaribo",
    "Syrie (Asie)": "Damas",
    "Tadjikistan (Asie)": "Douchanbé",
    "Tanzanie (Afrique)": "Dodoma",
    "Tchad (Afrique)": "N'Djaména",
    "Thaïlande (Asie)": "Bangkok",
    "Timor oriental (Asie)": "Dili",
    "Togo (Afrique)": "Lomé",
    "Tonga (Océanie)": "Nuku'alofa",
    "Trinité-et-Tobago (Amérique)": "Port-d'Espagne",
    "Tunisie (Afrique)": "Tunis",
    "Turkménistan (Asie)": "Achgabat",
    "Turquie (Asie)": "Ankara",
    "Tuvalu (Océanie)": "Funafuti",
    "Ukraine (Europe)": "Kiev",
    "Uruguay (Amérique)": "Montevideo",
    "Vanuatu (Océanie)": "Port-Vila",
    "Vatican (Europe)": "Vatican",
    "Venezuela (Amérique)": "Caracas",
    "Vietnam (Asie)": "Hanoï",
    "Yémen (Asie)": "Sanaa",
    "Zambie (Afrique)": "Lusaka",
    "Zimbabwe (Afrique)": "Harare"
};



// Variable pour le score et le nombre de tentatives incorrectes
let score = 0;
let tentativeIncorretes = 0;

// Fonction pour afficher un pays aléatoire
function afficherPaysAleatoire() {
    const pays = Object.keys(dico_pays_capitale);
    const paysAleatoire = pays[Math.floor(Math.random() * pays.length)];
    
    // Afficher le pays
    const divPays = document.getElementById("Pays");
    divPays.textContent = paysAleatoire;

    // Réinitialiser le champ de texte et le résultat
    document.getElementById("text-input").value = '';
    document.getElementById("display-box1").textContent = ''; // Réinitialiser display-box1
    document.getElementById("display-box1").style.backgroundColor = ''; // Réinitialiser la couleur

    // Réinitialiser le compteur de tentatives incorrectes
    tentativeIncorretes = 0;
}

// Fonction pour vérifier si la capitale saisie est correcte
function verifierCapitale() {
    const paysAffiche = document.getElementById("Pays").textContent;
    const capitaleSaisie = document.getElementById("text-input").value;
    const capitalCorrecte = dico_pays_capitale[paysAffiche];

    // Récupérer la zone de réponse
    const displayBox1 = document.getElementById("display-box1");

    // Afficher la réponse de l'utilisateur
    displayBox1.textContent = capitaleSaisie;

    // Vérifier si la réponse est correcte
    if (capitalCorrecte && capitaleSaisie.trim().toLowerCase() === capitalCorrecte.toLowerCase()) {
        // La réponse est correcte
        displayBox1.style.backgroundColor = "green"; // Vert
        
        // Augmenter le score
        score++;
        document.getElementById("score").textContent = score; // Mettre à jour l'affichage du score
        
        // Afficher un nouveau pays après un court délai
        setTimeout(() => {
            afficherPaysAleatoire(); // Appeler la fonction pour afficher un nouveau pays
        }, 3000); // Attendre 3 secondes avant de changer de pays
    } else {
        // La réponse est incorrecte
        displayBox1.style.backgroundColor = "red"; // Rouge
        tentativeIncorretes++; // Incrémenter le compteur de tentatives incorrectes

        // Vérifier si le nombre de tentatives incorrectes a atteint 5
        if (tentativeIncorretes >= 5) {
            // Afficher la réponse correcte
            displayBox1.textContent = `Réponse correcte : ${capitalCorrecte}`;
            
            // Changer de pays après un délai
            setTimeout(() => {
                afficherPaysAleatoire(); // Appeler la fonction pour afficher un nouveau pays
            }, 3000); // Attendre 3 secondes avant de changer de pays
        }
    }
}

// Fonction pour passer au pays suivant en affichant la bonne réponse
function passerPays() {
    const paysAffiche = document.getElementById("Pays").textContent;
    const capitalCorrecte = dico_pays_capitale[paysAffiche];

    // Afficher la réponse correcte dans display-box1
    const displayBox1 = document.getElementById("display-box1");
    displayBox1.textContent = `Réponse correcte : ${capitalCorrecte}`;
    displayBox1.style.backgroundColor = "yellow"; // Jaune pour indiquer que la réponse est affichée

    // Changer de pays après un délai de 3 secondes
    setTimeout(() => {
        afficherPaysAleatoire(); // Appeler la fonction pour afficher un nouveau pays
    }, 3000); // Attendre 3 secondes avant de changer de pays
}

// Appeler la fonction pour afficher un pays au chargement de la page
document.addEventListener('DOMContentLoaded', afficherPaysAleatoire);

// Ajouter un écouteur d'événement pour détecter l'appui sur la touche "Entrée" et vérifier la capitale
document.getElementById("text-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêcher le comportement par défaut
        verifierCapitale(); // Appeler la fonction pour vérifier la capitale
    }
});








// function displayRandomImage() {
//     const countries = Object.keys(dico_drapeau); // Récupère toutes les clés du dictionnaire (noms des pays)
//     const randomIndex = Math.floor(Math.random() * countries.length); // Génère un index aléatoire basé sur le nombre de pays
//     const randomCountry = countries[randomIndex]; // Sélectionne un pays aléatoire
//     const imgElement = document.getElementById('randomImage'); // Sélectionne l'élément img
//     imgElement.src = dico_drapeau[randomCountry]; // Change l'attribut src de l'image en fonction du pays aléatoire
//     document.getElementById('text-input').value = '';

// }


// function addTextEssai() {
//     var input = document.getElementById('text-input');
//     var boxId = 'display-box' + currentBoxIndex;
//     var displayBox = document.getElementById(boxId);

//     if (displayBox && currentBoxIndex < 6 && gagne != 1) {

//         var currentImagePath = document.getElementById('randomImage').src;

//         var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
//         var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant

//         if (input.value.toLowerCase() === countryName.toLowerCase()) {
//             var newText = document.createElement('p');
//             newText.textContent = countryName;
//             displayBox.appendChild(newText);
//             document.getElementById(boxId).style.backgroundColor = "green";
//             input.value = '';
            
//             gagne = 1

//             // Incrémente l'index de la boîte actuelle
//             currentBoxIndex++;
//         }
//         else if (input.value != '') {
//             var newText = document.createElement('p');
//             newText.textContent = input.value;
//             displayBox.appendChild(newText);
//             input.value = '';

//             // Incrémente l'index de la boîte actuelle
//             currentBoxIndex++;
//         } 
//     }else {
//             console.error('Boîte non trouvée : ' + boxId);
//         }
//     if (gagne == 1) {

//     }
// }

// function addText() {
//     var input = document.getElementById('text-input');
//     var boxId = 'display-box' + currentBoxIndex;
//     var displayBox = document.getElementById(boxId);
//     displayBox.textContent = '';

//     if (displayBox && currentBoxIndex < 6 && gagne != 1) {

//         var currentImagePath = document.getElementById('randomImage').src;
//         var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
//         var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant
//         console.log(input.value.toLowerCase())
//         console.log(countryName)

//         if (input.value.toLowerCase() === countryName.toLowerCase()) {
//             var newText = document.createElement('p');
//             newText.textContent = countryName;
//             displayBox.appendChild(newText);
//             document.getElementById(boxId).style.backgroundColor = "green";
//             document.getElementById(boxId).style.color = "white"; 
//             input.value = '';
            
//             gagne = 1
//             gagnerPoint()
//         }
//         else if (input.value != '') {
//             var newText = document.createElement('p');
//             newText.textContent = input.value;
//             displayBox.appendChild(newText);
//             document.getElementById(boxId).style.backgroundColor = "darkred";
//             input.value = '';
//             // document.getElementById('display-box1').textContent = '';
//             displayRandomImage()
//         } 
//     }else {
//             console.error('Boîte non trouvée : ' + boxId);
//         }
//     if (gagne == 1) {

//     }
// }

// // Fonction pour récupérer le score depuis LocalStorage ou initialiser à 0
// function initialiserScore() {
//     let score = localStorage.getItem('score'); // Récupère le score depuis LocalStorage
//     if (score === null) {
//         score = 0; // Si aucun score n'existe, on le met à 0
//     }
//     document.getElementById('score').textContent = score; // Affiche le score
// }

// // Fonction pour augmenter le score et le stocker
// function gagnerPoint() {
//     let score = parseInt(localStorage.getItem('score')); // Récupère le score actuel
//     if (isNaN(score)) {
//         score = 0; // Si aucun score n'existe, initialise à 0
//     }
//     score++; // Incrémente le score
//     localStorage.setItem('score', score); // Stocke le nouveau score dans LocalStorage
//     document.getElementById('score').textContent = score; // Met à jour l'affichage
// }


// window.onload = function() {
//     displayRandomImage();  // Appelle la fonction pour afficher l'image aléatoire
//     initialiserScore();
    
//     var inputElement = document.getElementById('text-input');
//     var deja_appuyer = 0;
//     inputElement.focus();

    
//     if (inputElement) {
//         inputElement.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 if (gagne == 1 && deja_appuyer == 1) {
//                     gagne = 0;
//                     deja_appuyer = 0;
//                     resetPage();
//                 }
//                 else {
//                     addText();  // Appelle la fonction lorsque "Enter" est pressé
//                     deja_appuyer = 1;
//                 }
                
//             }
            
//         });
//     } else {
//         console.error("L'élément avec l'ID 'text-input' n'a pas été trouvé.");
//     }
// };
