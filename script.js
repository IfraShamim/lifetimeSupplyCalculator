function Calculate() {
    // Get the input values
    let favoriteSnack = document.getElementById("favoriteSnack").value;
    let currentAge = document.getElementById("currentAge").value;
    let maximunAge = document.getElementById("maximunAge").value;
    let esteemedAmountPerDay = document.getElementById("esteemedAmountPerDay").value;
  
    // Validate that all values are provided
    if (!favoriteSnack || !currentAge || !maximunAge || !esteemedAmountPerDay) {
      // Show an error message if any field is empty
      document.getElementById("para").innerHTML = "Please fill out all the fields.";
      document.getElementById("para").style.color = 'red';
      return;
    }
  
    // Convert values to numbers for the calculation
    currentAge = parseInt(currentAge);
    maximunAge = parseInt(maximunAge);
    esteemedAmountPerDay = parseInt(esteemedAmountPerDay);
  
    // Additional validation: Ensure age and amount values are numbers
    if (isNaN(currentAge) || isNaN(maximunAge) || isNaN(esteemedAmountPerDay)) {
      document.getElementById("para").innerHTML = "Please enter valid numbers.";
      return;
    }
  
    // Calculate the remaining years and total amount needed
    let remainingYears = maximunAge - currentAge;
    let total = remainingYears * 365 * esteemedAmountPerDay;
  
    // Display the result
    document.getElementById(
      "para"
    ).innerHTML = `You will need ${total} of ${favoriteSnack} to last you until the ripe old age of ${maximunAge}.`;
  }
  