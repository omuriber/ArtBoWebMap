var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Ruta_1 = new ol.format.GeoJSON();
var features_Ruta_1 = format_Ruta_1.readFeatures(json_Ruta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_1.addFeatures(features_Ruta_1);
var lyr_Ruta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_1, 
                style: style_Ruta_1,
                popuplayertitle: 'Ruta',
                interactive: false,
    title: 'Ruta<br />\
    <img src="styles/legend/Ruta_1_0.png" /> CENTRO HISTÓRICO<br />\
    <img src="styles/legend/Ruta_1_1.png" /> CHAPINERO CENTRAL<br />\
    <img src="styles/legend/Ruta_1_2.png" /> CHAPINERO NORTE<br />\
    <img src="styles/legend/Ruta_1_3.png" /> MACARENA<br />\
    <img src="styles/legend/Ruta_1_4.png" /> SAN FELIPE<br />\
    <img src="styles/legend/Ruta_1_5.png" /> TEUSAQUILLO<br />\
    <img src="styles/legend/Ruta_1_6.png" /> <br />' });
var format_Paradas_2 = new ol.format.GeoJSON();
var features_Paradas_2 = format_Paradas_2.readFeatures(json_Paradas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradas_2.addFeatures(features_Paradas_2);
var lyr_Paradas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradas_2, 
                style: style_Paradas_2,
                popuplayertitle: 'Paradas',
                interactive: true,
    title: 'Paradas<br />\
    <img src="styles/legend/Paradas_2_0.png" /> CENTRO HISTÓRICO<br />\
    <img src="styles/legend/Paradas_2_1.png" /> CHAPINERO CENTRAL<br />\
    <img src="styles/legend/Paradas_2_2.png" /> CHAPINERO NORTE<br />\
    <img src="styles/legend/Paradas_2_3.png" /> MACARENA<br />\
    <img src="styles/legend/Paradas_2_4.png" /> SAN FELIPE<br />\
    <img src="styles/legend/Paradas_2_5.png" /> TEUSAQUILLO<br />\
    <img src="styles/legend/Paradas_2_6.png" /> <br />' });

lyr_WazeWorld_0.setVisible(true);lyr_Ruta_1.setVisible(true);lyr_Paradas_2.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_Ruta_1,lyr_Paradas_2];
lyr_Ruta_1.set('fieldAliases', {'Name': 'Name', 'StopCount': 'StopCount', });
lyr_Paradas_2.set('fieldAliases', {'Name': 'Name', 'RouteName': 'RouteName', 'Sequence': 'Sequence', 'Direccion': 'Direccion', });
lyr_Ruta_1.set('fieldImages', {'Name': 'TextEdit', 'StopCount': 'TextEdit', });
lyr_Paradas_2.set('fieldImages', {'Name': 'TextEdit', 'RouteName': 'TextEdit', 'Sequence': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Ruta_1.set('fieldLabels', {'Name': 'inline label - always visible', 'StopCount': 'no label', });
lyr_Paradas_2.set('fieldLabels', {'Name': 'no label', 'RouteName': 'no label', 'Sequence': 'no label', 'Direccion': 'no label', });
lyr_Paradas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});