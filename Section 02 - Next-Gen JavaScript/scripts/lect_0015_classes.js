class Human {
    constructor(gender) {
        this.gender = gender;
    }

    myGenderIs() {
        console.log('I am a ' + this.gender);
    }
}

class Person extends Human {
    constructor(name, gender) {
        super(gender);  //instantiates inherited class
        this.name = name;
    }

    myNameIs() {
        console.log('You can call me ' + this.name);
    }

}

let max_guy = new Person('Max', 'male');

console.log(max_guy.myNameIs());
console.log(max_guy.myGenderIs());

// let max_girl = structuredClone(max_guy);
// max_girl.name = 'Maxine';
// max_girl.gender = 'female';

// console.log(max_guy.myNameIs());
// console.log(max_guy.myGenderIs());

// // console.log(max_girl.myNameIs());
// // console.log(max_girl.myGenderIs());

// console.log(max_girl);

