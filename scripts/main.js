/**
Итак, ваш заголовок текста был изменён на "Hello world!" с помощью JavaScript. Мы сделали это с помощью вызова функции querySelector (), захватив ссылку на наш заголовок и сохранив её в переменной, названной myHeading. Это очень похоже на то, что мы делали в CSS с помощью селекторов. Если вы хотите что-то сделать с элементом, то для начала вам нужно его выбрать.

После этого, вы устанавливаете значение переменной myHeading в textContent свойство (которое представляет собой контент заголовка) "Hello world!".
 */

// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Dev Andrew Maxim";

// if (myHeading.textContent === "Dev Andrew Maxim") console.log("AllWorks");

// var myList = document.querySelector("li");
// myList.textContent = "Hello From Andrew";

// document.querySelector("html").onclick = function () {
//   alert("Ouch! Stop poking me!");
// };

// document.querySelector("h1").onclick = function () {
//   alert("oh jaja touch me again");
// };

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/MainAfter.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");


function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

