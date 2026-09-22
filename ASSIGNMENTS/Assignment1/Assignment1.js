
// 1. SINGLE INHERITANCE

class Animal {
    eat() {
        console.log("Animal eats food");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

console.log("1. Single Inheritance:");
let dog = new Dog();
dog.eat();
dog.bark();

// 2. MULTILEVEL INHERITANCE

class GrandParent {
    house() {
        console.log("GrandParent owns a house");
    }
}

class Parent extends GrandParent {
    car() {
        console.log("Parent owns a car");
    }
}

class Child extends Parent {
    bike() {
        console.log("Child owns a bike");
    }
}

console.log("\n2. Multilevel Inheritance:");
let child = new Child();
child.house();
child.car();
child.bike();

// 3. HIERARCHICAL INHERITANCE


class Vehicle {
    start() {
        console.log("Vehicle starts");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

console.log("\n3. Hierarchical Inheritance:");

let car = new Car();
car.start();
car.drive();

let bike = new Bike();
bike.start();
bike.ride();

// 4. MULTIPLE INHERITANCE USING MIXINS

class Student {
    study() {
        console.log("Student is studying");
    }
}

const Sports = {
    play() {
        console.log("Student is playing sports");
    }
};

const Music = {
    sing() {
        console.log("Student is singing");
    }
};

Object.assign(Student.prototype, Sports, Music);

console.log("\n4. Multiple Inheritance using Mixins:");

let student = new Student();
student.study();
student.play();
student.sing();
