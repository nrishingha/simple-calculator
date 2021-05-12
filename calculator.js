const answer = document.querySelector('#answer');
const buttons = document.querySelectorAll('button');

// add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the answer is not empty then only do the calculation
    if (answer.value !== '') {
      // calculate and show the answer to display input
      answer.value = eval(answer.value);
    }
  } else if (clickedButtonValue === 'AC') {
    // clear everything on display
    answer.value = '';
  } else if (clickedButtonValue === 'DEL') {
    answer.value = answer.value.substr(0, answer.value.length - 1);
  } else {
    // otherwise concatenate it to the display
    answer.value += clickedButtonValue;
  }
}
