var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var lyr_Referencialtopogrficterritorial_1 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Referencialtopogrficterritorial_1, 0]);

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lmitmunicipal_3 = new ol.format.GeoJSON();
var features_Lmitmunicipal_3 = format_Lmitmunicipal_3.readFeatures(json_Lmitmunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitmunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitmunicipal_3.addFeatures(features_Lmitmunicipal_3);
var lyr_Lmitmunicipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitmunicipal_3, 
                style: style_Lmitmunicipal_3,
                popuplayertitle: 'Límit municipal',
                interactive: true,
                title: '<img src="styles/legend/Lmitmunicipal_3.png" /> Límit municipal'
            });
var format_Contaminaciacstica_4 = new ol.format.GeoJSON();
var features_Contaminaciacstica_4 = format_Contaminaciacstica_4.readFeatures(json_Contaminaciacstica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contaminaciacstica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contaminaciacstica_4.addFeatures(features_Contaminaciacstica_4);
var lyr_Contaminaciacstica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contaminaciacstica_4, 
                style: style_Contaminaciacstica_4,
                popuplayertitle: 'Contaminació acústica',
                interactive: true,
    title: 'Contaminació acústica<br />\
    <img src="styles/legend/Contaminaciacstica_4_0.png" /> 52,5<br />\
    <img src="styles/legend/Contaminaciacstica_4_1.png" /> 57,5<br />\
    <img src="styles/legend/Contaminaciacstica_4_2.png" /> 62,5<br />\
    <img src="styles/legend/Contaminaciacstica_4_3.png" /> 67,5<br />\
    <img src="styles/legend/Contaminaciacstica_4_4.png" /> 72,5<br />\
    <img src="styles/legend/Contaminaciacstica_4_5.png" /> 75<br />' });
var format_Zonesboscoses_5 = new ol.format.GeoJSON();
var features_Zonesboscoses_5 = format_Zonesboscoses_5.readFeatures(json_Zonesboscoses_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesboscoses_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesboscoses_5.addFeatures(features_Zonesboscoses_5);
var lyr_Zonesboscoses_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesboscoses_5, 
                style: style_Zonesboscoses_5,
                popuplayertitle: 'Zones boscoses',
                interactive: true,
                title: '<img src="styles/legend/Zonesboscoses_5.png" /> Zones boscoses'
            });
var format_Zonesverdes_6 = new ol.format.GeoJSON();
var features_Zonesverdes_6 = format_Zonesverdes_6.readFeatures(json_Zonesverdes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesverdes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesverdes_6.addFeatures(features_Zonesverdes_6);
var lyr_Zonesverdes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesverdes_6, 
                style: style_Zonesverdes_6,
                popuplayertitle: 'Zones verdes',
                interactive: true,
                title: '<img src="styles/legend/Zonesverdes_6.png" /> Zones verdes'
            });
var format_Places_7 = new ol.format.GeoJSON();
var features_Places_7 = format_Places_7.readFeatures(json_Places_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_7.addFeatures(features_Places_7);
var lyr_Places_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_7, 
                style: style_Places_7,
                popuplayertitle: 'Places',
                interactive: true,
                title: '<img src="styles/legend/Places_7.png" /> Places'
            });
var format_Parcs_8 = new ol.format.GeoJSON();
var features_Parcs_8 = format_Parcs_8.readFeatures(json_Parcs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcs_8.addFeatures(features_Parcs_8);
var lyr_Parcs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcs_8, 
                style: style_Parcs_8,
                popuplayertitle: 'Parcs',
                interactive: true,
                title: '<img src="styles/legend/Parcs_8.png" /> Parcs'
            });
var format_Platges_9 = new ol.format.GeoJSON();
var features_Platges_9 = format_Platges_9.readFeatures(json_Platges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platges_9.addFeatures(features_Platges_9);
var lyr_Platges_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platges_9, 
                style: style_Platges_9,
                popuplayertitle: 'Platges',
                interactive: true,
                title: '<img src="styles/legend/Platges_9.png" /> Platges'
            });
var format_ExplanadaAnellaVerdaRFrancol_10 = new ol.format.GeoJSON();
var features_ExplanadaAnellaVerdaRFrancol_10 = format_ExplanadaAnellaVerdaRFrancol_10.readFeatures(json_ExplanadaAnellaVerdaRFrancol_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExplanadaAnellaVerdaRFrancol_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExplanadaAnellaVerdaRFrancol_10.addFeatures(features_ExplanadaAnellaVerdaRFrancol_10);
var lyr_ExplanadaAnellaVerdaRFrancol_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExplanadaAnellaVerdaRFrancol_10, 
                style: style_ExplanadaAnellaVerdaRFrancol_10,
                popuplayertitle: 'Explanada Anella Verda (R. Francolí)',
                interactive: true,
                title: '<img src="styles/legend/ExplanadaAnellaVerdaRFrancol_10.png" /> Explanada Anella Verda (R. Francolí)'
            });
var format_CampdeMart_11 = new ol.format.GeoJSON();
var features_CampdeMart_11 = format_CampdeMart_11.readFeatures(json_CampdeMart_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampdeMart_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampdeMart_11.addFeatures(features_CampdeMart_11);
var lyr_CampdeMart_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampdeMart_11, 
                style: style_CampdeMart_11,
                popuplayertitle: 'Camp de Mart',
                interactive: true,
                title: '<img src="styles/legend/CampdeMart_11.png" /> Camp de Mart'
            });
var format_Anella_12 = new ol.format.GeoJSON();
var features_Anella_12 = format_Anella_12.readFeatures(json_Anella_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anella_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anella_12.addFeatures(features_Anella_12);
var lyr_Anella_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anella_12, 
                style: style_Anella_12,
                popuplayertitle: 'Anella',
                interactive: true,
                title: '<img src="styles/legend/Anella_12.png" /> Anella'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_Referencialtopogrficterritorial_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Lmitmunicipal_3.setVisible(true);lyr_Contaminaciacstica_4.setVisible(true);lyr_Zonesboscoses_5.setVisible(true);lyr_Zonesverdes_6.setVisible(true);lyr_Places_7.setVisible(true);lyr_Parcs_8.setVisible(true);lyr_Platges_9.setVisible(true);lyr_ExplanadaAnellaVerdaRFrancol_10.setVisible(true);lyr_CampdeMart_11.setVisible(true);lyr_Anella_12.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_Referencialtopogrficterritorial_1,lyr_GoogleSatellite_2,lyr_Lmitmunicipal_3,lyr_Contaminaciacstica_4,lyr_Zonesboscoses_5,lyr_Zonesverdes_6,lyr_Places_7,lyr_Parcs_8,lyr_Platges_9,lyr_ExplanadaAnellaVerdaRFrancol_10,lyr_CampdeMart_11,lyr_Anella_12];
lyr_Lmitmunicipal_3.set('fieldAliases', {'fid': 'fid', 'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', });
lyr_Contaminaciacstica_4.set('fieldAliases', {'AGLO': 'AGLO', 'ID': 'ID', 'INDEX_LD': 'INDEX_LD', 'INDEX_LDEN': 'INDEX_LDEN', 'INDEX_LE': 'INDEX_LE', 'INDEX_LN': 'INDEX_LN', 'Valor_Acústico': 'Valor_Acústico', });
lyr_Zonesboscoses_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Zonesverdes_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Places_7.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_Parcs_8.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_Platges_9.set('fieldAliases', {'id': 'id', 'Noms': 'Noms', });
lyr_ExplanadaAnellaVerdaRFrancol_10.set('fieldAliases', {'id': 'id', });
lyr_CampdeMart_11.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Anella_12.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Lmitmunicipal_3.set('fieldImages', {'fid': 'TextEdit', 'CODIMUNI': 'TextEdit', 'NOMMUNI': 'TextEdit', 'CAPMUNI': 'TextEdit', 'AREAM5000': 'TextEdit', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'CODIVEGUE': 'TextEdit', 'NOMVEGUE': 'TextEdit', 'CAPVEGUE': 'TextEdit', 'CODIPROV': 'TextEdit', 'NOMPROV': 'TextEdit', 'CAPPROV': 'TextEdit', });
lyr_Contaminaciacstica_4.set('fieldImages', {'AGLO': 'TextEdit', 'ID': 'Range', 'INDEX_LD': 'TextEdit', 'INDEX_LDEN': 'TextEdit', 'INDEX_LE': 'TextEdit', 'INDEX_LN': 'TextEdit', 'Valor_Acústico': 'TextEdit', });
lyr_Zonesboscoses_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Zonesverdes_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Places_7.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_Parcs_8.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_Platges_9.set('fieldImages', {'id': 'TextEdit', 'Noms': 'TextEdit', });
lyr_ExplanadaAnellaVerdaRFrancol_10.set('fieldImages', {'id': 'TextEdit', });
lyr_CampdeMart_11.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Anella_12.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Lmitmunicipal_3.set('fieldLabels', {'fid': 'no label', 'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', });
lyr_Contaminaciacstica_4.set('fieldLabels', {'AGLO': 'no label', 'ID': 'no label', 'INDEX_LD': 'no label', 'INDEX_LDEN': 'no label', 'INDEX_LE': 'no label', 'INDEX_LN': 'no label', 'Valor_Acústico': 'no label', });
lyr_Zonesboscoses_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Zonesverdes_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Places_7.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_Parcs_8.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_Platges_9.set('fieldLabels', {'id': 'no label', 'Noms': 'no label', });
lyr_ExplanadaAnellaVerdaRFrancol_10.set('fieldLabels', {'id': 'no label', });
lyr_CampdeMart_11.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Anella_12.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Anella_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});