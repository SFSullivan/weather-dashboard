$(document).ready(function() {

    var apiKey = 'e0ed1fc47c1a1e616628ccbc08bf80db'
    var searchCity;
    var searchBttn = document.querySelector('#searchBttn')
    var day1 = moment().format('MMMM Do');
    
    //dates for cards
    $('#first_day').text(day1);
    // day2
    // day3
    // day4
    // day5

    searchBttn.onclick = function () {
        console.log('click works')
        lookupCity = textSearch.value;
        saveCityData = (lookupCity);
        getWeather(lookupCity);
        //storeData(lookupCity)
    }

    function getWeather(lookupCity) {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + lookupCity + '&limit=5&appid=' + apiKey)
            .then(function (res) {
                return res.json();
            })
            .then(function(data) {
                var lat = data[0].lat
                var lon = data[0].lon
                console.log(lat, lon)
                $('#city_searched').text(lookupCity)

                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey)
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data) {
                        console.log(data);

                        var i = 0;

                        $('.forecast').each(function () {
                            var weatherForecast = data.daily[i].weather[0].description;

                            console.log(weatherForecast);
                            $(this).text(weatherForecast);
                            i++;
                        })
                    
                    })
            })
    }

    function saveCityData(searchHistory) {
        var searchedArray = JSON.parse(localStorage.getItem('history')) || [];
        searchedArray.push(searchHistory);

        localStorage.setItem('history', JSON.stringify(historyArray));
        showHistory();
    }

    function showHistory() {
        var searchedArray = JSON.parse(localStorage.getItem('history'));
        var historyEl = $('#history')

        if (!searchedArray) {
            return;
        }

        searchedArray[0].innerHTML = '';
        console.log(historyEl)
    }

})