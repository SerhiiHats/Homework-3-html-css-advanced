let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
const resultSum = document.querySelector("#result-sum");
const resultMinus = document.querySelector("#result-minus");
const resultMultiplication = document.querySelector("#result-multiplication");
const resultDivision = document.querySelector("#result-division");

function getArrayNumerOfValue(a, b) {
    return [Number(a), Number(b)];
}

function validityInput() {
    return value1.validity.valid && value2.validity.valid;
}

document.querySelector("#btn-sum").onclick = function () {
    if (!validityInput()) {
        return;
    }
    if (window.Worker) {
        const worker = new Worker("js/worker1.js");
        const arrNumber = getArrayNumerOfValue(value1.value, value2.value);
        worker.postMessage(arrNumber);
        worker.onmessage = message => {
            resultSum.textContent = message.data;
        }
    }
};

document.querySelector("#btn-minus").onclick = () => {
    if (!validityInput()) {
        return;
    }
    if (window.Worker) {
        const worker = new Worker("js/worker2.js")
        const arrNumber = getArrayNumerOfValue(value1.value, value2.value);
        worker.postMessage(arrNumber);
        worker.onmessage = message => {
            resultMinus.textContent = message.data;
        }
    }
};

document.querySelector("#btn-multiplication").onclick = function () {
    if (!validityInput()) {
        return;
    }
    if (window.Worker) {
        const worker = new Worker("js/worker3.js")
        const arrNumber = getArrayNumerOfValue(value1.value, value2.value);
        worker.postMessage(arrNumber);
        worker.onmessage = message => {
            resultMultiplication.textContent = message.data;
        }
    }
};

document.querySelector("#btn-division").onclick = function () {
    if (!validityInput()) {
        return;
    }
    if (window.Worker) {
        const worker = new Worker("js/worker4.js")
        const arrNumber = getArrayNumerOfValue(value1.value, value2.value);
        worker.postMessage(arrNumber);
        worker.onmessage = message => {
            resultDivision.textContent = message.data;
        }
    }
};