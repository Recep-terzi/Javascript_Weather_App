const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'c039ab324444a7dbf26207aeb967e1b5';

const setQuery = (e) => {
    if(e.keyCode == '13')
    {
        getResult(searchBar.value)
        document.getElementById('searchBar').value = "";
    }
        
}   

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query).then(weather => {
        return weather.json()
    }).then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)} °C `
    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description;
    if (desc.innerText = result.weather[0].description === "parçalı bulutlu")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/parcali_bulutlu.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "açık")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/acik.jpg)" 
    } 
    else if (desc.innerText = result.weather[0].description === "parçalı az bulutlu")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/parcali_bulutlu.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "çok bulutlu")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/cokbulutlu.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "az bulutlu")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/azbulutlu.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "kar yağışlı")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/kar.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "hafif kar yağışlı")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/kar.jpg)" 
    }
    else if (desc.innerText = result.weather[0].description === "kapalı")
    {
        desc.innerText = result.weather[0].description;
        document.querySelector('body').style.backgroundImage = "url(images/sunny.jpg)" 
    }
    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}




const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)