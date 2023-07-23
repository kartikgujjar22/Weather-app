// const url = 'https://openweather43.p.rapidapi.com/weather?q=%3CREQUIRED%3E&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=%3CREQUIRED%3E&units=standard';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '27e151475cmsh3de06730d9ef2d4p180b6cjsn30f5cba52404',
//     'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
//   }
// };

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicgo?unit=metric&Group=us&key=FCZ48TGCF7LG4RC4NAVH8U6EV&contentType=json';

const weatherContainer = document.getElementById('weather-container');

// const searchBox = document.querySelector('#searchBox');
// const searchData = searchBox.value;

const searchBox = document.querySelector("#search-whole input");
const searchBtn = document.querySelector("#search-whole button");

// const params = {
//   query: searchData,
//   apiKey: apiKey
// };

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector("#city-value").innerHTML = data.resolvedAddress;
    document.querySelector("#description-value").innerHTML = data.description;
    document.querySelector("#temperature-value").innerHTML = data.currentConditions.temp + "℉"; 
    document.querySelector("#humidity-value").innerHTML = data.currentConditions.humidity + " %";
    document.querySelector("#pressure-value").innerHTML = data.currentConditions.pressure + " mbar";
    document.querySelector("#sunrise-value").innerHTML = data.currentConditions.sunrise;
    document.querySelector("#sunset-value").innerHTML = data.currentConditions.sunset;
    document.querySelector("#windSpeed-value").innerHTML = data.currentConditions.windspeed + "km/hr";

  })
  .catch(error => {
    console.error('Error:', error);
  });

  searchBtn.addEventListener("click", ()=>{

  })




// const url = 'https://forecast9.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '27e151475cmsh3de06730d9ef2d4p180b6cjsn30f5cba52404',
// 		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

