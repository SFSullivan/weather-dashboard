var citySearch = document.querySelector("#citySubmit")
var apiKey = "0342aa5e399ecd0cd610e5858ede6f30"
function cityFetch(searchedCity) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + searchedCity + '&appid=' + apiKey)
        .then(response => response.json())
}
citySearch.addEventListener("click", function() {
    var searchedCity = document.querySelector("#searchedCity").value
    cityFetch(searchedCity)
    // .then(data => console.log(data)).finally(()=>console.log("test"));
    console.log(searchedCity)
})