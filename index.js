const api = `582255c5ea9939669c0bc0afbf4a2e92`;


const loadData = (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`


    fetch (url)
    .then (response => response.json())
    .then (data => displayWeather(data))


}

const displayWeather = ({name, main, weather}) => {


    const cityName = document.getElementById('name');
    const temp = document.getElementById ('temp');
    const lead = document.getElementById ('lead');
   if (cityName && temp && lead) {

    cityName.innerHTML = name;
    temp.innerHTML = main.temp;
    lead.innerHTML = weather[0].main;


   }

   else {

    alert ('Weather not found')
   }






 }

 const search = (city) => { 


    const searchInp = document.getElementById ('searchInp');
    const search = searchInp.value;
    const cityName = document.getElementById('name');



    if (search) {

        loadData (search)}

    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Input a value',
          })
    }



    searchInp.value = ""


    
 }





loadData ('chittagong')