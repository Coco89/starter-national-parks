// UPDATING THE DOM

//changing the content
const descriptions = document.querySelectorAll(".description-display");

//the inner text property
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  console.log(content);
}

//truncating the text
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    // content = content + "..."; //adds ellipsis to the end of truncated text
    content = content + '<a href="#">...</a>'; //turns ellipsis into a link at the end of truncated text
  }

  console.log(content);
  // desc.innerText = content; //this line updates the HTML shown in the browser

  //INNER HTML PROPRTY
  desc.innerHTML = content; //this line interprets the HTML concatenated on line 19 properly
}

//changing the style
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  console.log(ratingValue);

  //   if (ratingValue > 4.7) {
  //     rating.style.fontWeight = "bold";
  //     rating.style.color = "#3ba17c";
  //   }

  // the classlist property
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

//creating DOM elements
const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

//removing DOM elements
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);


// source: https://github.com/Thinkful-Ed/starter-national-parks/tree/Updating_DOM