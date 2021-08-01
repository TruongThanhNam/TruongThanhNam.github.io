let _id, _name, _age;

function randomId() {
    return Math.floor(Math.random() * 100);
}

class Person {
    constructor(name = 'no name', age = 'no age') {
        _id = randomId();
        _name = name;
        _age = age;
    }
    toString() {
        return `Id: ${_id} - Name: ${_name} - Age: ${_age}`
    }
}

export { Person };