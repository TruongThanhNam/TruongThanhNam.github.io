function times(a, b) {
    return a * b;
}

function square(x) {
    return times(x, x);
}

const LIGHTSPEED = 299792458;

let counter = 0;

function inCounter() {
    counter++;
}


export { square, LIGHTSPEED, counter, inCounter };

export default 'abc';
