var points = {
"type": "FeatureCollection",
"name": "points",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [

////// Stations de ski ///////
  //Portes-du-Soleil, Champéry
  { "type": "Feature", "properties":
    { "id": "skichamp", "Type": "ski", "nom": "Portes-du-Soleil, Champéry", "divers": "", "ligne":"",
      "journee": "Prix de la journée pour un adulte (2021): 67 CHF",
      "arretpp": "Arrêt le plus proche : Champéry, 0 minute de marche (50m)",
      "web": "https://www.portesdusoleil.com/", "img": "image/pds.jpg",
      "source" : "Auteur de l'image: Shaun Dunphy. ", "lien" : "https://commons.wikimedia.org/wiki/File:Tobogganing_Park_Leysin.jpg",
      "imgnom": "Portes Du Soleil, Les Crosets",
    }, "geometry": { "type": "Point", "coordinates": [ 6.869573596819069, 46.174298989069491 ] } },

  //Leysin-Les Mosses, Leysin
  { "type": "Feature", "properties":
    { "id": "skiley", "Type": "ski", "nom": "Leysin-Les Mosses, Leysin", "divers": "", "ligne": "",
      "journee": "Prix de la journée pour un adulte (2021): 55 CHF",
      "arretpp": "Arrêt le plus proche : Leysin Feydey, 12 minutes de marche (700m)",
      "web": "https://www.tele-leysin-mosses.ch/", "img": "image/ley.jpg",
      "source" : "Auteur de l'image: Martin Weinhardt. ", "lien" : "https://commons.wikimedia.org/wiki/File:Portes_Du_Soleil_Les_Crosets_(120963559).jpeg",
      "imgnom": "Le Tobogganing Park de Leysin"
    }, "geometry": { "type": "Point", "coordinates": [ 7.017632549133128, 46.347557635902263 ] } },

  //Villars-Bex-Diablerets, Vers l'Eglise
  { "type": "Feature", "properties":
    { "id": "skivers", "Type": "ski", "nom": "Villars-Bex-Diablerets, Vers l'Eglise", "divers": "", "ligne":"",
      "journee": "Prix de la journée pour un adulte (2021): 57 CHF",
      "arretpp": "Arrêt le plus proche : Vers l'Eglise, 0 minute de marche (50m)",
      "web": "https://www.villars-diablerets.ch/en/", "img": "image/diab.jpg",
      "source" : "Auteur de l'image: Campiana. ", "lien" : "https://commons.wikimedia.org/wiki/File:2007-12-28_DSC_0142_RV648_Aux_Diablerets-Suisse.jpg",
      "imgnom": "La Quille du Diable, les Diablerets"
    }, "geometry": { "type": "Point", "coordinates": [ 7.133925003469788, 46.353468497420423 ] } },

  //Villars-Bex-Diablerets, Les Diablerets
  { "type": "Feature", "properties":
    { "id": "skidiab", "Type": "ski", "nom": "Villars-Bex-Diablerets, Les Diablerets", "divers": "", "ligne":"",
      "journee": "Prix de la journée pour un adulte (2021): 57 CHF",
      "arretpp": "Arrêt le plus proche : Les Diablerets, 3 minutes de marche (250m)",
      "web": "https://www.villars-diablerets.ch/en/",
      "img": "image/diab.jpg",
      "source" : "Auteur de l'image: Campiana. ", "lien" : "https://commons.wikimedia.org/wiki/File:2007-12-28_DSC_0142_RV648_Aux_Diablerets-Suisse.jpg",
      "imgnom": "La Quille du Diable, les Diablerets"
    }, "geometry": { "type": "Point", "coordinates": [ 7.155273191098547, 46.345784252795866 ] } },

    //Villars-Bex-Diablerets, Barboleuse
  { "type": "Feature", "properties":
    { "id": "skibarb", "Type": "ski", "nom": "Villars-Bex-Diablerets, Barboleuse", "divers": "", "ligne":"",
      "journee": "Prix de la journée pour un adulte (2021): 57 CHF",
      "arretpp": "Arrêt le plus proche : Barboleusaz, 7 minutes de marche (550m)",
      "web": "https://www.villars-diablerets.ch/en/", "img": "image/diab.jpg",
      "source" : "Auteur de l'image: Campiana. ", "lien" : "https://commons.wikimedia.org/wiki/File:2007-12-28_DSC_0142_RV648_Aux_Diablerets-Suisse.jpg",
      "imgnom": "La Quille du Diable, les Diablerets"
    }, "geometry": { "type": "Point", "coordinates": [ 7.076937034874275, 46.28369666943 ] } },

      //Villars-Bex-Diablerets, Col de Bretaye
  { "type": "Feature", "properties":
    { "id": "skicol", "Type": "ski", "nom": "Villars-Bex-Diablerets, Col de Bretaye", "divers": "", "ligne":"",
      "journee": "Prix de la journée pour un adulte (2021): 57 CHF",
      "arretpp": "Arrêt le plus proche : Col de Bretaye, 0 minute de marche (50m)",
      "web": "https://www.villars-diablerets.ch/en/", "img": "image/diab.jpg",
      "source" : "Auteur de l'image: Campiana. ", "lien" : "https://commons.wikimedia.org/wiki/File:2007-12-28_DSC_0142_RV648_Aux_Diablerets-Suisse.jpg",
      "imgnom": "La Quille du Diable, les Diablerets"
    }, "geometry": { "type": "Point", "coordinates": [ 7.074906492768569, 46.31976663393673 ] } },

///Arrêts sur plusieurs lignes
  { "type": "Feature", "properties": { "id": "aigle", "Type": "terminus", "nom": "Aigle", "divers": "", "ligne": "Lignes : Aigle - Le Sépey - Les Diablerets, Aigle - Leysin et Aigle - Champéry ", "limg" : "icones/laigle.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.963737844546046, 46.316822225412011 ] } },
  { "type": "Feature", "properties": { "id": "villarssurollon", "Type": "terminus", "nom": "Villars-sur-Ollon", "divers": "", "ligne": "Lignes: Bex - Gryon - Villars-sur-Ollon et Villars-sur-Ollon - Col-de-Bretaye", "limg" : "icones/lvillars.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.056250844618327, 46.295943583113974 ] } },

///Arrêts de la ligne 126
  { "type": "Feature", "properties": { "id": "montheyville", "Type": "Varret", "nom": "Monthey-Ville", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.94757986298645, 46.253907052639242 ] } },
  { "type": "Feature", "properties": { "id": "montheyplace", "Type": "arret", "nom": "Monthey-En Place", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.945694261944928, 46.260372655846474 ] } },
  { "type": "Feature", "properties": { "id": "montheyhopital", "Type": "arret", "nom": "Monthey-Hôpital", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.940709907517847, 46.251864925038738 ] } },
  { "type": "Feature", "properties": { "id": "chemex", "Type": "arret", "nom": "Chemex", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "journee": "", "limg" : "icones/l126.png", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.930022090260664, 46.24355898322149 ] } },
  { "type": "Feature", "properties": { "id": "croixdunant", "Type": "arret", "nom": "Croix-du-Nant", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.927562849309862, 46.23971686993778 ] } },
  { "type": "Feature", "properties": { "id": "lesneys", "Type": "arret", "nom": "Les Neys", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.924818160748694, 46.236056741056998 ] } },
  { "type": "Feature", "properties": { "id": "routedemorgins", "Type": "arret", "nom": "Route de Morgins", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.92137083191587, 46.232214102415249 ] } },
  { "type": "Feature", "properties": { "id": "troistorrents", "Type": "Varret", "nom": "Troistorrents", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.915782646005332, 46.228135750907342 ] } },
  { "type": "Feature", "properties": { "id": "pontdepayot", "Type": "arret", "nom": "Pont de Fayot", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.903673080073465, 46.218990636056461 ] } },
  { "type": "Feature", "properties": { "id": "fayot", "Type": "arret", "nom": "Fayot", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.899479195952001, 46.212032036605855 ] } },
  { "type": "Feature", "properties": { "id": "valldilliez", "Type": "Varret", "nom": "Val-d'Illier", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.893133475998583, 46.203864433350006 ] } },
  { "type": "Feature", "properties": { "id": "encharnay", "Type": "arret", "nom": "En Charnais", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.88704026739279, 46.19704830376017 ] } },
  { "type": "Feature", "properties": { "id": "lacour", "Type": "arret", "nom": "La Cour", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.88673286227394, 46.194236498956919 ] } },
  { "type": "Feature", "properties": { "id": "champeryvillage", "Type": "arret", "nom": "Champéry-Village", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.874217082435019, 46.181391561159089 ] } },
  { "type": "Feature", "properties": { "id": "champery", "Type": "terminus", "nom": "Champéry", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.871390053217016, 46.175055393388739 ] } },
  { "type": "Feature", "properties": { "id": "collombeymurraz", "Type": "Varret", "nom": "Collombey-Muraz", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.945974220178172, 46.270271218293466 ] } },
  { "type": "Feature", "properties": { "id": "corbier", "Type": "arret", "nom": "Corbier", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.951419682283529, 46.272214005123487 ] } },
  { "type": "Feature", "properties": { "id": "pontdurhone", "Type": "arret", "nom": "Pont-du-Rhône", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.961542093697111, 46.276084195506471 ] } },
  { "type": "Feature", "properties": { "id": "sainttriphongare", "Type": "arret", "nom": "Saint-Triphon-Gare", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.973750468417184, 46.278307534208167 ] } },
  { "type": "Feature", "properties": { "id": "villy", "Type": "arret", "nom": "Villy", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.994445420168383, 46.286858579795933 ] } },
  { "type": "Feature", "properties": { "id": "lesarnoux", "Type": "arret", "nom": "Les Arnoux", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.996707043542787, 46.291607741071999 ] } },
  { "type": "Feature", "properties": { "id": "ollon", "Type": "Varret", "nom": "Ollon", "divers": "", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.993369502252407, 46.296826791594476 ] } },
  { "type": "Feature", "properties": { "id": "sainttriphonvillage", "Type": "arret", "nom": "Saint-Triphon-Village", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.975913283003384, 46.302045344740471 ] } },
  { "type": "Feature", "properties": { "id": "enchalex", "Type": "arret", "nom": "En Châlex", "divers": "Arrêt-sur-demande", "ligne": "Ligne : Aigle - Champéry", "limg" : "icones/l126.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.96907351910896, 46.303827730766848 ] } },

// Ligne 125: "Aigle -leysin"
  { "type": "Feature", "properties": { "id": "placedumarché", "Type": "arret", "nom": "Place-du-Marché", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.971080480168431, 46.31783978302014 ] } },
  { "type": "Feature", "properties": { "id": "aigledepot", "Type": "Varret", "nom": "Aigle-Depôt", "divers": "", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.975432463779327, 46.318252332522022 ] } },
  { "type": "Feature", "properties": { "id": "fontanney", "Type": "arret", "nom": "Fontanney", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.982173771725617, 46.318222864803609 ] } },
  { "type": "Feature", "properties": { "id": "pontdedrapel", "Type": "arret", "nom": "Pont-de-Drapel", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.986397755818543, 46.319784632011384 ] } },
  { "type": "Feature", "properties": { "id": "rennaz", "Type": "arret", "nom": "Rennaz", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.000819034842886, 46.327357097448292 ] } },
  { "type": "Feature", "properties": { "id": "laroulaz", "Type": "arret", "nom": "La Roulaz", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.001459032432724, 46.331304971093665 ] } },
  { "type": "Feature", "properties": { "id": "leysin-village", "Type": "Varret", "nom": "Leysin-Village", "divers": "", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.006045681826559, 46.339214591761099 ] } },
  { "type": "Feature", "properties": { "id": "versmont", "Type": "Varret", "nom": "Versmont", "divers": "", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.006995011584818, 46.34151214421388 ] } },
  { "type": "Feature", "properties": { "id": "leysinfeydey", "Type": "Varret", "nom": "Leysin Feydey", "divers": "", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.008605672185912, 46.3446048508251 ] } },
  { "type": "Feature", "properties": { "id": "leysingrandhotel", "Type": "terminus", "nom": "Leysin Grand-Hôtel", "divers": "", "ligne": "Ligne: Aigle - Leysin", "limg" : "icones/l125.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.006707012669395, 46.345620987668269 ] } },

// Ligne 124 : "Aigle - Le Sépey - Les Diablerets"
  { "type": "Feature", "properties": { "id": "aigleplacedumarche", "Type": "arret", "nom": "Aigle Place-du-Marché", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.970512266384058, 46.31671058396897 ] } },
  { "type": "Feature", "properties": { "id": "aigledepotasd", "Type": "arret", "nom": "Aigle-Dépôt-ASD", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets","limg" : "icones/l124.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.978987270217187, 46.316833040815638 ] } },
  { "type": "Feature", "properties": { "id": "aiglegrandhotel", "Type": "arret", "nom": "Aigle Grand Hotel", "divers": "Arrêt-sur-demande", "Ligne: ligne": "Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.986047200600773, 46.31546541119863 ] } },
  { "type": "Feature", "properties": { "id": "verchier", "Type": "arret", "nom": "Verchiez", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 6.983187235120039, 46.307942671804398 ] } },
  { "type": "Feature", "properties": { "id": "plambuit", "Type": "arret", "nom": "Plambuit", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.02394037087625, 46.327475383620886 ] } },
  { "type": "Feature", "properties": { "id": "exergillod", "Type": "arret", "nom": "Exergillod", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.038586029038639, 46.337102687095815 ] } },
  { "type": "Feature", "properties": { "id": "lesfontanelles", "Type": "arret", "nom": "Les Fontanelles", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.045700261789187, 46.343772580575667 ] } },
  { "type": "Feature", "properties": { "id": "lesplanches", "Type": "arret", "nom": "Les Planches", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.05542743804996, 46.354685196652149 ] } },
  { "type": "Feature", "properties": { "id": "lesepey", "Type": "Varret", "nom": "Le Sépey", "divers": "", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.052177726793537, 46.361390827667357 ] } },
  { "type": "Feature", "properties": { "id": "lesechenards", "Type": "arret", "nom": "Les Echenards", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.085388458383663, 46.355306543947556 ] } },
  { "type": "Feature", "properties": { "id": "surlebuis", "Type": "arret", "nom": "Sur-le-Buis", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.100692841800734, 46.353245462354799 ] } },
  { "type": "Feature", "properties": { "id": "lesaviolats", "Type": "arret", "nom": "Les Aviolats", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.113318409182103, 46.352987821690107 ] } },
  { "type": "Feature", "properties": { "id": "lesnicolets", "Type": "arret", "nom": "Les Nicolets", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.119235957719981, 46.354480605142946 ] } },
  { "type": "Feature", "properties": { "id": "plantmorier", "Type": "arret", "nom": "Plan-Morier", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.129303475362344, 46.353624343478835 ] } },
  { "type": "Feature", "properties": { "id": "versleglise", "Type": "arret", "nom": "Vers-L'Eglise", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.134046297196045, 46.353745584883789 ] } },
  { "type": "Feature", "properties": { "id": "lesbovets", "Type": "arret", "nom": "Les Bovets", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.141621637624866, 46.355533864363693 ] } },
  { "type": "Feature", "properties": { "id": "lafaverge", "Type": "arret", "nom": "La Faverge", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.147242759798137, 46.354973138960105 ] } },
  { "type": "Feature", "properties": { "id": "lesdiablerets", "Type": "terminus", "nom": "Les Diablerets", "divers": "", "ligne": "Ligne: Aigle - Le Sépey - Les Diablerets", "limg" : "icones/l124.png","journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.154587546387827, 46.35136617315505 ] } },

{ "type": "Feature", "properties": { "id": "bex", "Type": "terminus", "nom": "Bex", "divers": "", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png",  "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.00077519942001, 46.251473982989701 ] } },
{ "type": "Feature", "properties": { "id": "laruaz", "Type": "arret", "nom": "La Ruaz", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.00878969001862, 46.252567183787953 ] } },
{ "type": "Feature", "properties": { "id": "placedumarché", "Type": "Varret", "nom": "Place du Marché", "divers": "", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.014388854683401, 46.25091219077003 ] } },
{ "type": "Feature", "properties": { "id": "pontneuf", "Type": "arret", "nom": "Pont Neuf", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.020789468408042, 46.250585741296305 ] } },
{ "type": "Feature", "properties": { "id": "grandmoulin", "Type": "arret", "nom": "Grand Moulin", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.023138921816402, 46.252643099700926 ] } },
{ "type": "Feature", "properties": { "id": "lessalines", "Type": "arret", "nom": "Les Salines", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.02753042351427, 46.254783885180842 ] } },
{ "type": "Feature", "properties": { "id": "foyerdentsdumidi", "Type": "arret", "nom": "Foyer Dents-du-Midi", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.03020923954997, 46.256620946518382 ] } },
{ "type": "Feature", "properties": { "id": "bevieux", "Type": "arret", "nom": "Bévieux", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.030955794838605, 46.259262563207493 ] } },
{ "type": "Feature", "properties": { "id": "fontannazseulaz", "Type": "arret", "nom": "Fontannaz-Seulaz", "divers": "", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.05611909956739, 46.267657201200628 ] } },
{ "type": "Feature", "properties": { "id": "lesposses", "Type": "arret", "nom": "Les Posses", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.05094810631815, 46.271155852495681 ] } },
{ "type": "Feature", "properties": { "id": "gryonchalméry", "Type": "arret", "nom": "Gryon-Chalméry", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.051782491640744, 46.273660172891731 ] } },
{ "type": "Feature", "properties": { "id": "gryon", "Type": "Varret", "nom": "Gryon", "divers": "", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.06025808991763, 46.273720882268513 ] } },
{ "type": "Feature", "properties": { "id": "gryonboisgentil", "Type": "arret", "nom": "Gryon Bois-Gentil", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.067580918998824, 46.27771996432913 ] } },
{ "type": "Feature", "properties": { "id": "barboleusaz", "Type": "Varret", "nom": "Barboleusaz", "divers": "", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.070578118907619, 46.282887226384467 ] } },
{ "type": "Feature", "properties": { "id": "laclairiere", "Type": "arret", "nom": "La Clairière", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.067943217888898, 46.288319534381387 ] } },
{ "type": "Feature", "properties": { "id": "arveyes", "Type": "arret", "nom": "Arveyes", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Bex - Gryon - Villars-sur-Ollon", "limg" : "icones/l127.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.062849075919373, 46.291308591408509 ] } },

{ "type": "Feature", "properties": { "id": "rochegrise", "Type": "arret", "nom": "Roche Grise", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Villars-sur-Ollon - Col-de-Bretaye", "limg" :"icones/l128.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.061076007108861, 46.293738028370868 ] } },
{ "type": "Feature", "properties": { "id": "coldesoud", "Type": "arret", "nom": "Col de Soud", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Villars-sur-Ollon - Col-de-Bretaye", "limg" : "icones/l128.png",  "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.06954886069718, 46.304926081397106 ] } },
{ "type": "Feature", "properties": { "id": "legolf", "Type": "arret", "nom": "Le Golf", "divers": "Arrêt-sur-demande", "ligne": "Ligne: Villars-sur-Ollon - Col-de-Bretaye", "limg" : "icones/l128.png",  "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.075664026811462, 46.309476499715267 ] } },
{ "type": "Feature", "properties": { "id": "lesbouquetins", "Type": "arret", "nom": "Les Bouquetins", "divers": "Arrêt-sur-demande", "ligne":"Ligne: Villars-sur-Ollon - Col-de-Bretaye", "limg" : "icones/l128.png",  "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.072194740470147, 46.316544066027042 ] } },
{ "type": "Feature", "properties": { "id": "coldebretaye", "Type": "terminus", "nom": "Col de Bretaye", "divers": "", "ligne": "Ligne: Villars-sur-Ollon - Col-de-Bretaye", "limg" : "icones/l128.png", "journee": "", "arretpp": "" }, "geometry": { "type": "Point", "coordinates": [ 7.073171849597902, 46.321889633793297 ] } }
]
}
