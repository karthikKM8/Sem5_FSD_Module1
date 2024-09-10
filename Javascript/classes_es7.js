// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `This is a ${this.name}.`;
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    makeSound() {
        return `${this.name} barks.`;
    }

    describe() {
        return `This is a ${this.breed} named ${this.name}.`;
    }
}

// Example usage
const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.describe()); // Output: This is a Golden Retriever named Buddy.
console.log(myDog.makeSound()); // Output: Buddy barks.