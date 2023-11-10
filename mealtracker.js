// Function to run when the button is clicked
 function signInClicked(){
    window.location.href = 'signin.html';
}

// Attach the function to the button click event
document.getElementById('signinButton').addEventListener('click', signInClicked);

//bmi calculation
function BmiCalc() {
    window.location.href = 'bmi.html';
}

document.getElementById('CalcBmi').addEventListener('click', BmiCalc);

//age group
function agegrpClick(){
    window.location.href = 'agegrp.html';
}

document.getElementById('ageGrp').addEventListener('click', agegrpClick);

function dietPlan(){
    window.location.href = 'dietplan.html';
}
document.getElementById('dietplan').addEventListener('click', dietPlan);
