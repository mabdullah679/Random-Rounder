startingValue = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];

function randomizeButton() {
  var container = document.getElementById("printOuts");
  var numOfIterationsInput = document.getElementById("numOfIterationsInput");
  if (numOfIterationsInput) {
    var numOfIterations = parseInt(numOfIterationsInput, 10);

    if (numOfIterationsInput) {
      var inputText = numOfIterationsInput.value;
      console.log("InputText: ", inputText);
      document.getElementById("");
      var numOfIterations = parseInt(inputText, 10);
      console.log("Parsed Value: ", numOfIterations);
      if (!isNaN(numOfIterations)) {
        bufferMessage = [
          "Gimme a min",
          "Give it a minute",
          "Just a sec",
          "Loading...",
        ];
        let randomInstance = Math.ceil(Math.random() * bufferMessage.length);
        // alert(bufferMessage[randomInstance]);
        console.log("NumOfIterations: " + numOfIterations);
      } else {
        // alert("Please enter a valid integer.");
      }

      for (let x = 0; x < numOfIterations; x++) {
        var randomizerBase = Math.random();
        var randomIndex;
        if (randomizerBase >= 0.5) {
          randomIndex = Math.random() * startingValue.length;
          var randomIterationOfStartingValue = randomIndex * 10;
        } else {
          randomIndex = Math.random() * startingValue.length;
          var randomIterationOfStartingValue = randomIndex * 10;
        }
        var splitAtDecimal = randomIterationOfStartingValue
          .toString()
          .split(".");
        console.log("this is splitAtDecimal: ", splitAtDecimal);
        var decimals = splitAtDecimal[1];
        console.log("decimals are: ", decimals);
        for (y = 0; y <= decimals.length; y++)
          var arrayOfDecimals = decimals.split("");
        arrayOfDecimals[1] = ".";
        var floatedArray = arrayOfDecimals.join("");
        console.log("This is the float version of the array: ", floatedArray);
        var secondPlace = parseFloat(arrayOfDecimals[0]);
        console.log("this is the second place value: ", secondPlace);
        if (secondPlace < 5) {
          console.log("the second place value is less than 5");
          var result = Math.floor(randomIterationOfStartingValue);
          console.log("The rounded down value is " + result);
          // alert("The rounded down value is " + result);
        } else if (secondPlace >= 5) {
          console.log("the second place value is greater than or equal to 5");
          var result = Math.ceil(randomIterationOfStartingValue);
          console.log("The rounded up value is " + result);
          // alert("The rounded up value is " + result);
        }
        if (!isNaN(numOfIterations)) {
          paragraph = document.createElement("p");
          paragraph.textContent =
            randomIterationOfStartingValue +
            " is the Random Number For This Iteration.";
          container.appendChild(paragraph);
          var finalParagraph = document.createElement("p");
          finalParagraph.textContent =
            "The Final Value of " +
            randomIterationOfStartingValue +
            " is " +
            result;
          container.appendChild(finalParagraph);
        }
        console.log(
          "\n" +
            randomIterationOfStartingValue +
            " is the random number of this iteration."
        );
        // alert(
        //   randomIterationOfStartingValue +
        //     " is the random number of this iteration."
        // );
      }
    }
  }
}
function resetButton(){
  var toDeleteElement =  document.getElementById("printOuts");
  if (toDeleteElement) {
    toDeleteElement.innerText = "";
  }
}
