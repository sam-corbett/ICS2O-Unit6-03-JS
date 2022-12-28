// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JS/sw.js", {
    scope: "/ICS2O-Unit6-03-JS/",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    let tempInKelvin = 0
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.weather[0].icon)
    document.getElementById("api-image").innerHTML =
      '<img src="http://openweathermap.org/img/wn/' +
      jsonData.weather[0].icon +
      '@2x.png" alt="API image" class="center" width= 20% height 20%' +
      ">"

    tempInKelvin = jsonData.main.temp
    console.log(tempInKelvin)

    let tempInCelsius = tempInKelvin - 273.15

    if (jsonData.main.temp != "none") {
      document.getElementById("temperature").innerHTML =
        "<p>Temperature: " + tempInCelsius.toFixed(0) + "°C</p>"
    } else {
      document.getElementById("temperature").innerHTML =
        "<p>Temperature: unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
