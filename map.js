mapboxgl.accessToken = 'pk.eyJ1IjoidGJhZ3NrIiwiYSI6ImNsMm5laGNhOTF6dnYzYnA5MGJtMXpvcngifQ._0rxrMjSKfFcl1mgeHFYmw';
 nice_long=7.27178;
 nice_lat=43.6961;


 valeur=nice_long,nice_lat;
  var map = new mapboxgl.Map({
      container: 'map', // identifiant du conteneur de la carte
      style: 'mapbox://styles/tbagsk/cl2u69hc4002r15peu5w5guzu', // URL du style à utiliser
      center: [2.344986207607467,48.88176214109474], // position par defaut [lng, lat]
      zoom: 5 // zoom par defaut
  });

var bouton=document.getElementById('bouton_map');
var bouton2=document.getElementById('bouton_map2');
bouton.addEventListener('click',charleville);
bouton2.addEventListener('click',nice);
function charleville()
{
  map.fitBounds([
[4.684368761565794, 49.805151505352505], // southwestern corner of the bounds
[4.758012723414038, 49.68972151681267] // northeastern corner of the bounds
]);
}
function nice()
{
   map.fitBounds([
[7.2484907626936845, 43.72687816777721], // southwestern corner of the bounds
[7.325241423493902, 43.685569938272195] // northeastern corner of the bounds
]);
}

new mapboxgl.Marker()
    .setLngLat([4.71, 49.76])
    .addTo(map);


new mapboxgl.Marker()
  .setLngLat([7.27178,43.6961])
  .addTo(map);

var trips = [{ 
    coordinates: [2.35, 48.85],
}, { 
    coordinates: [-74, 40.71],
}, { 
    coordinates: [-7.99, 31.62],
}]
trips.forEach(trip => {
    new mapboxgl.Marker()
        .setLngLat(trip.coordinates)
        .setPopup(new mapboxgl.Popup({ anchor: 'top' }) // ajoute une popup
            .setHTML('<p>Voyage à Marrakech</p>'))
        .addTo(map);
});