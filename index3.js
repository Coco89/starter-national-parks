const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

//SORTING
// Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   console.log("You clicked the name sorter");
// });

//The default behavior of a link is to follow the link that was clicked
//In this case, the browser is simply reloading the page.
//That clearly isn't what you want. You can stop this from happening by adding the preventDefault().
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("You clicked the name sorter");
// });

//SORTING TODO

// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1.  Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

// FINISHED SORTING by Name
// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
// nameSorter.addEventListener("click", nameSorterClickHandler);

// FINISHED SORTING by Rating
// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkAName = parkA.querySelector(".rating-display .value").innerText;
  const parkBName = parkB.querySelector(".rating-display .value").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querSelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `ratingSorter` link
// const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
// ratingSorter.addEventListener("click", ratingSorterClickHandler);

// The code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
};

//DOM Content Loaded
// console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);
