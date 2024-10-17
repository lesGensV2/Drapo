
var currentBoxIndex = 1; // Variable globale pour suivre l'index de la boîte actuelle
var gagne = 0;
var deja_appuyer = 0;


const dico_drapeau = {
    "Afghanistan": "images/Flag_of_Afghanistan.svg.png",
    "Afrique du Sud": "images/Flag_of_Afrique_du_Sud.svg.png",
    "Albanie": "images/Flag_of_Albanie.svg.png",
    "Algérie": "images/Flag_of_Algerie.svg.png",
    "Allemagne": "images/Flag_of_Allemagne.svg.png",
    "Andorre": "images/Flag_of_Andorre.svg.png",
    "Angola": "images/Flag_of_Angola.svg.png",
    "Antigua et Barbuda": "images/Flag_of_Antigua_et_barbuda.svg.png",
    "Arabie Saoudite": "images/Flag_of_Arabie_saoudite.svg.png",
    "Argentine": "images/Flag_of_Argentine.svg.png",
    "Arménie": "images/Flag_of_Armenie.svg.png",
    "Australie": "images/Flag_of_Australie.svg.png",
    "Autriche": "images/Flag_of_Autriche.svg.png",
    "Azerbaidjan": "images/Flag_of_Azerbaidjan.svg.png",
    "Bahamas": "images/Flag_of_Bahamas.svg.png",
    "Bahrein": "images/Flag_of_Bahrein.svg.png",
    "Bangladesh": "images/Flag_of_Bangladesh.svg.png",
    "Barbade": "images/Flag_of_Barbades.svg.png",
    "Belgique": "images/Flag_of_Belgique.svg.png",
    "Bénin": "images/Flag_of_Benin.svg.png",
    "Bhoutan": "images/Flag_of_Bhoutan.svg.png",
    "Biélorussie": "images/Flag_of_Bielorussie.svg.png",
    "Birmanie": "images/Flag_of_Birmanie.svg.png",
    "Bolivie": "images/Flag_of_Bolivie.svg.png",
    "Bosnie Herzégovine": "images/Flag_of_Bosnie_Herzegovine.svg.png",
    "Botswana": "images/Flag_of_Botswana.svg.png",
    "Brésil": "images/Flag_of_Bresil.svg.png",
    "Brunei": "images/Flag_of_Brunei.svg.png",
    "Bulgarie": "images/Flag_of_Bulgarie.svg.png",
    "Burkina Faso": "images/Flag_of_Burkina_Faso.svg.png",
    "Burundi": "images/Flag_of_Burundi.svg.png",
    "Cap Vert": "images/Flag_of_Cap_Vert.svg.png",
    "Cambodge": "images/Flag_of_Cambodge.svg.png",
    "Cameroun": "images/Flag_of_Cameroun.svg.png",
    "Canada": "images/Flag_of_Canada.svg.png",
    "Centrafrique": "images/Flag_of_Centrafrique.svg.png",
    "Chili": "images/Flag_of_Chili.svg.png",
    "Chine": "images/Flag_of_Chine.svg.png",
    "Chypre": "images/Flag_of_Chypre.svg.png",
    "Colombie": "images/Flag_of_Colombie.svg.png",
    "Comores": "images/Flag_of_Comores.svg.png",
    "République du Congo": "images/Flag_of_Republique_du_Congo.svg.png",
    "Corée du Nord": "images/Flag_of_Coree_du_Nord.svg.png",
    "Corée du Sud": "images/Flag_of_Coree_du_Sud.svg.png",
    "Costa Rica": "images/Flag_of_Costa_Rica.svg.png",
    "Cote d'Ivoire": "images/Flag_of_Cote_d_Ivoire.svg.png",
    "Croatie": "images/Flag_of_Croatie.svg.png",
    "Cuba": "images/Flag_of_Cuba.svg.png",
    "Danemark": "images/Flag_of_Danemark.svg.png",
    "Djibouti": "images/Flag_of_Djibouti.svg.png",
    "Dominique": "images/Flag_of_Dominique.svg.png",
    "Egypte": "images/Flag_of_Egypte.svg.png",
    "Emirats arabes unis": "images/Flag_of_Emirats_Arabes_Unis.svg.png",
    "Equateur": "images/Flag_of_Equateur.svg.png",
    "Erythrée": "images/Flag_of_Erythree.svg.png",
    "Espagne": "images/Flag_of_Espagne.svg.png",
    "Estonie": "images/Flag_of_Estonie.svg.png",
    "Eswatini": "images/Flag_of_Eswatini.svg.png",
    "Etats Unis": "images/Flag_of_Etats_Unis.svg.png",
    "Ethiopie": "images/Flag_of_Ethiopie.svg.png",
    "Fidji": "images/Flag_of_Fidji.svg.png",
    "Finlande": "images/Flag_of_Finlande.svg.png",
    "France": "images/Flag_of_France.svg.png",
    "Gabon": "images/Flag_of_Gabon.svg.png",
    "Gambie": "images/Flag_of_Gambie.svg.png",
    "Géorgie": "images/Flag_of_Georgie.svg.png",
    "Ghana": "images/Flag_of_Ghana.svg.png",
    "Grèce": "images/Flag_of_Grece.svg.png",
    "Grenade": "images/Flag_of_Grenade.svg.png",
    "Guatemala": "images/Flag_of_Guatemala.svg.png",
    "Guinée": "images/Flag_of_Guinee.svg.png",
    "Guinée équatoriale": "images/Flag_of_Guinee_Equatoriale.svg.png",
    "Guinée Bissau": "images/Flag_of_Guinee_Bissau.svg.png",
    "Guyana": "images/Flag_of_Guyana.svg.png",
    "Haiti": "images/Flag_of_Haiti.svg.png",
    "Honduras": "images/Flag_of_Honduras.svg.png",
    "Hongrie": "images/Flag_of_Hongrie.svg.png",
    "Iles Marshall": "images/Flag_of_Iles_Marshall.svg.png",
    "Inde": "images/Flag_of_Inde.svg.png",
    "Indonésie": "images/Flag_of_Indonesie.svg.png",
    "Irak": "images/Flag_of_Irak.svg.png",
    "Iran": "images/Flag_of_Iran.svg.png",
    "Irlande": "images/Flag_of_Irlande.svg.png",
    "Islande": "images/Flag_of_Islande.svg.png",
    "Israel": "images/Flag_of_Israel.svg.png",
    "Italie": "images/Flag_of_Italie.svg.png",
    "Jamaïque": "images/Flag_of_Jamaique.svg.png",
    "Japon": "images/Flag_of_Japon.svg.png",
    "Jordanie": "images/Flag_of_Jordanie.svg.png",
    "Kazakhstan": "images/Flag_of_Kazakhstan.svg.png",
    "Kenya": "images/Flag_of_Kenya.svg.png",
    "Kirghizistan": "images/Flag_of_Kirghizistan.svg.png",
    "Kiribati": "images/Flag_of_Kiribati.svg.png",
    "Koweit": "images/Flag_of_Koweit.svg.png",
    "Laos": "images/Flag_of_Laos.svg.png",
    "Lesotho": "images/Flag_of_Lesotho.svg.png",
    "Lettonie": "images/Flag_of_Lettonie.svg.png",
    "Liban": "images/Flag_of_Liban.svg.png",
    "Libéria": "images/Flag_of_Liberia.svg.png",
    "Libye": "images/Flag_of_Libye.svg.png",
    "Liechtenstein": "images/Flag_of_Liechtenstein.svg.png",
    "Lituanie": "images/Flag_of_Lituanie.svg.png",
    "Luxembourg": "images/Flag_of_Luxembourg.svg.png",
    "Macédoine du Nord": "images/Flag_of_Macedoine_du_Nord.svg.png",
    "Madagascar": "images/Flag_of_Madagascar.svg.png",
    "Malaisie": "images/Flag_of_Malaisie.svg.png",
    "Malawi": "images/Flag_of_Malawi.svg.png",
    "Maldives": "images/Flag_of_Maldives.svg.png",
    "Mali": "images/Flag_of_Mali.svg.png",
    "Malte": "images/Flag_of_Malte.svg.png",
    "Maroc": "images/Flag_of_Maroc.svg.png",
    "Maurice": "images/Flag_of_Maurice.svg.png",
    "Mauritanie": "images/Flag_of_Mauritanie.svg.png",
    "Mexique": "images/Flag_of_Mexique.svg.png",
    "Micronésie": "images/Flag_of_Micronesie.svg.png",
    "Moldavie": "images/Flag_of_Moldavie.svg.png",
    "Monaco": "images/Flag_of_Monaco.svg.png",
    "Mongolie": "images/Flag_of_Mongolie.svg.png",
    "Monténégro": "images/Flag_of_Montenegro.svg.png",
    "Mozambique": "images/Flag_of_Mozambique.svg.png",
    "Namibie": "images/Flag_of_Namibie.svg.png",
    "Nauru": "images/Flag_of_Nauru.svg.png",
    "Népal": "images/Flag_of_Nepal.svg.png",
    "Nicaragua": "images/Flag_of_Nicaragua.svg.png",
    "Niger": "images/Flag_of_Niger.svg.png",
    "Nigéria": "images/Flag_of_Nigeria.svg.png",
    "Norvège": "images/Flag_of_Norvege.svg.png",
    "Nouvelle Zélande": "images/Flag_of_Nouvelle_Zelande.svg.png",
    "Oman": "images/Flag_of_Oman.svg.png",
    "Ouganda": "images/Flag_of_Ouganda.svg.png",
    "Ouzbékistan": "images/Flag_of_Ouzbekistan.svg.png",
    "Pakistan": "images/Flag_of_Pakistan.svg.png",
    "Palaos": "images/Flag_of_Palaos.svg.png",
    "Panama": "images/Flag_of_Panama.svg.png",
    "Papouasie Nouvelle Guinée": "images/Flag_of_Papouasie_Nouvelle_Guinee.svg.png",
    "Paraguay": "images/Flag_of_Paraguay.svg.png",
    "Pays Bas": "images/Flag_of_Pays_Bas.svg.png",
    "Pérou": "images/Flag_of_Perou.svg.png",
    "Philippines": "images/Flag_of_Philippines.svg.png",
    "Pologne": "images/Flag_of_Pologne.svg.png",
    "Portugal": "images/Flag_of_Portugal.svg.png",
    "Qatar": "images/Flag_of_Qatar.svg.png",
    "République Democratique du Congo": "images/Flag_of_Republique_Democratique_du_Congo.svg.png",
    "République Dominicaine": "images/Flag_of_Republique_Dominicaine.svg.png",
    "République Tchèque": "images/Flag_of_Republique_Tcheque.svg.png",
    "Roumanie": "images/Flag_of_Roumanie.svg.png",
    "Royaume-Uni": "images/Flag_of_Royaume_Uni.svg.png",
    "Russie": "images/Flag_of_Russie.svg.png",
    "Rwanda": "images/Flag_of_Rwanda.svg.png",
    "Saint Christophe et Nieves": "images/Flag_of_Saint_Christophe_et_Nieves.svg.png",
    "Saint Vincent et les Grenadines": "images/Flag_of_Saint_Vincent_et_les_Grenadines.svg.png",
    "Sainte-Lucie": "images/Flag_of_Sainte_Lucie.svg.png",
    "Ile Salomon": "images/Flag_of_Ile_Salomon.svg.png",
    "Salvador": "images/Flag_of_Salvador.svg.png",
    "Samoa": "images/Flag_of_Samoa.svg.png",
    "Sao Tomé et Principe": "images/Flag_of_Sao_Tome_et_Principe.svg.png",
    "Sénégal": "images/Flag_of_Senegal.svg.png",
    "Serbie": "images/Flag_of_Serbie.svg.png",
    "Seychelles": "images/Flag_of_Seychelles.svg.png",
    "Sierra Leone": "images/Flag_of_Sierra_Leone.svg.png",
    "Singapour": "images/Flag_of_Singapour.svg.png",
    "Slovaquie": "images/Flag_of_Slovaquie.svg.png",
    "Slovénie": "images/Flag_of_Slovenie.svg.png",
    "Somalie": "images/Flag_of_Somalie.svg.png",
    "Soudan": "images/Flag_of_Soudan.svg.png",
    "Soudan du Sud": "images/Flag_of_Soudan_du_Sud.svg.png",
    "Sri Lanka": "images/Flag_of_Sri_Lanka.svg.png",
    "Suède": "images/Flag_of_Suede.svg.png",
    "Suisse": "images/Flag_of_Suisse.svg.png",
    "Suriname": "images/Flag_of_Suriname.svg.png",
    "Syrie": "images/Flag_of_Syrie.svg.png",
    "Tadjikistan": "images/Flag_of_Tadjikistan.svg.png",
    "Tanzanie": "images/Flag_of_Tanzanie.svg.png",
    "Tchad": "images/Flag_of_Tchad.svg.png",
    "Thailande": "images/Flag_of_Thailande.svg.png",
    "Timor oriental": "images/Flag_of_Timor_Oriental.svg.png",
    "Togo": "images/Flag_of_Togo.svg.png",
    "Tonga": "images/Flag_of_Tonga.svg.png",
    "Trinité et Tobago": "images/Flag_of_Trinite_et_Tobago.svg.png",
    "Tunisie": "images/Flag_of_Tunisie.svg.png",
    "Turkménistan": "images/Flag_of_Turkmenistan.svg.png",
    "Turquie": "images/Flag_of_Turquie.svg.png",
    "Tuvalu": "images/Flag_of_Tuvalu.svg.png",
    "Ukraine": "images/Flag_of_Ukraine.svg.png",
    "Uruguay": "images/Flag_of_Uruguay.svg.png",
    "Vanuatu": "images/Flag_of_Vanuatu.svg.png",
    "Vatican": "images/Flag_of_Vatican.svg.png",
    "Vénezuela": "images/Flag_of_Venezuela.svg.png",
    "Vietnam": "images/Flag_of_Vietnam.svg.png",
    "Yémen": "images/Flag_of_Yemen.svg.png",
    "Zambie": "images/Flag_of_Zambie.svg.png",
    "Zimbabwe": "images/Flag_of_Zimbabwe.svg.png",
}


function displayRandomImage(elementId) {
    const countries = Object.keys(dico_drapeau); // Récupère toutes les clés du dictionnaire (noms des pays)
    const randomIndex = Math.floor(Math.random() * countries.length); // Génère un index aléatoire basé sur le nombre de pays
    const randomCountry = countries[randomIndex]; // Sélectionne un pays aléatoire
    const imgElement = document.getElementById(elementId); // Sélectionne l'élément img par son ID passé en argument
    if (imgElement) {
        imgElement.src = dico_drapeau[randomCountry]; // Change l'attribut src de l'image en fonction du pays aléatoire
    }
}

function displayRandomName() {
    const list_id = ['choix-drapeau1','choix-drapeau2','choix-drapeau3','choix-drapeau4']
    const randomId = list_id[Math.floor(Math.random() * list_id.length)];
    
    console.log(randomId)

    var currentImagePath = document.getElementById(randomId).src;
    var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
    var randomCountry = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant
    
    document.getElementById('nom-random').textContent = randomCountry;
}
function resetPage() {
    var box_reponse = document.getElementById('display-box1');
    displayRandomImage('choix-drapeau1');
    displayRandomImage('choix-drapeau2');
    displayRandomImage('choix-drapeau3');
    displayRandomImage('choix-drapeau4');
    displayRandomName();
    box_reponse.style.backgroundColor = "#0e1014";
    box_reponse.textContent = '';
}

// Fonction pour récupérer le score depuis LocalStorage ou initialiser à 0
function initialiserScore() {
    let score = localStorage.getItem('score-drapeau2'); // Récupère le score depuis LocalStorage
    if (score === null) {
        score = 0; // Si aucun score n'existe, on le met à 0
    }
    document.getElementById('score-drapeau2').textContent = score; // Affiche le score
}

// Fonction pour augmenter le score et le stocker
function gagnerPoint() {
    let score = parseInt(localStorage.getItem('score-drapeau2')); // Récupère le score actuel
    if (isNaN(score)) {
        score = 0; // Si aucun score n'existe, initialise à 0
    }
    score++; // Incrémente le score
    localStorage.setItem('score-drapeau2', score); // Stocke le nouveau score dans LocalStorage
    document.getElementById('score-drapeau2').textContent = score; // Met à jour l'affichage
}

function passer() {
    var box_reponse = document.getElementById('display-box1');
    var currentImagePath = document.getElementById('randomImage').src;
    var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
    var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant
    
    resetPage();
    box_reponse.textContent = "C'etait " + countryName;
    box_reponse.style.backgroundColor = "darkorange";
    box_reponse.style.color = "white";
    box_reponse.style.fontSize = '5vh';



    if (countryName.length >= 20) {
        box_reponse.style.fontSize = '2.5vh';
    } else if (countryName.length >= 15) {
        box_reponse.style.fontSize = '3.3vh';
    } else if (countryName.length >= 10) {
        box_reponse.style.fontSize = '4vh';
    }
}

window.onload = function() {
    // Appelle la fonction pour afficher l'image aléatoire
    displayRandomImage('choix-drapeau1');
    displayRandomImage('choix-drapeau2');
    displayRandomImage('choix-drapeau3');
    displayRandomImage('choix-drapeau4');
    
    displayRandomName() ; 
    initialiserScore();
    
    var inputElement = document.getElementById('text-input');

    
    if (inputElement) {
        inputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (gagne == 1 && deja_appuyer == 1) {
                    gagne = 0;
                    deja_appuyer = 0;
                    resetPage();
                }
                else if (gagne == -1 && deja_appuyer == 1) {
                    gagne = 0
                    deja_appuyer = 0
                    resetPage()
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
