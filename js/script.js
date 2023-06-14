// Copyright (c) Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2023
// This file contains the JS functions for index.html

window.onload = getCat = async () => {
  try {
    // Get cat image
    const badStatusCodes = [ 100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 599 ]
    let randomInt = Math.floor(Math.random() * badStatusCodes.length)
    let randomStatusCode = badStatusCodes[randomInt]

    const catImage = "https://http.cat/" + randomStatusCode
    console.log(randomInt)
    // ouptut cat image
    document.getElementById("cat-image").innerHTML =
      "<img id='donut' src=" + catImage + "></img>"
  } catch (err) {
    console.error(err)
  }
}
getCat()