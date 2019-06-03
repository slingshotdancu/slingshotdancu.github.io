(function() {
    let url = "https://api.openweathermap.org/data/2.5/forecast?id=4543762";
    let apiKey = "3118da63bc3ab70397a7e97b0cea4af8";
    let weatherTitle = document.getElementById("weatherTitle");

    makeRequest();
    
    (function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
        alert("Your browser does not support geolocation!");
        }
    })();
    
    function showPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat + " " + long);
    }
    
     function makeRequest() {
        let xhr = new XMLHttpRequest();
        let method = "GET";
        let urls = url + "&APPID=" + apiKey;
        xhr.open(method, urls);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        let responseObj = JSON.parse(xhr.responseText);
            console.log(responseObj.city.name);
            weatherTitle.innerHTML = "<h2>" + responseObj.city.name + "</h2>";
            }
        };
        xhr.send();
     
         
         
     //handle xhr success
    function updateUISuccess(responseText) {
//        let response = JSON.parse(xhr.responseText);
        let conditions = response.weather[0].main;
        let degC = response.main.temp - 273.15;
        let degCInt = Math.floor(degC);
        let degF = degC * 1.8 + 32;
        let degFInt = Math.floor(degF);
        console.log("Conditions: " + conditions);
        let weatherBox = document.getElementById("weather");
        weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
    }
         }
})();
