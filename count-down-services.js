const _counter = new WeakMap();
const _action = new WeakMap();

class CountDown {
    constructor(counter = 0, action = () => console.log('Horray')) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    dec() {
        let counter = _counter.get(this);
        counter--;
        _counter.set(this, counter);
        if (counter <= 0) {
            _action.get(this)();
        }
    }
    get getPrivateCounter() {
        return _counter.get(this);
    }
}

export { CountDown };