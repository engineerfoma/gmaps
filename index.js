let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 12,
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://s389vla.storage.yandex.net/rdisk/2b47af891d12d77367eb273297aa3e2a7fa1ce3a7496f2f4cc614e71ebd1de4f/665e4e18/mPEjiwyE_VmnljqvzJSa3BNgtfOczpd10DpUMiTtTi2F4WzxrHg1vqfZ1koCA8yqb1LfA71ArKO-g8kZURwJAQ==?uid=1505363355&filename=75E-C-Global.kml&disposition=attachment&hash=&limit=0&content_type=text%2Fxml&owner_uid=1505363355&fsize=160244&hid=bff2ee19f0552a84e077f544510cf570&media_type=text&tknv=v2&etag=6a2aa9bcfe856af645583ddd99bd81b4&ts=61a047b1db600&s=5ce09d8fc49bb1df26fb0f412d5891c68d02cd6fe998d3d1f9604b5066df2646&pb=U2FsdGVkX183g7Ykk6n77SiOWg5m7cNss334CfftDerVxcroBDMBHd8A6Tzi1vePKfPPcWBk0Y0BtCuNoj7B8opJDV3EQE9ILnI0y6yAnD8",
    // suppressInfoWindows: true,
    map: map,
  });

  map.data.setStyle({
    opacity: 0,
    fillOpacity : 0
  });
  
  // ctaLayer.addListener("click", (kmlEvent) => {
  //   const text = kmlEvent.featureData.name;

  //   showInContentWindow(text);
  // });

  // function showInContentWindow(text) {
  //   const sidebar = document.getElementById("sidebar");

  //   sidebar.innerHTML = text;
  // }
}

initMap();

