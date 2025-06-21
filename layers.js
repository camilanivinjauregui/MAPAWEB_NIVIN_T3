var wms_layers = [];

var format_Provincias_0 = new ol.format.GeoJSON();
var features_Provincias_0 = format_Provincias_0.readFeatures(json_Provincias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_0.addFeatures(features_Provincias_0);
var lyr_Provincias_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_0, 
                style: style_Provincias_0,
                popuplayertitle: 'Provincias',
                interactive: true,
    title: 'Provincias<br />\
    <img src="styles/legend/Provincias_0_0.png" /> AYABACA<br />\
    <img src="styles/legend/Provincias_0_1.png" /> HUANCABAMBA<br />\
    <img src="styles/legend/Provincias_0_2.png" /> MORROPON<br />\
    <img src="styles/legend/Provincias_0_3.png" /> PAITA<br />\
    <img src="styles/legend/Provincias_0_4.png" /> PIURA<br />\
    <img src="styles/legend/Provincias_0_5.png" /> PUIRA<br />\
    <img src="styles/legend/Provincias_0_6.png" /> SECHURA<br />\
    <img src="styles/legend/Provincias_0_7.png" /> SULLANA<br />\
    <img src="styles/legend/Provincias_0_8.png" /> TALARA<br />\
    <img src="styles/legend/Provincias_0_9.png" /> <br />' });
var format_Piura_1 = new ol.format.GeoJSON();
var features_Piura_1 = format_Piura_1.readFeatures(json_Piura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piura_1.addFeatures(features_Piura_1);
var lyr_Piura_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piura_1, 
                style: style_Piura_1,
                popuplayertitle: 'Piura',
                interactive: true,
                title: '<img src="styles/legend/Piura_1.png" /> Piura'
            });
var format_RVD_2 = new ol.format.GeoJSON();
var features_RVD_2 = format_RVD_2.readFeatures(json_RVD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_2.addFeatures(features_RVD_2);
var lyr_RVD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_2, 
                style: style_RVD_2,
                popuplayertitle: 'RVD',
                interactive: true,
                title: '<img src="styles/legend/RVD_2.png" /> RVD'
            });
var format_RVV_3 = new ol.format.GeoJSON();
var features_RVV_3 = format_RVV_3.readFeatures(json_RVV_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVV_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_3.addFeatures(features_RVV_3);
var lyr_RVV_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_3, 
                style: style_RVV_3,
                popuplayertitle: 'RVV',
                interactive: true,
                title: '<img src="styles/legend/RVV_3.png" /> RVV'
            });
var format_Centros_educativ_4 = new ol.format.GeoJSON();
var features_Centros_educativ_4 = format_Centros_educativ_4.readFeatures(json_Centros_educativ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centros_educativ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centros_educativ_4.addFeatures(features_Centros_educativ_4);
var lyr_Centros_educativ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centros_educativ_4, 
                style: style_Centros_educativ_4,
                popuplayertitle: 'Centros_educativ',
                interactive: true,
                title: '<img src="styles/legend/Centros_educativ_4.png" /> Centros_educativ'
            });
var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_5.addFeatures(features_Rios_5);
var lyr_Rios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });

lyr_Provincias_0.setVisible(true);lyr_Piura_1.setVisible(true);lyr_RVD_2.setVisible(true);lyr_RVV_3.setVisible(true);lyr_Centros_educativ_4.setVisible(true);lyr_Rios_5.setVisible(true);
var layersList = [lyr_Provincias_0,lyr_Piura_1,lyr_RVD_2,lyr_RVV_3,lyr_Centros_educativ_4,lyr_Rios_5];
lyr_Provincias_0.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_Piura_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_RVD_2.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_3.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_Centros_educativ_4.set('fieldAliases', {'CODLOCAL': 'CODLOCAL', 'NOMCPSIG': 'NOMCPSIG', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_LOCD': 'FTE_LOCD', 'X_LONGITUD': 'X_LONGITUD', 'Y_LATITUD': 'Y_LATITUD', 'CORD_YX': 'CORD_YX', 'NALT_LOCAL': 'NALT_LOCAL', 'CEN_EDU_L': 'CEN_EDU_L', 'CODCPSIG': 'CODCPSIG', });
lyr_Rios_5.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_Provincias_0.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', });
lyr_Piura_1.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_RVD_2.set('fieldImages', {'fid': 'TextEdit', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', 'SENTIDO': 'TextEdit', 'BASE': 'TextEdit', 'DATA': 'TextEdit', 'FECHA_ACTU': 'TextEdit', 'FUENTE': 'TextEdit', 'COD_RODADU': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_RVV_3.set('fieldImages', {'fid': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Centros_educativ_4.set('fieldImages', {'CODLOCAL': 'TextEdit', 'NOMCPSIG': 'TextEdit', 'FUENTE_LOC': 'TextEdit', 'FTE_LOCD': 'TextEdit', 'X_LONGITUD': 'TextEdit', 'Y_LATITUD': 'TextEdit', 'CORD_YX': 'TextEdit', 'NALT_LOCAL': 'TextEdit', 'CEN_EDU_L': 'TextEdit', 'CODCPSIG': 'TextEdit', });
lyr_Rios_5.set('fieldImages', {'fid': 'TextEdit', 'Rasgo_Prin': 'TextEdit', 'Rasgo_Secu': 'TextEdit', 'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Provincias_0.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_Piura_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_RVD_2.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_RVV_3.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', });
lyr_Centros_educativ_4.set('fieldLabels', {'CODLOCAL': 'no label', 'NOMCPSIG': 'no label', 'FUENTE_LOC': 'no label', 'FTE_LOCD': 'no label', 'X_LONGITUD': 'no label', 'Y_LATITUD': 'no label', 'CORD_YX': 'no label', 'NALT_LOCAL': 'no label', 'CEN_EDU_L': 'no label', 'CODCPSIG': 'no label', });
lyr_Rios_5.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'no label', 'Rasgo_Secu': 'no label', 'Nombre': 'inline label - always visible', 'Longitud': 'no label', });
lyr_Rios_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});