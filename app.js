//Fetches advice
const fetchData = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      mode: "cors",
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(`Fetch data error ${err}`);
  }
};

//Adds text to number and advice
const addContent = () => {
  const numberTextSpace = document.querySelector(".number-text-space");
  const advice = document.querySelector(".advice");

  fetchData()
    .then((response) => {
      numberTextSpace.textContent = response.slip.id;
      advice.textContent = `"${response.slip.advice}"`;
    })
    .catch((err) => {
      console.log(`Add content error ${err}`);
    });
};

//Executes on click
const handleDiceClick = (() => {
  const dice = document.querySelector(".dice-wrapper");

  dice.addEventListener("click", () => {
    addContent();
  });
})();

//Adds the first number and advice
addContent();
