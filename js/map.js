var mymap = L.map("mapid").setView([52.044913, -2.425082], 15);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZmxvb3Jmb3JkIiwiYSI6ImNrZ2I5eGJ0ZzAxdHkyeG80eGh3c2E2ZGIifQ.3lAPLC5Y0dBS_uyKBZj-5Q",
  }
).addTo(mymap);

var marker = L.marker([52.044913, -2.425082]).addTo(mymap);
