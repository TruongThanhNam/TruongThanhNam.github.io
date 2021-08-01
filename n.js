import { funcP } from './p.js';

function funcN() {
    return 'I am inside func N';
}

console.log(`${funcP()} - Called by n module`);

export { funcN };