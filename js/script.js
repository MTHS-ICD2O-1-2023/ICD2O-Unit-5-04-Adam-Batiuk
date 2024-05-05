// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const tuesday = document.getElementById("tuesday").checked
  const thursday = document.getElementById("thursday").checked

  // process
  if ((tuesday == true) || (thursday == true) || ()) {
    randomNumber = randomNumber * (-1)
    document.getElementById("answer").innerHTML = "The random number is: " + randomNumber
  } else {
    document.getElementById("answer").innerHTML = "The random number is: " + randomNumber
  }
}