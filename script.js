let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Substitui "^" por Math.pow()
        let expression = display.value.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');
        display.value = eval(expression);
    } catch {
        display.value = 'Erro';
    }
}
