  // Function to run when the button is clicked
  function signInClicked() {
    // You can add more functionality here
    // For now, let's just open the "signin.html" file
    window.location.href = 'signin.html';
}

// Attach the function to the button click event
document.getElementById('signinButton').addEventListener('click', signInClicked);