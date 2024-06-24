//Ignore/ this was a test to see why my previous code wasn't working(there were a few typoss)
 
// Program State
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "nYtChfHENck0F5WC8GSiDIrY2YXjDn1a";

// Select the elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

// Event Handler - Async/Await
searchBtn.addEventListener("click", (event) => {
  getGif(searchInput.value);
});

async function getGif(searchTerm) {
  try {
    let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
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