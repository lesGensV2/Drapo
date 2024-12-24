import os, requests
from bs4 import BeautifulSoup
import time
import cairosvg

directory = "images/maps"
liste_pays = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "AntiguaBarbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina Regions", "Botswana", "Brazil",
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cape Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "GuineaBissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "North Korea", "South Korea",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "St Kitts Nevis",
    "St Lucia", "St Vincent", "Samoa", "San Marino",
    "Sao Tome Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "TimorLeste",
    "Togo", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "usa", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
    "Vietnam", "Vatican City", "Yemen", "Zambia", "Zimbabwe"
]

def download(dir,url,pays,stats):
    
    try:
        url_pays = url[:-7] + pays + url[-7:]
        # print(url_pays)
        filename = os.path.join(dir, url_pays.split("/")[-1])
        response = requests.get(url_pays, stream=True)
        response.raise_for_status()
        with open(filename, "wb") as f:
            for chunk in response.iter_content(chunk_size=1024):
                f.write(chunk)
        # print(f"✅ Téléchargé : {filename}")
        
    except Exception as e:
        try:
            url_pays = url[:-7] + pays.lower() + url[-7:]
            filename = os.path.join(dir, url_pays.split("/")[-1])
            response = requests.get(url_pays, stream=True)
            response.raise_for_status()
            with open(filename, "wb") as f:
                for chunk in response.iter_content(chunk_size=1024):
                    f.write(chunk)
        except:
            print(f"❌ Erreur lors du téléchargement : {e}")
            stats["erreur"] += 1

stats = {"erreur" : 0}

# for ele in liste_pays:
#     ele_recherche = (ele[0].lower()+ele[1:]).replace(' ','')
#     if not os.path.exists(f"images/maps/{ele_recherche}Low.svg"):
#         download(directory,f"https://www.amcharts.com/lib/3/maps/svg/Low.svg",ele_recherche,stats)
#         time.sleep(1)

# print(f"Fini avec {stats['erreur']} erreurs")

# for ele in liste_pays:
#     print(f"'{ele}' = 'images/maps/{(ele[0].lower()+ele[1:]).replace(' ','')}Low.svg',")


# Dossier contenant les fichiers .svg
input_directory = "images/maps"
output_directory = "images/maps"

# Créer le dossier de sortie s'il n'existe pas
os.makedirs(output_directory, exist_ok=True)

# Parcourir tous les fichiers dans le dossier
for filename in os.listdir(input_directory):
    if filename.endswith(".svg"):  # Vérifier l'extension .svg
        svg_path = os.path.join(input_directory, filename)
        png_path = os.path.join(output_directory, os.path.splitext(filename)[0] + ".png")  # Remplacer l'extension
        try:
            # Convertir .svg en .png
            cairosvg.svg2png(url=svg_path, write_to=png_path)
            print(f"✅ Converti : {filename} → {os.path.basename(png_path)}")
        except Exception as e:
            print(f"❌ Erreur lors de la conversion de {filename} : {e}")
