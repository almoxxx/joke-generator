function generateJoke(event) {
  event.preventDefault();

  new Typewriter("#joke", {
    strings:
      "Why don't scientists trust atoms? Because they make up everything!",
    autoStart: true,
  });
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
