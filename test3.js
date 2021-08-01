let counter = 0; // private to module, cannot access from outside

function getCounter() {
    return counter;
}

function setCounter(val = 0) {
    counter += val;
}

export { getCounter, setCounter };