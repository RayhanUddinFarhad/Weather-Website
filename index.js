const api = `582255c5ea9939669c0bc0afbf4a2e92`;


const loadData = (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`


    fetch (url)
    .then (response => response.json())
    .then (data => displayWeather(data))


}

const displayWeather = (city) => {
    console.log (city.weather[0])


    const cityName = document.getElementById('name');
    const temp = document.getElementById ('temp');
    const lead = document.getElementById ('lead');
    cityName.innerHTML = city.name;
    temp.innerHTML = city.main.temp;
    lead.innerHTML = city.weather[0].main;







 }

 const search = (city) => { 


    const searchInp = document.getElementById ('searchInp').value;


    loadData (searchInp)


    
 }





loadData ('chittagong')