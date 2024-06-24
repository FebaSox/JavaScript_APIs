"use strict";
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHEY_KEY = "nYtChfHENck0F5WC8GSiDIrY2YXjDn1a";


let searchBtn = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let gifEle = document.querySelector("#imageContainer > img");
let feedbackEle = document.querySelector("#feedback");

searchBtn.addEventListener("click", (event) => {
    getGif(searchInput.value);
});

async function getGif(searchTerm) {
    try {
      let res = await fetch(`${GIPHY_URL}?api_key=${GIPHEY_KEY}&s=${searchTerm}`);
      console.log(res);
      let body = await res.json();
  
      if (body.meta.status === 200) {
        // Show the gif on the DOM
        gifEle.src = body.data.images.original.url;
        searchInput.value = "";
        feedbackEle.textContent = "";
      } else {
        feedbackEle.textContent = body.meta.msg;
      }
    } catch (err) {
      console.error(err);
      // Show the error message on the DOM
      feedbackEle.textContent = err.message;
    }
  }