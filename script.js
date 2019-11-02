
var bounds = null;
    

    var map_20ea431e550a448f8c8640cd9eff1520 = L.map(
        'map_20ea431e550a448f8c8640cd9eff1520', {
        center: [51.45623, 22.60933],
        zoom: 13,
        maxBounds: bounds,
        layers: [],
        worldCopyJump: false,
        crs: L.CRS.EPSG3857,
        zoomControl: true,
        });

    
    
    var tile_layer_a65c3b684bd5416584eae83a9a301503 = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
        "attribution": null,
        "detectRetina": false,
        "maxNativeZoom": 18,
        "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "opacity": 1,
        "subdomains": "abc",
        "tms": false
}).addTo(map_20ea431e550a448f8c8640cd9eff1520);
    
            var marker_cluster_0be0f3a1f1f348258c2fc834d9e6b631 = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_0be0f3a1f1f348258c2fc834d9e6b631);
            
    
            var circle_marker_86461db49fde4f97ba4cf010d5e3faff = L.circleMarker(
                [51.45623, 22.60933],
                {
  "bubblingMouseEvents": true,
  "color": "red",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "red",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_0be0f3a1f1f348258c2fc834d9e6b631);
            
    
            var popup_a1f545c51dab4f5fb8dc519348445e89 = L.popup({maxWidth: '300'
            
            });

            
                var html_2f6417e0e5f846e0b2312d88c73d803a = $(`<div id="html_2f6417e0e5f846e0b2312d88c73d803a" style="width: 100.0%; height: 100.0%;">Status: Zły<br>PM 2.5: 96<br>PM 10: 114</div>`)[0];
                popup_a1f545c51dab4f5fb8dc519348445e89.setContent(html_2f6417e0e5f846e0b2312d88c73d803a);
            

            circle_marker_86461db49fde4f97ba4cf010d5e3faff.bindPopup(popup_a1f545c51dab4f5fb8dc519348445e89)
            ;

            
        
    
            var marker_cluster_fa21d7ea6e31438a913bc8f5fe459b3d = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_fa21d7ea6e31438a913bc8f5fe459b3d);
            
    
            var circle_marker_5638e99dee5a4cda8784983a940b2b60 = L.circleMarker(
                [51.46642, 22.60753],
                {
  "bubblingMouseEvents": true,
  "color": "black",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "black",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_fa21d7ea6e31438a913bc8f5fe459b3d);
            
    
            var popup_ffd56f13eb03418dab091595b5f7d1f5 = L.popup({maxWidth: '300'
            
            });

            
                var html_f7c2004c9ba649adb8b8ebec20de3a16 = $(`<div id="html_f7c2004c9ba649adb8b8ebec20de3a16" style="width: 100.0%; height: 100.0%;">Status: Bardzo zły<br>PM 2.5: 156<br>PM 10: 184</div>`)[0];
                popup_ffd56f13eb03418dab091595b5f7d1f5.setContent(html_f7c2004c9ba649adb8b8ebec20de3a16);
            

            circle_marker_5638e99dee5a4cda8784983a940b2b60.bindPopup(popup_ffd56f13eb03418dab091595b5f7d1f5)
            ;

            
        
    
            var marker_cluster_94a4170584d94f4f8c751511ba086fbb = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_94a4170584d94f4f8c751511ba086fbb);
            
    
            var circle_marker_5675d3fd9c184a4e80e8c19a1b53d467 = L.circleMarker(
                [51.4707331, 22.6089767],
                {
  "bubblingMouseEvents": true,
  "color": "black",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "black",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_94a4170584d94f4f8c751511ba086fbb);
            
    
            var popup_372526bc23754cb485e8a55b1a2b2856 = L.popup({maxWidth: '300'
            
            });

            
                var html_1c70f71e42524443a728ac4bc3839e02 = $(`<div id="html_1c70f71e42524443a728ac4bc3839e02" style="width: 100.0%; height: 100.0%;">Status: Bardzo zły<br>PM 2.5: 270<br>PM 10: 311</div>`)[0];
                popup_372526bc23754cb485e8a55b1a2b2856.setContent(html_1c70f71e42524443a728ac4bc3839e02);
            

            circle_marker_5675d3fd9c184a4e80e8c19a1b53d467.bindPopup(popup_372526bc23754cb485e8a55b1a2b2856)
            ;

            
        
    
            var marker_cluster_1548dc6fe435472c924479081c0d3240 = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_1548dc6fe435472c924479081c0d3240);
            
    
            var circle_marker_4db909076e934500ba74e32aef179c99 = L.circleMarker(
                [51.4797281, 22.5984428],
                {
  "bubblingMouseEvents": true,
  "color": "black",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "black",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_1548dc6fe435472c924479081c0d3240);
            
    
            var popup_dd9a078eb9dd42efa012172e1f22ff34 = L.popup({maxWidth: '300'
            
            });

            
                var html_18fa94e77e614c738adfa3a91acac972 = $(`<div id="html_18fa94e77e614c738adfa3a91acac972" style="width: 100.0%; height: 100.0%;">Status: Bardzo zły<br>PM 2.5: 395<br>PM 10: 501</div>`)[0];
                popup_dd9a078eb9dd42efa012172e1f22ff34.setContent(html_18fa94e77e614c738adfa3a91acac972);
            

            circle_marker_4db909076e934500ba74e32aef179c99.bindPopup(popup_dd9a078eb9dd42efa012172e1f22ff34)
            ;

            
        
    
            var marker_cluster_c26474e4826141abb6b09364964762f9 = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_c26474e4826141abb6b09364964762f9);
            
    
            var circle_marker_8325bc8ec1c747dda8ff4d5f41c93d2a = L.circleMarker(
                [51.4605429, 22.6103907],
                {
  "bubblingMouseEvents": true,
  "color": "black",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "black",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_c26474e4826141abb6b09364964762f9);
            
    
            var popup_ba92f5f62b9a4aeab674e2e7a00a1537 = L.popup({maxWidth: '300'
            
            });

            
                var html_34c0e58dc5f6430f8adbcc4aa005fb54 = $(`<div id="html_34c0e58dc5f6430f8adbcc4aa005fb54" style="width: 100.0%; height: 100.0%;">Status: Bardzo zły<br>PM 2.5: 225<br>PM 10: 266</div>`)[0];
                popup_ba92f5f62b9a4aeab674e2e7a00a1537.setContent(html_34c0e58dc5f6430f8adbcc4aa005fb54);
            

            circle_marker_8325bc8ec1c747dda8ff4d5f41c93d2a.bindPopup(popup_ba92f5f62b9a4aeab674e2e7a00a1537)
            ;

            
        
    
            var marker_cluster_37b4f04730fe4c1ab090807d81a81d63 = L.markerClusterGroup({});
            map_20ea431e550a448f8c8640cd9eff1520.addLayer(marker_cluster_37b4f04730fe4c1ab090807d81a81d63);
            
    
            var circle_marker_dfc87277ebb44ce0855b3ed8c80200df = L.circleMarker(
                [51.4585051, 22.6049089],
                {
  "bubblingMouseEvents": true,
  "color": "red",
  "dashArray": null,
  "dashOffset": null,
  "fill": true,
  "fillColor": "red",
  "fillOpacity": 0.2,
  "fillRule": "evenodd",
  "lineCap": "round",
  "lineJoin": "round",
  "opacity": 1.0,
  "radius": 20,
  "stroke": true,
  "weight": 3
}
                )
                .addTo(marker_cluster_37b4f04730fe4c1ab090807d81a81d63);
            
    
            var popup_09719bd6c84c474fbba4f15d65a1a4ad = L.popup({maxWidth: '300'
            
            });

            
                var html_afe1533edb5d4a94a22a0cd02ae40dac = $(`<div id="html_afe1533edb5d4a94a22a0cd02ae40dac" style="width: 100.0%; height: 100.0%;">Status: Zły<br>PM 2.5: 111<br>PM 10: 126</div>`)[0];
                popup_09719bd6c84c474fbba4f15d65a1a4ad.setContent(html_afe1533edb5d4a94a22a0cd02ae40dac);
            

            circle_marker_dfc87277ebb44ce0855b3ed8c80200df.bindPopup(popup_09719bd6c84c474fbba4f15d65a1a4ad)
            ;

