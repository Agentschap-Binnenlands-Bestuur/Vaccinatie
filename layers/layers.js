var wms_layers = [];

        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });var format_Gemeenten_1 = new ol.format.GeoJSON();
var features_Gemeenten_1 = format_Gemeenten_1.readFeatures(json_Gemeenten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeenten_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Gemeenten_1.addFeatures(features_Gemeenten_1);var lyr_Gemeenten_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeenten_1, 
                style: style_Gemeenten_1,
                title: '<img src="styles/legend/Gemeenten_1.png" /> Gemeenten'
            });var format_Centra2_2 = new ol.format.GeoJSON();
var features_Centra2_2 = format_Centra2_2.readFeatures(json_Centra2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centra2_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Centra2_2.addFeatures(features_Centra2_2);var lyr_Centra2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centra2_2, 
                style: style_Centra2_2,
                title: '<img src="styles/legend/Centra2_2.png" /> Centra2'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Gemeenten_1.setVisible(true);lyr_Centra2_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Gemeenten_1,lyr_Centra2_2];
lyr_Gemeenten_1.set('fieldAliases', {'NAAM': 'NAAM', });
lyr_Centra2_2.set('fieldAliases', {'Gemeente': 'Gemeente', 'straat': 'straat', 'huisnr': 'huisnr', });
lyr_Gemeenten_1.set('fieldImages', {'NAAM': 'TextEdit', });
lyr_Centra2_2.set('fieldImages', {'Gemeente': 'TextEdit', 'straat': 'TextEdit', 'huisnr': 'TextEdit', });
lyr_Gemeenten_1.set('fieldLabels', {'NAAM': 'no label', });
lyr_Centra2_2.set('fieldLabels', {'Gemeente': 'no label', 'straat': 'no label', 'huisnr': 'no label', });
lyr_Centra2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});