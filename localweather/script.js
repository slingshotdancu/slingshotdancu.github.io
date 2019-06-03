(function() {
    let url = "http://api.openweathermap.org/data/2.5/forecast?id=4543762";
    let apiKey = "3118da63bc3ab70397a7e97b0cea4af8";
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
        xhr.open(method, urls, true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            }
        };
        xhr.send();
     }
        
//        httpRequest.onreadystatechange = function ()
//        httpRequest.open("GET", url + "&APPID=" + apiKey);
//        httpRequest.send();
//    }
    
/*    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);
            }
            alert("page done loading!");
        }
    }
 */   //handle xhr success
    function updateUISuccess(responseText) {
        let response = JSON.parse(responseText);
        let conditions = response.weather[0].main;
        let degC = response.main.temp - 273.15;
        let degCInt = Math.floor(degC);
        let degF = degC * 1.8 + 32;
        let degFInt = Math.floor(degF);
        console.log("Conditions: " + conditions);
        let weatherBox = document.getElementById("weather");
        weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
    }
}();
