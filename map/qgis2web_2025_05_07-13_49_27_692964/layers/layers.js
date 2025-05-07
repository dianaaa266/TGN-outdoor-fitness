var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronnolabels_1 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var lyr_Referencialtopogrficterritorial_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/topografia-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topografia-territorial",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Referencial topogràfic territorial',
                            popuplayertitle: 'Referencial topogràfic territorial',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Referencialtopogrficterritorial_2, 0]);
var format_tgn_3 = new ol.format.GeoJSON();
var features_tgn_3 = format_tgn_3.readFeatures(json_tgn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tgn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tgn_3.addFeatures(features_tgn_3);
var lyr_tgn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tgn_3, 
                style: style_tgn_3,
                popuplayertitle: 'tgn',
                interactive: true,
                title: '<img src="styles/legend/tgn_3.png" /> tgn'
            });
var format_Zonesboscoses_4 = new ol.format.GeoJSON();
var features_Zonesboscoses_4 = format_Zonesboscoses_4.readFeatures(json_Zonesboscoses_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesboscoses_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesboscoses_4.addFeatures(features_Zonesboscoses_4);
var lyr_Zonesboscoses_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesboscoses_4, 
                style: style_Zonesboscoses_4,
                popuplayertitle: 'Zones boscoses',
                interactive: true,
                title: '<img src="styles/legend/Zonesboscoses_4.png" /> Zones boscoses'
            });
var format_Zonesverdes_5 = new ol.format.GeoJSON();
var features_Zonesverdes_5 = format_Zonesverdes_5.readFeatures(json_Zonesverdes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesverdes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesverdes_5.addFeatures(features_Zonesverdes_5);
var lyr_Zonesverdes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesverdes_5, 
                style: style_Zonesverdes_5,
                popuplayertitle: 'Zones verdes',
                interactive: true,
                title: '<img src="styles/legend/Zonesverdes_5.png" /> Zones verdes'
            });
var format_Places_6 = new ol.format.GeoJSON();
var features_Places_6 = format_Places_6.readFeatures(json_Places_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_6.addFeatures(features_Places_6);
var lyr_Places_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_6, 
                style: style_Places_6,
                popuplayertitle: 'Places',
                interactive: true,
                title: '<img src="styles/legend/Places_6.png" /> Places'
            });
var format_ExplanadaAnellaVerdaRFrancol_7 = new ol.format.GeoJSON();
var features_ExplanadaAnellaVerdaRFrancol_7 = format_ExplanadaAnellaVerdaRFrancol_7.readFeatures(json_ExplanadaAnellaVerdaRFrancol_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExplanadaAnellaVerdaRFrancol_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExplanadaAnellaVerdaRFrancol_7.addFeatures(features_ExplanadaAnellaVerdaRFrancol_7);
var lyr_ExplanadaAnellaVerdaRFrancol_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExplanadaAnellaVerdaRFrancol_7, 
                style: style_ExplanadaAnellaVerdaRFrancol_7,
                popuplayertitle: 'Explanada Anella Verda (R. Francolí)',
                interactive: true,
                title: '<img src="styles/legend/ExplanadaAnellaVerdaRFrancol_7.png" /> Explanada Anella Verda (R. Francolí)'
            });
var format_CampdeMart_8 = new ol.format.GeoJSON();
var features_CampdeMart_8 = format_CampdeMart_8.readFeatures(json_CampdeMart_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampdeMart_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampdeMart_8.addFeatures(features_CampdeMart_8);
var lyr_CampdeMart_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampdeMart_8, 
                style: style_CampdeMart_8,
                popuplayertitle: 'Camp de Mart',
                interactive: true,
                title: '<img src="styles/legend/CampdeMart_8.png" /> Camp de Mart'
            });
var format_Parcs_9 = new ol.format.GeoJSON();
var features_Parcs_9 = format_Parcs_9.readFeatures(json_Parcs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcs_9.addFeatures(features_Parcs_9);
var lyr_Parcs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcs_9, 
                style: style_Parcs_9,
                popuplayertitle: 'Parcs',
                interactive: true,
                title: '<img src="styles/legend/Parcs_9.png" /> Parcs'
            });
var format_Platges_10 = new ol.format.GeoJSON();
var features_Platges_10 = format_Platges_10.readFeatures(json_Platges_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platges_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platges_10.addFeatures(features_Platges_10);
var lyr_Platges_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platges_10, 
                style: style_Platges_10,
                popuplayertitle: 'Platges',
                interactive: true,
                title: '<img src="styles/legend/Platges_10.png" /> Platges'
            });
var format_Anella_11 = new ol.format.GeoJSON();
var features_Anella_11 = format_Anella_11.readFeatures(json_Anella_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anella_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anella_11.addFeatures(features_Anella_11);
var lyr_Anella_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anella_11, 
                style: style_Anella_11,
                popuplayertitle: 'Anella',
                interactive: true,
                title: '<img src="styles/legend/Anella_11.png" /> Anella'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Positronnolabels_1.setVisible(true);lyr_Referencialtopogrficterritorial_2.setVisible(true);lyr_tgn_3.setVisible(true);lyr_Zonesboscoses_4.setVisible(true);lyr_Zonesverdes_5.setVisible(true);lyr_Places_6.setVisible(true);lyr_ExplanadaAnellaVerdaRFrancol_7.setVisible(true);lyr_CampdeMart_8.setVisible(true);lyr_Parcs_9.setVisible(true);lyr_Platges_10.setVisible(true);lyr_Anella_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positronnolabels_1,lyr_Referencialtopogrficterritorial_2,lyr_tgn_3,lyr_Zonesboscoses_4,lyr_Zonesverdes_5,lyr_Places_6,lyr_ExplanadaAnellaVerdaRFrancol_7,lyr_CampdeMart_8,lyr_Parcs_9,lyr_Platges_10,lyr_Anella_11];
lyr_tgn_3.set('fieldAliases', {'fid': 'fid', 'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_Zonesboscoses_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Zonesverdes_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Places_6.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_ExplanadaAnellaVerdaRFrancol_7.set('fieldAliases', {'id': 'id', });
lyr_CampdeMart_8.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Parcs_9.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_Platges_10.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_Anella_11.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_tgn_3.set('fieldImages', {'fid': 'TextEdit', 'CODIMUNI': 'TextEdit', 'NOMMUNI': 'TextEdit', 'CAPMUNI': 'TextEdit', 'AREAM5000': 'TextEdit', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'CODIVEGUE': 'TextEdit', 'NOMVEGUE': 'TextEdit', 'CAPVEGUE': 'TextEdit', 'CODIPROV': 'TextEdit', 'NOMPROV': 'TextEdit', 'CAPPROV': 'TextEdit', });
lyr_Zonesboscoses_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Zonesverdes_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Places_6.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_ExplanadaAnellaVerdaRFrancol_7.set('fieldImages', {'id': 'TextEdit', });
lyr_CampdeMart_8.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Parcs_9.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_Platges_10.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_Anella_11.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_tgn_3.set('fieldLabels', {'fid': 'no label', 'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_Zonesboscoses_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Zonesverdes_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Places_6.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_ExplanadaAnellaVerdaRFrancol_7.set('fieldLabels', {'id': 'no label', });
lyr_CampdeMart_8.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Parcs_9.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_Platges_10.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_Anella_11.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Anella_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});