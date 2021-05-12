const answer = document.querySelector('#answer');
const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (answer.value !== '') {
      answer.value = eval(answer.value);
    }
  } else if (clickedButtonValue === 'AC') {
    answer.value = '';
  } else if (clickedButtonValue === 'DEL') {
    answer.value = answer.value.substr(0, answer.value.length - 1);
  } else {
    answer.value += clickedButtonValue;
  }
}
