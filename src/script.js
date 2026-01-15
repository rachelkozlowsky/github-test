let currentInput = '';
let displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    const lastChar = currentInput.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        // Cuidado: eval é perigoso em produção real, mas aceitável para este teste simples
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Erro';
    }
    updateDisplay();
}