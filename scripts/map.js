// select DOM elements
// get coordinates
// get weather
// display the info to the user
// draw a marker on the map with the place of interest

const mymap = L.map("mapid").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGVub2hraW0iLCJhIjoiY2syeDFtZzlvMDdjbjNib21tODh6dm1rZCJ9.fvIAC_Jb9j0iWGOcsaEDPw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets"
  }
).addTo(mymap);
