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
  },
};
