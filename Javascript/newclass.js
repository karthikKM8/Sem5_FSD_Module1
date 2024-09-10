class Animal {
    legs = 4; 
    printLegs = () => {
        console.log(this.legs);
    }
}

const animal1 = new Animal();
animal1.printLegs(); // Output: 4