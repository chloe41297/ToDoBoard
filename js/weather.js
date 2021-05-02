
const weatherInfo = document.querySelector(".weather__temp");
const weatherImg = document.querySelector(".weather__icon");
const COORDS = 'coords';
const API_KEY = config.API_KEY;


function getWeather(lat,lng){
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
		`).then(function(response){
	return response.json();
})
	.then(function(json){
		const temperature = Math.round(json.main.temp);
		const weatherIcon = json.weather[0].icon;
        const weatherState = json.weather[0].description;
		const place = json.sys.country;
		weatherInfo.innerText = `${weatherState}\n${temperature}℃`;

		
		const image = new Image();
		image.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
		image.classList.add("weatherImage");
		weatherImg.appendChild(image);

	})
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude,longitude);
    console.log(position);
}
function handleGeoError(){
	alert("can't access geoInfo");
}
function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	} else{
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);

	}
}

function init(){
    
	loadCoords();
}
init();