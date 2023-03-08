const appNode = document.querySelector("#app");
const input = document.querySelector("#input-data");

const button = document.querySelector("#add");
button.addEventListener("click", function(event) {
  event.preventDefault(); // Detener acción predeterminada del botón
  // Aquí es donde agregarías tu propio código para manejar el evento del botón
});

const kelvinToCelsius = (tempInKelvin) => {
  const kelvin = 273.15;
  const tempInCelsius = Math.floor(tempInKelvin - kelvin);

  return tempInCelsius;
};

button.addEventListener("click", () => {
  const location = input.value;
  const baseUrl = "https://api.openweathermap.org/";
  const apiKey = "f8396fcccfe05d620a5a5ee79e6b22d2";
  const url = `${baseUrl}data/2.5/weather?q=${location}&appid=${apiKey}&lang=sp`;
  window
  .fetch(url)
    .then((response) => response.json())
    .then((weatherData) => {
      const { name, sys, main, weather,} = weatherData;
      const remove = document.createElement('span');
      remove.className = 'absolute top-0 cursor-pointer	right-2 text-xl hover:text-3xl hover:text-white';
      remove.textContent = 'x'; 

      remove.addEventListener("click", function(event) {
        container.remove();
      });

      const resultHtml = `
      <div class="card-details rounded-xl	">
      <p class="city text-xl mb-3.5 font-medium">${name}<span class="ml-2.5 font-extrabold	">${sys.country}</span></p>
      <p class="temperature text-5xl font-extrabold	text-center	">${kelvinToCelsius(main.temp)}<span class="ml-2.5">°C</span></p>
    </div>
    <div class="card-image">
      <img src="https://openweathermap.org/img/wn/${
        weather[0].icon
      }@2x.png" alt="clima">
      <p class="city text-xl mb-3.5 font-medium text-center	">${weather[0].description}</p>
    </div>
      `;
  const container = document.createElement("div");
  container.className = "weather-card flex flex-col items-center justify-around relative";
  container.innerHTML = resultHtml;
  container.appendChild(remove)

  appNode.appendChild(container)
  })

 

});

const buttonRemove = document.querySelector("#remove");

remove.addEventListener("click", function(event) {
  container.remove();
});







  



