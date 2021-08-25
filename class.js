class Support {
    name;
    designantion = 'support web dev';
    constructor(name) {
        this.name = name;

    }
    startSession() {
        console.log('start a support session');

    }
}

const aamir = new Support('aamir khan');
const salman = new Support('solaiman');
console.log(aamir);