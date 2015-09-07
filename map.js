function initMap() {
  var myLatLng = {lat: -37.818116, lng: 144.959229};
  var icon = "http://www.clker.com/cliparts/0/V/t/A/W/N/google-maps-gris.svg";
  var label = 'General Assembly : 12A/45 William Street, Melbourne VIC 3000';
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: {scaledSize : new google.maps.Size(60, 60), url: icon},
    title: 'General Assembly : 12A/45 William Street, Melbourne VIC 3000'
  });
}