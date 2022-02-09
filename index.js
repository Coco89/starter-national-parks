//SELECTING ELEMENTS ON THE DOM

console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area);

const stat = document.querySelector("div .stat");
console.log(stat);

const hello = document.querySelector(".hello");
console.log(hello);

const buttons = document.querySelectorAll("button");
console.log(buttons);

// Working with NodeList

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
//   }

const divList = document.querySelectorAll("div");

for (let element of divList.values()) {
  console.log(element);
}

// for (let i = 0; i < divList.length; i++) {
//   const element = divList[i];
//   console.log(element);
// }

// Supporting older browsers

// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});

// NOTE: Note: Recall that in JavaScript, arrays are list-like objects. The Array class is used to construct new arrays. The prototype constructor is commonly used to add new properties and methods to the Array object. You can find a list of available instance methods for Array.prototype in Mozilla's JavaScript Reference.