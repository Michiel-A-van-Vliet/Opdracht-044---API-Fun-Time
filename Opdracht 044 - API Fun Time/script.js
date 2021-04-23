const ultimateButton = document.getElementById("ultimate_button");
const jokeLocation = document.getElementById("ultimate_result");

ultimateButton.addEventListener("click", ultimateFunction);

async function fetchJoke() {
  console.log("Fetching joke");
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return jokeData;
}

async function ultimateFunction() {
  console.log("Click");
  try {
    const ultimateData = await fetchJoke();
    ultimateJoke = ultimateData.joke;
    jokeLocation.innerHTML = ultimateJoke;
  } catch {
    console.log("ultimateFunction: Error!");
  }
}
