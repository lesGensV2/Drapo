
var currentBoxIndex = 1; // Variable globale pour suivre l'index de la boîte actuelle
var gagne = 0;
var deja_appuyer = 0;

const dico_drapeau = {
    'Afghanistan' : 'images/maps/afghanistanLow.svg',
    'Albania' : 'images/maps/albaniaLow.svg',
    'Algeria' : 'images/maps/algeriaLow.svg',
    'Andorra' : 'images/maps/andorraLow.svg',
    'Angola' : 'images/maps/angolaLow.svg',
    'AntiguaBarbuda' : 'images/maps/antiguaBarbudaLow.svg',
    'Argentina' : 'images/maps/argentinaLow.svg',
    'Armenia' : 'images/maps/armeniaLow.svg',
    'Australia' : 'images/maps/australiaLow.svg',
    'Austria' : 'images/maps/austriaLow.svg',
    'Azerbaijan' : 'images/maps/azerbaijanLow.svg',
    'Bahamas' : 'images/maps/bahamasLow.svg',
    'Bahrain' : 'images/maps/bahrainLow.svg',
    'Bangladesh' : 'images/maps/bangladeshLow.svg',
    'Barbados' : 'images/maps/barbadosLow.svg',
    'Belarus' : 'images/maps/belarusLow.svg',
    'Belgium' : 'images/maps/belgiumLow.svg',
    'Belize' : 'images/maps/belizeLow.svg',
    'Benin' : 'images/maps/beninLow.svg',
    'Bhutan' : 'images/maps/bhutanLow.svg',
    'Bolivia' : 'images/maps/boliviaLow.svg',
    'Bosnia Herzegovina Regions' : 'images/maps/bosniaHerzegovinaRegionsLow.svg',
    'Botswana' : 'images/maps/botswanaLow.svg',
    'Brazil' : 'images/maps/brazilLow.svg',
    'Brunei Darussalam' : 'images/maps/bruneiDarussalamLow.svg',
    'Bulgaria' : 'images/maps/bulgariaLow.svg',
    'Burkina Faso' : 'images/maps/burkinaFasoLow.svg',
    'Burundi' : 'images/maps/burundiLow.svg',
    'Cape Verde' : 'images/maps/capeVerdeLow.svg',
    'Cambodia' : 'images/maps/cambodiaLow.svg',
    'Cameroon' : 'images/maps/cameroonLow.svg',
    'Canada' : 'images/maps/canadaLow.svg',
    'Central African Republic' : 'images/maps/centralAfricanRepublicLow.svg',
    'Chad' : 'images/maps/chadLow.svg',
    'Chile' : 'images/maps/chileLow.svg',
    'China' : 'images/maps/chinaLow.svg',
    'Colombia' : 'images/maps/colombiaLow.svg',
    'Comoros' : 'images/maps/comorosLow.svg',
    'Congo' : 'images/maps/congoLow.svg',
    'Costa Rica' : 'images/maps/costaRicaLow.svg',
    'Croatia' : 'images/maps/croatiaLow.svg',
    'Cuba' : 'images/maps/cubaLow.svg',
    'Cyprus' : 'images/maps/cyprusLow.svg',
    'Czech Republic' : 'images/maps/czechRepublicLow.svg',
    'Denmark' : 'images/maps/denmarkLow.svg',
    'Djibouti' : 'images/maps/djiboutiLow.svg',
    'Dominica' : 'images/maps/dominicaLow.svg',
    'Dominican Republic' : 'images/maps/dominicanRepublicLow.svg',
    'Ecuador' : 'images/maps/ecuadorLow.svg',
    'Egypt' : 'images/maps/egyptLow.svg',
    'El Salvador' : 'images/maps/elSalvadorLow.svg',
    'Equatorial Guinea' : 'images/maps/equatorialGuineaLow.svg',
    'Eritrea' : 'images/maps/eritreaLow.svg',
    'Estonia' : 'images/maps/estoniaLow.svg',
    'Eswatini' : 'images/maps/eswatiniLow.svg',
    'Ethiopia' : 'images/maps/ethiopiaLow.svg',
    'Fiji' : 'images/maps/fijiLow.svg',
    'Finland' : 'images/maps/finlandLow.svg',
    'France' : 'images/maps/franceLow.svg',
    'Gabon' : 'images/maps/gabonLow.svg',
    'Gambia' : 'images/maps/gambiaLow.svg',
    'Georgia' : 'images/maps/georgiaLow.svg',
    'Germany' : 'images/maps/germanyLow.svg',
    'Ghana' : 'images/maps/ghanaLow.svg',
    'Greece' : 'images/maps/greeceLow.svg',
    'Grenada' : 'images/maps/grenadaLow.svg',
    'Guatemala' : 'images/maps/guatemalaLow.svg',
    'Guinea' : 'images/maps/guineaLow.svg',
    'GuineaBissau' : 'images/maps/guineaBissauLow.svg',
    'Guyana' : 'images/maps/guyanaLow.svg',
    'Haiti' : 'images/maps/haitiLow.svg',
    'Honduras' : 'images/maps/hondurasLow.svg',
    'Hungary' : 'images/maps/hungaryLow.svg',
    'Iceland' : 'images/maps/icelandLow.svg',
    'India' : 'images/maps/indiaLow.svg',
    'Indonesia' : 'images/maps/indonesiaLow.svg',
    'Iran' : 'images/maps/iranLow.svg',
    'Iraq' : 'images/maps/iraqLow.svg',
    'Ireland' : 'images/maps/irelandLow.svg',
    'Israel' : 'images/maps/israelLow.svg',
    'Italy' : 'images/maps/italyLow.svg',
    'Jamaica' : 'images/maps/jamaicaLow.svg',
    'Japan' : 'images/maps/japanLow.svg',
    'Jordan' : 'images/maps/jordanLow.svg',
    'Kazakhstan' : 'images/maps/kazakhstanLow.svg',
    'Kenya' : 'images/maps/kenyaLow.svg',
    'Kiribati' : 'images/maps/kiribatiLow.svg',
    'Kosovo' : 'images/maps/kosovoLow.svg',
    'North Korea' : 'images/maps/northKoreaLow.svg',
    'South Korea' : 'images/maps/southKoreaLow.svg',
    'Kuwait' : 'images/maps/kuwaitLow.svg',
    'Kyrgyzstan' : 'images/maps/kyrgyzstanLow.svg',
    'Laos' : 'images/maps/laosLow.svg',
    'Latvia' : 'images/maps/latviaLow.svg',
    'Lebanon' : 'images/maps/lebanonLow.svg',
    'Lesotho' : 'images/maps/lesothoLow.svg',
    'Liberia' : 'images/maps/liberiaLow.svg',
    'Libya' : 'images/maps/libyaLow.svg',
    'Liechtenstein' : 'images/maps/liechtensteinLow.svg',
    'Lithuania' : 'images/maps/lithuaniaLow.svg',
    'Luxembourg' : 'images/maps/luxembourgLow.svg',
    'Madagascar' : 'images/maps/madagascarLow.svg',
    'Malawi' : 'images/maps/malawiLow.svg',
    'Malaysia' : 'images/maps/malaysiaLow.svg',
    'Maldives' : 'images/maps/maldivesLow.svg',
    'Mali' : 'images/maps/maliLow.svg',
    'Malta' : 'images/maps/maltaLow.svg',
    'Marshall Islands' : 'images/maps/marshallIslandsLow.svg',
    'Mauritania' : 'images/maps/mauritaniaLow.svg',
    'Mauritius' : 'images/maps/mauritiusLow.svg',
    'Mexico' : 'images/maps/mexicoLow.svg',
    'Micronesia' : 'images/maps/micronesiaLow.svg',
    'Moldova' : 'images/maps/moldovaLow.svg',
    'Monaco' : 'images/maps/monacoLow.svg',
    'Mongolia' : 'images/maps/mongoliaLow.svg',
    'Montenegro' : 'images/maps/montenegroLow.svg',
    'Morocco' : 'images/maps/moroccoLow.svg',
    'Mozambique' : 'images/maps/mozambiqueLow.svg',
    'Myanmar' : 'images/maps/myanmarLow.svg',
    'Namibia' : 'images/maps/namibiaLow.svg',
    'Nauru' : 'images/maps/nauruLow.svg',
    'Nepal' : 'images/maps/nepalLow.svg',
    'Netherlands' : 'images/maps/netherlandsLow.svg',
    'New Zealand' : 'images/maps/newZealandLow.svg',
    'Nicaragua' : 'images/maps/nicaraguaLow.svg',
    'Niger' : 'images/maps/nigerLow.svg',
    'Nigeria' : 'images/maps/nigeriaLow.svg',
    'Macedonia' : 'images/maps/macedoniaLow.svg',
    'Norway' : 'images/maps/norwayLow.svg',
    'Oman' : 'images/maps/omanLow.svg',
    'Pakistan' : 'images/maps/pakistanLow.svg',
    'Palau' : 'images/maps/palauLow.svg',
    'Palestine' : 'images/maps/palestineLow.svg',
    'Panama' : 'images/maps/panamaLow.svg',
    'Papua New Guinea' : 'images/maps/papuaNewGuineaLow.svg',
    'Paraguay' : 'images/maps/paraguayLow.svg',
    'Peru' : 'images/maps/peruLow.svg',
    'Philippines' : 'images/maps/philippinesLow.svg',
    'Poland' : 'images/maps/polandLow.svg',
    'Portugal' : 'images/maps/portugalLow.svg',
    'Qatar' : 'images/maps/qatarLow.svg',
    'Romania' : 'images/maps/romaniaLow.svg',
    'Russia' : 'images/maps/russiaLow.svg',
    'Rwanda' : 'images/maps/rwandaLow.svg',
    'St Kitts Nevis' : 'images/maps/stKittsNevisLow.svg',
    'St Lucia' : 'images/maps/stLuciaLow.svg',
    'St Vincent' : 'images/maps/stVincentLow.svg',
    'Samoa' : 'images/maps/samoaLow.svg',
    'San Marino' : 'images/maps/sanMarinoLow.svg',
    'Sao Tome Principe' : 'images/maps/saoTomePrincipeLow.svg',
    'Saudi Arabia' : 'images/maps/saudiArabiaLow.svg',
    'Senegal' : 'images/maps/senegalLow.svg',
    'Serbia' : 'images/maps/serbiaLow.svg',
    'Seychelles' : 'images/maps/seychellesLow.svg',
    'Sierra Leone' : 'images/maps/sierraLeoneLow.svg',
    'Singapore' : 'images/maps/singaporeLow.svg',
    'Slovakia' : 'images/maps/slovakiaLow.svg',
    'Slovenia' : 'images/maps/sloveniaLow.svg',
    'Solomon Islands' : 'images/maps/solomonIslandsLow.svg',
    'Somalia' : 'images/maps/somaliaLow.svg',
    'South Africa' : 'images/maps/southAfricaLow.svg',
    'South Sudan' : 'images/maps/southSudanLow.svg',
    'Spain' : 'images/maps/spainLow.svg',
    'Sri Lanka' : 'images/maps/sriLankaLow.svg',
    'Sudan' : 'images/maps/sudanLow.svg',
    'Suriname' : 'images/maps/surinameLow.svg',
    'Sweden' : 'images/maps/swedenLow.svg',
    'Switzerland' : 'images/maps/switzerlandLow.svg',
    'Syria' : 'images/maps/syriaLow.svg',
    'Tajikistan' : 'images/maps/tajikistanLow.svg',
    'Tanzania' : 'images/maps/tanzaniaLow.svg',
    'Thailand' : 'images/maps/thailandLow.svg',
    'TimorLeste' : 'images/maps/timorLesteLow.svg',
    'Togo' : 'images/maps/togoLow.svg',
    'Tonga' : 'images/maps/tongaLow.svg',
    'Trinidad And Tobago' : 'images/maps/trinidadAndTobagoLow.svg',
    'Tunisia' : 'images/maps/tunisiaLow.svg',
    'Turkey' : 'images/maps/turkeyLow.svg',
    'Turkmenistan' : 'images/maps/turkmenistanLow.svg',
    'Tuvalu' : 'images/maps/tuvaluLow.svg',
    'Uganda' : 'images/maps/ugandaLow.svg',
    'Ukraine' : 'images/maps/ukraineLow.svg',
    'United Arab Emirates' : 'images/maps/unitedArabEmiratesLow.svg',
    'United Kingdom' : 'images/maps/unitedKingdomLow.svg',
    'usa' : 'images/maps/usaLow.svg',
    'Uruguay' : 'images/maps/uruguayLow.svg',
    'Uzbekistan' : 'images/maps/uzbekistanLow.svg',
    'Vanuatu' : 'images/maps/vanuatuLow.svg',
    'Venezuela' : 'images/maps/venezuelaLow.svg',
    'Vietnam' : 'images/maps/vietnamLow.svg',
    'Vatican City' : 'images/maps/vaticanCityLow.svg',
    'Yemen' : 'images/maps/yemenLow.svg',
    'Zambia' : 'images/maps/zambiaLow.svg',
    'Zimbabwe' : 'images/maps/zimbabweLow.svg'
}


function displayRandomImage() {
    const countries = Object.keys(dico_drapeau); // Récupère toutes les clés du dictionnaire (noms des pays)
    const randomIndex = Math.floor(Math.random() * countries.length); // Génère un index aléatoire basé sur le nombre de pays
    const randomCountry = countries[randomIndex]; // Sélectionne un pays aléatoire
    const imgElement = document.getElementById('randomImage'); // Sélectionne l'élément img
    imgElement.src = dico_drapeau[randomCountry]; // Change l'attribut src de l'image en fonction du pays aléatoire
    document.getElementById('text-input').value = '';
    document.getElementById('display-box1').textContent = '';

}

function resetPage() {
    var box_reponse = document.getElementById('display-box1');
    displayRandomImage();
    box_reponse.style.backgroundColor = "#0e1014";
    box_reponse.textContent = '';
}


function addText() {
    var input = document.getElementById('text-input');
    var boxId = 'display-box1';
    var displayBox = document.getElementById(boxId);
    displayBox.style.color = "white";
    displayBox.textContent = '';

    if (displayBox && currentBoxIndex < 6 && gagne != 1 || -1) {

        var currentImagePath = document.getElementById('randomImage').src;
        var imageName = currentImagePath.split('/').pop(); // Récupère juste le nom de l'image (ex: "Flag_of_France.svg.png")
        var countryName = Object.keys(dico_drapeau).find(key => dico_drapeau[key].includes(imageName)); // Trouve le nom du pays correspondant
        var newText = document.createElement('p');

        console.log(input.value.toUpperCase())

        if (input.value.toLowerCase() && countryName.toLowerCase()){

            if (input.value.toLowerCase() === countryName.toLowerCase()) {
                displayBox.style.backgroundColor = "green";
                displayBox.style.color = "white"; 
                displayBox.style.fontSize = '5vh';
                input.value = '';

                if (countryName.length >= 20) {
                    displayBox.style.fontSize = '3.1vh';
                } else if (countryName.length >= 15) {
                    displayBox.style.fontSize = '3.5vh';
                } else if (countryName.length >= 10) {
                    displayBox.style.fontSize = '4vh';
                }
                
                setTimeout(function() {
                    resetPage();
                    clique = 0; // Réactive les clics après la réinitialisation
                }, 100);

                gagnerPoint()
            }
            else if (input.value != '') {
                newText.textContent = input.value;
                displayBox.appendChild(newText);
                displayBox.style.backgroundColor = "darkred";
                displayBox.style.color = "white";
                displayBox.style.fontSize = '5vh';
                input.value = '';

                if (countryName.length >= 20) {
                    displayBox.style.fontSize = '2.5vh';
                } else if (countryName.length >= 15) {
                    displayBox.style.fontSize = '3.3vh';
                } else if (countryName.length >= 10) {
                    displayBox.style.fontSize = '4vh';
                }

                displayBox.textContent = "C'était : " +countryName;
                gagne = -1;
            } 
        }else if(gagne == 1 || -1 && input.value != ''){
            resetPage();
            gagne = 0;
        }else if(input.value != '') {
            console.log('Erreur toLowerCase');
        }
        // else {
        // }
    } else if (gagne == -1 || 1 ) {
        resetPage();
        gagne = 0;
    }else {
            console.error('Boîte non trouvée : ' + boxId);
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
    displayRandomImage();  // Appelle la fonction pour afficher l'image aléatoire
    initialiserScore();
    
    var inputElement = document.getElementById('text-input');
    inputElement.focus();

    
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
