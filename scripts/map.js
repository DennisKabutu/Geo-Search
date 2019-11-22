// defining variables
const keyWeather = "3273a2625ba19b34df4e656691e48b57";
const mapApiKey =
  "pk.eyJ1IjoiZGVub2hraW0iLCJhIjoiY2syeDFtZzlvMDdjbjNib21tODh6dm1rZCJ9.fvIAC_Jb9j0iWGOcsaEDPw";
const city = "Nairobi";

// select DOM elements
const temp = document.querySelector(".temp");
const icon = document.querySelector(".weather-icon");
const tempDesc = document.querySelector(".temp-desc");
// get coordinates
function getCoordinates() {
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapApiKey}`
  )
    .then(res => {
      const data = res.json();
      return data;
    })
    .then(data => {
      let long = data.features[0].geometry.coordinates[0];
      let lat = data.features[0].geometry.coordinates[1];
    });
}

getCoordinates();

// get weather
function getWeather(lat, long) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyWeather}`
  )
    .then(res => {
      const data = res.json();
      return data;
    })
    .then(data => {
      console.log(data.coord.lat);
      // console.log(data.coord.long);
    });
}
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
