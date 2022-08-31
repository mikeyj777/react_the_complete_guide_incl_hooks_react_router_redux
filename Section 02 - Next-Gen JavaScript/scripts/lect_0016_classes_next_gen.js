class Human {
    gender = 'female';

    myGenderIs = () =>  {
        console.log('I am a ' + this.gender);
    }
}

// hum = new Human;
// hum.myGenderIs();

class Person extends Human {
    
    name = 'Max';
    

    myNameIs = () => {
        console.log('You can call me ' + this.name);
    }

}

let max = new Person();

console.log(max.myNameIs());
console.log(max.myGenderIs());

// let max_girl = structuredClone(max_guy);
// max_girl.name = 'Maxine';
// max_girl.gender = 'female';

// console.log(max_guy.myNameIs());
// console.log(max_guy.myGenderIs());

// // console.log(max_girl.myNameIs());
// // console.log(max_girl.myGenderIs());

// console.log(max_girl);

