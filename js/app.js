var citySearch = document.querySelector("#citySubmit")
var apiKey = "0342aa5e399ecd0cd610e5858ede6f30"
var cityObj = coordinatesFetch(searchedCity)


function coordinatesFetch(searchedCity) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + searchedCity + '&appid=' + apiKey)
    .then(response => response.json())
    .then(data => console.log(JSON.parse(JSON.stringify(data))))
};