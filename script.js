let weather = {
  apiKey: "241b78e47f85c9ca25ba912f079ffb61",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind; //data is taken out of that object and made into a variable
    console.log(name, icon, description, temp, humidity, speed);
    document.getElementById("city").innerText = "Weather in " + name;
    document.getElementById("temp").innerText = Math.round(temp) + "°C";
    document.getElementById("icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("description").innerText = description;
    document.getElementById("humidity").innerText =
      "Humidity: " + humidity + "%";
    document.getElementById("wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/3840x2160/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.getElementById("search-bar").value);
  },
};

document.querySelector("#search button").addEventListener("click", function () {
  weather.search();
});
document
  .getElementById("search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
