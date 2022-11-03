// call the function

document.querySelector(".calculate").addEventListener("click", function () {
  document.getElementById("km").style.display = "none";
  document.getElementById("calories").style.display = "none";
});

document.querySelector(".clear").addEventListener("click", clear);

function steps_converter() {
  //declaring steps
  const steps = document.getElementById("steps").value;
  //conversion from steps to Km
  let index = (steps * 0.0008045).toFixed(2);
  //conversion from Km to calories burned
  let index1 = (index * 55).toFixed(2);
  console.log("Your steps in Km: " + index);
  console.log("Your calories burned: " + index1);

  //condition to check if step field == 0 or not

  if (steps != 0) {
    const km = document.getElementById("km");
    const calories = document.getElementById("calories");

    //displaying results on the screen
    km.innerHTML = "Km walked = " + index + "km";
    calories.innerHTML = "Calories burned = " + index1 + " Cal";

    //hiding the loader and the output

    document.getElementById("km").style.display = "block";
    document.getElementById("calories").style.display = "block";
  } else {
    function error() {
      document.getElementById("km").style.display = "block";
      document.getElementById("calories").style.display = "block";
      //displaying an error message
      document.getElementById("km").innerHTML =
        "<span style = 'color:black; background-color:pink; border-radius:10px; padding:3px;'> Error: Enter Number of steps first!";

      //setting timout to hide the message after 5 seconds
    }
  }
}

//clear function
function clear() {
  document.getElementById("steps").value = "";
  document.getElementById("km").value = "";
  document.getElementById("calories").value = "";
}
