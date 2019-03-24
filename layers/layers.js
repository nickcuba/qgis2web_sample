var wms_layers = [];

        var lyr_osm_bw_0 = new ol.layer.Tile({
            'title': 'osm_bw',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> Small Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_3.png" /> Spaceport Airport<br />'
        });

lyr_osm_bw_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_osm_bw_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'Name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'Type': 'Type', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'Hidden', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'comments': 'Hidden', 'wikidataid': 'Hidden', 'Type': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'type': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'Type': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});