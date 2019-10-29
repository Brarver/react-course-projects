
class Person {
    constructor(name= 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    getGreeting() {
        let gretting = super.getGreeting();

        if (this.home) {
            gretting += ` I'm visiting from ${this.home}`
        }
        return gretting;
    }
}

const me = new Traveler('Brian Carver', 36, 'Chicago');
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Traveler()
console.log(other.getDescription());