window.addEventListener('DOMContentLoaded', async () =>{
    // Seleccionamos los elementos del DOM
    let ubicacion = document.querySelector('#ubicacion');
    let temperaturaValor = document.querySelector('#temperatura-valor');
    let temperaturaDescripcion = document.querySelector('#temperatura-descripcion');
    let iconoDom = document.querySelector('#icono-animado');
    const apiClave = 'a9a0c550e7617ee2a2601fa5dc985f49';


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( async (posicion) =>{
            let longitud = posicion.coords.longitude;
            let latitud = posicion.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiClave}&units=metric&lang=es`;
            
            try{
                const response = await fetch(url);
                const datos = await response.json();

                let temperatura = Math.round(datos.main.temp);
                temperaturaValor.textContent = `${temperatura} °C`;
                ubicacion.textContent = datos.name;
                temperaturaDescripcion.textContent = datos.weather[0].description.toUpperCase();
                
                let icono = datos.weather[0].main;
                iconoDom.src = obtenerIcono(icono);

            }
            catch (error){
                console.error('Error al cargar el mapa de Openweather map:', error);
            }
        });
    }
});

// Función para obtener icono de clima
const obtenerIcono = (icono) => {
    switch(icono){
        case 'Clouds': return 'img/clima/cloudy-day-1.svg';
        case 'Clear': return 'img/clima/day.svg';
        case 'Snow': return 'img/clima/snowy-1.svg';
        case 'Rain': return 'img/clima/rainy-1.svg';
        case 'Drizzle': return 'img/clima/rainy-2.svg';
        case 'Thunderstorm': return 'img/clima/thunder.svg';
        case 'Atmosphere': return 'img/clima/weather.svg';
        default: return 'img/clima/weather_sunset.svg';
    }
};