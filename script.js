let apiKey = "f0ebe617dd735414756c18bc34a0fea5"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
let searchBox = document.querySelector(".searchBox")

async function checkWeather(city) {
    let response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data);

    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp1").innerText=data.main.temp;
    document.querySelector(".humidity").innerText=data.main.humidity;
    document.querySelector(".wind").innerText=Math.round(data.wind.speed)
}

document.querySelector(".searchbtn").addEventListener('click',()=>{
    checkWeather(searchBox.value)
})