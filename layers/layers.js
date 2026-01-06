var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_locaisdevotao_1 = new ol.format.GeoJSON();
var features_locaisdevotao_1 = format_locaisdevotao_1.readFeatures(json_locaisdevotao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locaisdevotao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locaisdevotao_1.addFeatures(features_locaisdevotao_1);
var lyr_locaisdevotao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_locaisdevotao_1, 
                style: style_locaisdevotao_1,
                popuplayertitle: 'locais de votação',
                interactive: false,
                title: '<img src="styles/legend/locaisdevotao_1.png" /> locais de votação'
            });
var format_setorescensitarios_2 = new ol.format.GeoJSON();
var features_setorescensitarios_2 = format_setorescensitarios_2.readFeatures(json_setorescensitarios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setorescensitarios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setorescensitarios_2.addFeatures(features_setorescensitarios_2);
var lyr_setorescensitarios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setorescensitarios_2, 
                style: style_setorescensitarios_2,
                popuplayertitle: 'setores censitarios',
                interactive: true,
    title: 'setores censitarios<br />\
    <img src="styles/legend/setorescensitarios_2_0.png" /> 0,00 - 2085,71<br />\
    <img src="styles/legend/setorescensitarios_2_1.png" /> 2085,71 - 2263,04<br />\
    <img src="styles/legend/setorescensitarios_2_2.png" /> 2263,04 - 3322,88<br />\
    <img src="styles/legend/setorescensitarios_2_3.png" /> 3322,88 - 4577,52<br />\
    <img src="styles/legend/setorescensitarios_2_4.png" /> 4577,52 - 7923,08<br />\
    <img src="styles/legend/setorescensitarios_2_5.png" /> 7923,08 - 10235,12<br />\
    <img src="styles/legend/setorescensitarios_2_6.png" /> 10235,12 - 13120,67<br />\
    <img src="styles/legend/setorescensitarios_2_7.png" /> 13120,67 - 27919,23<br />\
    <img src="styles/legend/setorescensitarios_2_8.png" /> 27919,23 - 31373,99<br />\
    <img src="styles/legend/setorescensitarios_2_9.png" /> 31373,99 - 61707,37<br />' });
var format_RS_Municipios_2023_3 = new ol.format.GeoJSON();
var features_RS_Municipios_2023_3 = format_RS_Municipios_2023_3.readFeatures(json_RS_Municipios_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RS_Municipios_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_Municipios_2023_3.addFeatures(features_RS_Municipios_2023_3);
var lyr_RS_Municipios_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS_Municipios_2023_3, 
                style: style_RS_Municipios_2023_3,
                popuplayertitle: 'RS_Municipios_2023',
                interactive: false,
                title: '<img src="styles/legend/RS_Municipios_2023_3.png" /> RS_Municipios_2023'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_locaisdevotao_1.setVisible(true);lyr_setorescensitarios_2.setVisible(true);lyr_RS_Municipios_2023_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_locaisdevotao_1,lyr_setorescensitarios_2,lyr_RS_Municipios_2023_3];
lyr_locaisdevotao_1.set('fieldAliases', {'fid': 'fid', 'ano': 'ano', 'codigo_ibge': 'codigo_ibge', 'uf': 'uf', 'zona': 'zona', 'secao': 'secao', 'LAT_FINAL': 'LAT_FINAL', 'LONG_FINAL': 'LONG_FINAL', 'municipios_todos_nome': 'municipios_todos_nome', 'municipios_todos_latitude': 'municipios_todos_latitude', 'municipios_todos_longitude': 'municipios_todos_longitude', 'CD_TSE': 'CD_TSE', 'ID_LOCAL': 'ID_LOCAL', });
lyr_setorescensitarios_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'pess_resp_dppo': 'pess_resp_dppo', 'morad_dppo': 'morad_dppo', 'var_mor_dppo': 'var_mor_dppo', 'valor_rend_med_pess_resp_dppo': 'valor_rend_med_pess_resp_dppo', 'var_rend_med_pess_resp_dppo': 'var_rend_med_pess_resp_dppo', });
lyr_RS_Municipios_2023_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_locaisdevotao_1.set('fieldImages', {'fid': 'TextEdit', 'ano': 'TextEdit', 'codigo_ibge': 'TextEdit', 'uf': 'TextEdit', 'zona': 'TextEdit', 'secao': 'TextEdit', 'LAT_FINAL': 'TextEdit', 'LONG_FINAL': 'TextEdit', 'municipios_todos_nome': 'TextEdit', 'municipios_todos_latitude': 'TextEdit', 'municipios_todos_longitude': 'TextEdit', 'CD_TSE': 'TextEdit', 'ID_LOCAL': '', });
lyr_setorescensitarios_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'pess_resp_dppo': 'TextEdit', 'morad_dppo': 'TextEdit', 'var_mor_dppo': 'TextEdit', 'valor_rend_med_pess_resp_dppo': 'TextEdit', 'var_rend_med_pess_resp_dppo': 'TextEdit', });
lyr_RS_Municipios_2023_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_locaisdevotao_1.set('fieldLabels', {'fid': 'no label', 'ano': 'no label', 'codigo_ibge': 'no label', 'uf': 'no label', 'zona': 'no label', 'secao': 'no label', 'LAT_FINAL': 'no label', 'LONG_FINAL': 'no label', 'municipios_todos_nome': 'no label', 'municipios_todos_latitude': 'no label', 'municipios_todos_longitude': 'no label', 'CD_TSE': 'no label', 'ID_LOCAL': 'no label', });
lyr_setorescensitarios_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'CD_SETOR': 'no label', 'AREA_KM2': 'no label', 'NM_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'CD_BAIRRO': 'no label', 'NM_BAIRRO': 'no label', 'CD_NU': 'no label', 'NM_NU': 'no label', 'v0001': 'no label', 'v0002': 'no label', 'v0003': 'no label', 'v0004': 'no label', 'v0005': 'no label', 'v0006': 'no label', 'v0007': 'no label', 'pess_resp_dppo': 'no label', 'morad_dppo': 'no label', 'var_mor_dppo': 'no label', 'valor_rend_med_pess_resp_dppo': 'inline label - always visible', 'var_rend_med_pess_resp_dppo': 'hidden field', });
lyr_RS_Municipios_2023_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_RS_Municipios_2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});