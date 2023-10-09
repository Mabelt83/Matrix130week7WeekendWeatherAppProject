const apikey = "3a59d76748c3d0026258187f5346f214";
               const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=miami";

               const searchBox = document.querySelector(".search input");
               const searchBtn = document.querySelector(".search button");
               const weatherIcon = document.querySelector("weather-icon")

               async function checkWeather(city){
                const response = await fetch(apiUrl + city + '&appid=${apiKey}');


                if(response.status == 404){
                    document.querySelector(".error").style.display = "block"
                    document.querySelector(".weather").style.display = "none"
                }else{
                }



                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                if(data.checkWeather[0].main == "Clouds"){
                    waetherIcon.scr = "images/clouds.png"

                }

                else if(data.weather[0].main == "Clear"){
                    weatherIcon.scr = "images/clear.png"
                }

                else if(data.weather[0].main == "Rain"){
                    weatherIcon.scr = "images/rain.png"
                }

                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.scr = "images/drizzle.png"
                }

                else if(data.weather[0].main == "Mist"){
                    weatherIcon.scr = "images/Mist.png"
                }

                document.querySelector(".weather").style.display = "block";
            }

               
               

            searchBtn.addEventListener("click", ()=>{
               checkWeather(searchBox.value);
            })