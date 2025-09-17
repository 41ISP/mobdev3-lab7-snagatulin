const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");



let currentExpression = ''; 


function handleButton(button) {
  const value = button.target.textContent;
  if(value === "=")
  {
    if (currentExpression.includes("%")) {
    const numbers = input.textContent.split("%")
    const res = (numbers[0] / 100) * numbers[1]
    display.textContent = res;
    currentExpression = res.toString();
    } 
      {
      const res = eval(currentExpression.replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-'));
      display.textContent = res;
      currentExpression = res.toString();
    }
  }
  else if (value === 'C') {
    currentExpression = '';
    display.textContent = '';
  } else if(value === '+/-')
  {
    currentExpression = currentExpression * -1;
    display.textContent = currentExpression;
    currentExpression = currentExpression.toString();
  }
  else if(value ==='%')
  {
   const res = eval(currentExpression.replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-'));
    display.textContent = res + "%";
    currentExpression = res.toString();
  }
  else {
    currentExpression += value;
    display.textContent = currentExpression;
  }
}


buttons.forEach(button => {
  button.addEventListener('click', handleButton);
});