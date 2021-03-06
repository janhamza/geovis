var mymap = L.map('map').setView([46.27015750337884, 6.976565481307841], 11);

// Limiter la carte au Chablais
mymap.setMaxBounds([
  [46.69006771229332, 7.667337337893923],
  [45.89003415151929, 6.388643918529753]
]);
mymap.setMinZoom(9);
mymap.setMaxZoom(15);


//Echelle
L.control.scale().addTo(mymap);

// Définir les différentes couches de base:
var transp = L.tileLayer(
  'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=7c13362a329e40eab00c8c89f9ba95a2', {
    attribution: ' Maps &copy; <a href="https://www.thunderforest.com/">Thunderforest, </a> Data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }
);
var osmLayer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
});
var osmNoirBlanc = L.tileLayer(
  'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }
);

// Créer les boutons pour changer la couche de base
var baseLayers = {
  "Transport Map": transp,
  "OpenStreetMap": osmLayer,
  "OpenStreetMap noir et blanc": osmNoirBlanc,
};
var overlays = {};
L.control.layers(baseLayers, overlays).addTo(mymap);

//Choix de la couche par défaut
transp.addTo(mymap);



// Créer les icônes pour nos marqueurs
var icones = {};

// Icône pour le terminus
icones['terminus'] = L.icon({
  iconUrl: 'icones/terminus.png',
  zIndexOffset: 1,
  iconSize: [16, 16], // size of the icon
});

// Icone pour les arrêts-sur-demande
icones['arret'] = L.icon({
  iconUrl: 'icones/arret.png',
  iconSize: [9, 9], // size of the icon
});

// Icone pour les vrais arrets
icones['Varret'] = L.icon({
  iconUrl: 'icones/arret.png',
  iconSize: [13, 13], // size of the icon
});

// Icones pour le ski
icones['ski'] = L.icon({
  iconUrl: 'icones/ski.png',
  iconSize: [28, 41],
  iconAnchor: [14, 40],
  popupAnchor: [0, -40]
});

// Icones selectionnées
var icones_selec = {};

// Icône pour le terminus
icones_selec['terminus'] = L.icon({
  iconUrl: 'icones/terminus_selec.png',
  zIndexOffset: 1,
  iconSize: [40, 40], // size of the icon
});

// Icone pour les arrêts-sur-demande
icones_selec['arret'] = L.icon({
  iconUrl: 'icones/arret_selec.png',
  iconSize: [25, 25], // size of the icon
});

// Icone pour les vrais arrets
icones_selec['Varret'] = L.icon({
  iconUrl: 'icones/arret_selec.png',
  iconSize: [32, 32], // size of the icon
});

// Icones pour le ski
icones_selec['ski'] = L.icon({
  iconUrl: 'icones/ski_select.png',
  iconSize: [71, 81],
  iconAnchor: [34, 70],
  popupAnchor: [0, -80]

});

// Ajouter les markers
for (var k in points.features) {
  var poi = points.features[k];

  var type_poi = poi.properties.Type;
  var icone_marqueur = icones[type_poi];

  var marqueur = L.marker(
    [poi.geometry.coordinates[1], poi.geometry.coordinates[0]], {
      icon: icone_marqueur,
      zIndexOffset: type_poi == 'terminus' ? 100 : 0,
    }
  ).addTo(mymap);

  poi.marqueur = marqueur;
  marqueur.poi = poi;

  //Informations sur le marqueur
  marqueur.on('click', function(e) {
    var poi = e.target.poi;
    var html = '<h3>' + poi.properties.nom + '</h3>' +
      '<p>' + poi.properties.divers + '</p>'
    let sct = '.trains';

    // informations si c'est une station de ski
    if (poi.properties.Type == 'ski') {
      sct = '.ski';
      html += ' <p>' + poi.properties.arretpp + '</p>' +
        '<p>' + poi.properties.journee + '</p>' +
        '<a href=' + poi.properties.web + '> Site Web </a>' +
        '<div class="container">' +
        '<img src=' + poi.properties.img + ' alt="ski", class = "image" >' +
        '<div class="overlay">' +
        ' <div class="text">' + poi.properties.imgnom + '</div>' +
        ' <div class="lien"> <em>' + poi.properties.source + '<a href=' + poi.properties.lien + '>Lien </a> </em></div>' +
        '</div>' +
        '</div>';
    };
    // afficher l'icone de la ligne selon la ligne
    if (poi.properties.ligne == 'Ligne : Aigle - Champéry') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="l126"></p>'
    }
    if (poi.properties.ligne == 'Ligne: Aigle - Leysin') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="l125"></p>'
    }
    if (poi.properties.ligne == 'Ligne: Aigle - Le Sépey - Les Diablerets') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="l124"></p>'
    }
    if (poi.properties.ligne == 'Ligne: Bex - Gryon - Villars-sur-Ollon') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="l127"></p>'
    }
    if (poi.properties.ligne == 'Ligne: Villars-sur-Ollon - Col-de-Bretaye') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="l128"></p>'
    }

    // afficher les îcones pour les arrêts qui sont sur plusieurs lignes
    if (poi.properties.id == 'aigle') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="laigle"></p>'
    }
    if (poi.properties.id == 'villarssurollon') {
      sct = '.trains';
      html += '<p>' + poi.properties.ligne + '<img src=' + poi.properties.limg + ' alt="ligne", class="lvillars"></p>'
    }

    document.querySelector(sct).innerHTML = html;

    //remettre les icones de base
    for (var k in points.features) {
      var p = points.features[k];

      var type_p = p.properties.Type;
      var icone_p = icones[type_p];
      p.marqueur.setIcon(icone_p);
    }

    //changer icones
    var type_poi = poi.properties.Type;
    var icone_marqueur = icones_selec[type_poi];
    poi.marqueur.setIcon(icone_marqueur);

    //Zoom sur le point cliqué
    mymap.flyTo([poi.geometry.coordinates[1], poi.geometry.coordinates[0]], 13);
  })

  // Attacher l'étiquette au marqueur
  marqueur.bindTooltip(poi.properties.nom, {
    offset: [7, 0],
    direction: 'right',
    className: 'etiquette'
  }).addTo(mymap);

};
