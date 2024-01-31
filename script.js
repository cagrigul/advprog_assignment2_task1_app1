require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
    var webmap = new WebMap({
        portalItem: {
            id: "5576d4d9c7e94a008699636f7c1d37cf" // Your webmap ID
        }
    });

    webmap.load().then(function() {
        // Change the basemap of the webmap after it has loaded
        webmap.basemap = "dark-gray";

        var view = new MapView({
            map: webmap,
            container: "viewDiv",
            zoom: 6
        });
    });
});
