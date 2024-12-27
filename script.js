function convertUnits() {
  let value = document.getElementById("value").value;
  let unitFrom = document.getElementById("unit-from").value;
  let unitTo = document.getElementById("unit-to").value;
  let result = document.getElementById("result");

  if (!value) {
      result.innerHTML = "Please enter a valid number.";
      return;
  }

  let convertedValue;


  if (unitFrom === "kg" && unitTo === "gm") {
      convertedValue = value * 1000;
      result.innerHTML = value + " kg = " + convertedValue + " gm";
  } else if (unitFrom === "gm" && unitTo === "kg") {
      convertedValue = value / 1000;
      result.innerHTML = value + " gm = " + convertedValue + " kg";
  }

  else if (unitFrom === "mm" && unitTo === "cm") {
      convertedValue = value / 10;
      result.innerHTML = value + " mm = " + convertedValue + " cm";
  } else if (unitFrom === "cm" && unitTo === "mm") {
      convertedValue = value * 10;
      result.innerHTML = value + " cm = " + convertedValue + " mm";
  }

  else if (unitFrom === "ml" && unitTo === "l") {
      convertedValue = value / 1000;
      result.innerHTML = value + " ml = " + convertedValue + " l";
  } else if (unitFrom === "l" && unitTo === "ml") {
      convertedValue = value * 1000;
      result.innerHTML = value + " l = " + convertedValue + " ml";
  }

  else if (unitFrom === "sec" && unitTo === "min") {
      convertedValue = value / 60;
      result.innerHTML = value + " sec = " + convertedValue + " min";
  } else if (unitFrom === "min" && unitTo === "sec") {
      convertedValue = value * 60;
      result.innerHTML = value + " min = " + convertedValue + " sec";
  }

  else if (unitFrom === "hr" && unitTo === "min") {
      convertedValue = value * 60;
      result.innerHTML = value + " hr = " + convertedValue + " min";
  } else if (unitFrom === "min" && unitTo === "hr") {
      convertedValue = value / 60;
      result.innerHTML = value + " min = " + convertedValue + " hr";
  }

  else {
      result.innerHTML = "Invalid conversion!";
  }
}
