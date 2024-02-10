function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#userInput");
  let key = "b1d355353afe3oe89t1c624ba0cd84bf";
  let prompt = `Generate a funny insult about ${instructionsInput.value}`;
  let context =
    "You are the funniest stand-up comedian in the world. Your mission is to generate a hilarious 3 sentence joke that will make the user laugh, using the prompt above, in basic html.";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<span class= "blink"> Busy generating fun for you... </span>`;

  axios.get(url).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
