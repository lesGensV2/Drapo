
var currentBoxIndex = 1; // Variable globale pour suivre l'index de la boîte actuelle
var gagne = 0


const dico_pays_capitale = {
    "Afghanistan": "Kaboul",
    "Afrique du Sud": "Pretoria",
    "Albanie": "Tirana",
    "Algérie": "Alger",
    "Allemagne": "Berlin",
    "Andorre": "Andorre-la-Vieille",
    "Angola": "Luanda",
    "Antigua et Barbuda": "Saint John's",
    "Arabie Saoudite": "Riyad",
    "Argentine": "Buenos Aires",
    "Arménie": "Erevan",
    "Australie": "Canberra",
    "Autriche": "Vienne",
    "Azerbaidjan": "Bakou",
    "Bahamas": "Nassau",
    "Bahrein": "Manama",
    "Bangladesh": "Dacca",
    "Barbade": "Bridgetown",
    "Belgique": "Bruxelles",
    "Bénin": "Porto-Novo",
    "Bhoutan": "Thimphou",
    "Biélorussie": "Minsk",
    "Birmanie": "Naypyidaw",
    "Bolivie": "Sucre",
    "Bosnie Herzégovine": "Sarajevo",
    "Botswana": "Gaborone",
    "Brésil": "Brasília",
    "Brunei": "Bandar Seri Begawan",
    "Bulgarie": "Sofia",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Cap Vert": "Praia",
    "Cambodge": "Phnom Penh",
    "Cameroun": "Yaoundé",
    "Canada": "Ottawa",
    "Centrafrique": "Bangui",
    "Chili": "Santiago",
    "Chine": "Pékin",
    "Chypre": "Nicosie",
    "Colombie": "Bogotá",
    "Comores": "Moroni",
    "République du Congo": "Brazzaville",
    "Corée du Nord": "Pyongyang",
    "Corée du Sud": "Séoul",
    "Costa Rica": "San José",
    "Côte d'Ivoire": "Yamoussoukro",
    "Croatie": "Zagreb",
    "Cuba": "La Havane",
    "Danemark": "Copenhague",
    "Djibouti": "Djibouti",
    "Dominique": "Roseau",
    "Egypte": "Le Caire",
    "Émirats arabes unis": "Abou Dabi",
    "Equateur": "Quito",
    "Erythrée": "Asmara",
    "Espagne": "Madrid",
    "Estonie": "Tallinn",
    "Eswatini": "Mbabane",
    "États-Unis": "Washington, D.C.",
    "Éthiopie": "Addis-Abeba",
    "Fidji": "Suva",
    "Finlande": "Helsinki",
    "France": "Paris",
    "Gabon": "Libreville",
    "Gambie": "Banjul",
    "Géorgie": "Tbilissi",
    "Ghana": "Accra",
    "Grèce": "Athènes",
    "Grenade": "Saint-Georges",
    "Guatemala": "Guatemala",
    "Guinée": "Conakry",
    "Guinée équatoriale": "Malabo",
    "Guinée-Bissau": "Bissau",
    "Guyana": "Georgetown",
    "Haïti": "Port-au-Prince",
    "Honduras": "Tegucigalpa",
    "Hongrie": "Budapest",
    "Îles Marshall": "Delap-Uliga-Darrit",
    "Inde": "New Delhi",
    "Indonésie": "Jakarta",
    "Irak": "Bagdad",
    "Iran": "Téhéran",
    "Irlande": "Dublin",
    "Islande": "Reykjavik",
    "Israël": "Jérusalem",
    "Italie": "Rome",
    "Jamaïque": "Kingston",
    "Japon": "Tokyo",
    "Jordanie": "Amman",
    "Kazakhstan": "Astana",
    "Kenya": "Nairobi",
    "Kirghizistan": "Bichkek",
    "Kiribati": "Tarawa-Sud",
    "Koweït": "Koweït",
    "Laos": "Vientiane",
    "Lesotho": "Maseru",
    "Lettonie": "Riga",
    "Liban": "Beyrouth",
    "Libéria": "Monrovia",
    "Libye": "Tripoli",
    "Liechtenstein": "Vaduz",
    "Lituanie": "Vilnius",
    "Luxembourg": "Luxembourg",
    "Macédoine du Nord": "Skopje",
    "Madagascar": "Antananarivo",
    "Malaisie": "Kuala Lumpur",
    "Malawi": "Lilongwe",
    "Maldives": "Malé",
    "Mali": "Bamako",
    "Malte": "La Valette",
    "Maroc": "Rabat",
    "Maurice": "Port-Louis",
    "Mauritanie": "Nouakchott",
    "Mexique": "Mexico",
    "Micronésie": "Palikir",
    "Moldavie": "Chisinau",
    "Monaco": "Monaco",
    "Mongolie": "Oulan-Bator",
    "Monténégro": "Podgorica",
    "Mozambique": "Maputo",
    "Namibie": "Windhoek",
    "Nauru": "Yaren",
    "Népal": "Katmandou",
    "Nicaragua": "Managua",
    "Niger": "Niamey",
    "Nigéria": "Abuja",
    "Norvège": "Oslo",
    "Nouvelle-Zélande": "Wellington",
    "Oman": "Mascate",
    "Ouganda": "Kampala",
    "Ouzbékistan": "Tachkent",
    "Pakistan": "Islamabad",
    "Palaos": "Ngerulmud",
    "Panama": "Panama",
    "Papouasie-Nouvelle-Guinée": "Port Moresby",
    "Paraguay": "Asunción",
    "Pays-Bas": "Amsterdam",
    "Pérou": "Lima",
    "Philippines": "Manille",
    "Pologne": "Varsovie",
    "Portugal": "Lisbonne",
    "Qatar": "Doha",
    "République Démocratique du Congo": "Kinshasa",
    "République Dominicaine": "Saint-Domingue",
    "République Tchèque": "Prague",
    "Roumanie": "Bucarest",
    "Royaume-Uni": "Londres",
    "Russie": "Moscou",
    "Rwanda": "Kigali",
    "Saint-Christophe-et-Niévès": "Basseterre",
    "Saint-Vincent-et-les-Grenadines": "Kingstown",
    "Sainte-Lucie": "Castries",
    "Îles Salomon": "Honiara",
    "Salvador": "San Salvador",
    "Samoa": "Apia",
    "Sao Tomé-et-Principe": "São Tomé",
    "Sénégal": "Dakar",
    "Serbie": "Belgrade",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Singapour": "Singapour",
    "Slovaquie": "Bratislava",
    "Slovénie": "Ljubljana",
    "Somalie": "Mogadiscio",
    "Soudan": "Khartoum",
    "Soudan du Sud": "Djouba",
    "Sri Lanka": "Sri Jayawardenapura",
    "Suède": "Stockholm",
    "Suisse": "Berne",
    "Suriname": "Paramaribo",
    "Syrie": "Damas",
    "Tadjikistan": "Douchanbé",
    "Tanzanie": "Dodoma",
    "Tchad": "N'Djaména",
    "Thaïlande": "Bangkok",
    "Timor oriental": "Dili",
    "Togo": "Lomé",
    "Tonga": "Nuku'alofa",
    "Trinité-et-Tobago": "Port-d'Espagne",
    "Tunisie": "Tunis",
    "Turkménistan": "Achgabat",
    "Turquie": "Ankara",
    "Tuvalu": "Funafuti",
    "Ukraine": "Kiev",
    "Uruguay": "Montevideo",
    "Vanuatu": "Port-Vila",
    "Vatican": "Vatican",
    "Venezuela": "Caracas",
    "Vietnam": "Hanoï",
    "Yémen": "Sanaa",
    "Zambie": "Lusaka",
    "Zimbabwe": "Harare"
};


// Fonction pour afficher un pays aléatoire
function afficherPaysAleatoire() {
    // Récupérer toutes les clefs (pays) du dictionnaire
    const pays = Object.keys(dico_pays_capitale);
    console.log(pays)
    // Sélectionner un pays aléatoire
    const paysAleatoire = pays[Math.floor(Math.random() * pays.length)];

    // Afficher le pays dans la div avec l'id "Pays"
    document.getElementById("Pays").innerText = paysAleatoire;
}

// Appeler la fonction pour afficher un pays aléatoire
afficherPaysAleatoire();

function displayRandomImage() {
    const countries = Object.keys(dico_drapeau); // Récupère toutes les clés du dictionnaire (noms des pays)
    const randomIndex = Math.floor(Math.random() * countries.length); // Génère un index aléatoire basé sur le nombre de pays
    const randomCountry = countries[randomIndex]; // Sélectionne un pays aléatoire
    const imgElement = document.getElementById('randomImage'); // Sélectionne l'élément img
    imgElement.src = dico_drapeau[randomCountry]; // Change l'attribut src de l'image en fonction du pays aléatoire
    document.getElementById('text-input').value = '';

}

function resetPage() {
    var box_reponse = document.getElementById('display-box1')
    displayRandomImage();
    box_reponse.style.backgroundColor = "#00000000";
    box_reponse.textContent = '';
}

function addTextEssai() {
    var input = document.getElementById('text-input');
    var boxId = 'display-box' + currentBoxIndex;
    var displayBox = document.getElementById(boxId);

    if (displayBox && currentBoxIndex < 6 && gagne != 1) {

        var currentImagePath = document.getElementById('randomImage').src;

        var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
        var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant

        if (input.value.toLowerCase() === countryName.toLowerCase()) {
            var newText = document.createElement('p');
            newText.textContent = countryName;
            displayBox.appendChild(newText);
            document.getElementById(boxId).style.backgroundColor = "green";
            input.value = '';
            
            gagne = 1

            // Incrémente l'index de la boîte actuelle
            currentBoxIndex++;
        }
        else if (input.value != '') {
            var newText = document.createElement('p');
            newText.textContent = input.value;
            displayBox.appendChild(newText);
            input.value = '';

            // Incrémente l'index de la boîte actuelle
            currentBoxIndex++;
        } 
    }else {
            console.error('Boîte non trouvée : ' + boxId);
        }
    if (gagne == 1) {

    }
}

function addText() {
    var input = document.getElementById('text-input');
    var boxId = 'display-box' + currentBoxIndex;
    var displayBox = document.getElementById(boxId);
    displayBox.textContent = '';

    if (displayBox && currentBoxIndex < 6 && gagne != 1) {

        var currentImagePath = document.getElementById('randomImage').src;
        var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
        var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant
        console.log(input.value.toLowerCase())
        console.log(countryName)

        if (input.value.toLowerCase() === countryName.toLowerCase()) {
            var newText = document.createElement('p');
            newText.textContent = countryName;
            displayBox.appendChild(newText);
            document.getElementById(boxId).style.backgroundColor = "green";
            document.getElementById(boxId).style.color = "white"; 
            input.value = '';
            
            gagne = 1
            gagnerPoint()
        }
        else if (input.value != '') {
            var newText = document.createElement('p');
            newText.textContent = input.value;
            displayBox.appendChild(newText);
            document.getElementById(boxId).style.backgroundColor = "darkred";
            input.value = '';
            // document.getElementById('display-box1').textContent = '';
            displayRandomImage()
        } 
    }else {
            console.error('Boîte non trouvée : ' + boxId);
        }
    if (gagne == 1) {

    }
}

// Fonction pour récupérer le score depuis LocalStorage ou initialiser à 0
function initialiserScore() {
    let score = localStorage.getItem('score'); // Récupère le score depuis LocalStorage
    if (score === null) {
        score = 0; // Si aucun score n'existe, on le met à 0
    }
    document.getElementById('score').textContent = score; // Affiche le score
}

// Fonction pour augmenter le score et le stocker
function gagnerPoint() {
    let score = parseInt(localStorage.getItem('score')); // Récupère le score actuel
    if (isNaN(score)) {
        score = 0; // Si aucun score n'existe, initialise à 0
    }
    score++; // Incrémente le score
    localStorage.setItem('score', score); // Stocke le nouveau score dans LocalStorage
    document.getElementById('score').textContent = score; // Met à jour l'affichage
}


window.onload = function() {
    displayRandomImage();  // Appelle la fonction pour afficher l'image aléatoire
    initialiserScore();
    
    var inputElement = document.getElementById('text-input');
    var deja_appuyer = 0;
    inputElement.focus();

    
    if (inputElement) {
        inputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (gagne == 1 && deja_appuyer == 1) {
                    gagne = 0;
                    deja_appuyer = 0;
                    resetPage();
                }
                else {
                    addText();  // Appelle la fonction lorsque "Enter" est pressé
                    deja_appuyer = 1;
                }
                
            }
            
        });
    } else {
        console.error("L'élément avec l'ID 'text-input' n'a pas été trouvé.");
    }
};
