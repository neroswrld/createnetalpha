let expression = '';

function addSymbol(symbol) {
  expression += symbol;
  document.getElementById('screen').value = expression;
}

function clearScreen() {
  expression = '';
  document.getElementById('screen').value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById('screen').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('screen').value = expression;
  } catch (error) {
    expression = '';
    document.getElementById('screen').value = 'Error';
  }
}
