import { funcM } from './m.js';

function funcP() {
    return `I am inside func P`;
}

console.log(`${funcM()} - Called by p module`);

export { funcP };