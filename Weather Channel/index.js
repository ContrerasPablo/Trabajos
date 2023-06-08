function cargarCiudad(ciudad) {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data){
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").textContent = (Math.round((data.main.temp)*10))/10
        document.querySelector("#temperatura").innerHTML += "<sup>°C</sup>"
        document.querySelector("#wicon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector("#descripcion").textContent = data.weather[0].description
        document.querySelector(".container").style.visibility = "visible"
        console.dir(data)
    })
    .fail(function() {
        alert("Ciudad no encontrada");
    })
}
document.querySelector("button").addEventListener("click", function () {
    if (!document.querySelector("input").value) {
       alert("Ingresa una ciudad.") 
    } else {
        let ciudad = document.querySelector("input").value.split(" ").join("%20")
        document.querySelector("input").value = ""
        cargarCiudad(ciudad)
    }
})
document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        if (!document.querySelector("input").value) {
            alert("Ingresa una ciudad.") 
        } else {
             let ciudad = document.querySelector("input").value.split(" ").join("%20")
             document.querySelector("input").value = ""
             cargarCiudad(ciudad)
        }
    }
})