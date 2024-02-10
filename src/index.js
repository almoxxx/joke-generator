function generateJoke(event) {
  event.preventDefault();
  alert("I'm working!");
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML =
    "Why don't scientists trust atoms? Because they make up everything!";
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
