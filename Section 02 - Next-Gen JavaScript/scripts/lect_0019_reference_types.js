// using the spread operator to make a deep copy of an ojbect doesn't seem to 
// work for "class constructor" method

class Person {
    name = 'Mike'

    whatsMyName = () => {
        console.log(this.name);
    }
}

let mike = new Person();

let amber =  {
    ...mike
}

amber.name = 'amber'

mike.name = 'Michael James'

amber.whatsMyName();

mike.whatsMyName();



const Person_const = {
    name: 'Mike',

    whatsMyName_const() {
        console.log(this.name);
    }

}

const mike_const = Person_const;

mike_const.whatsMyName_const();

let amber_const = {
    ...mike_const
}

amber_const.whatsMyName_const();

amber_const.name = 'amber_c'

amber_const.whatsMyName_const();

mike_const.whatsMyName_const(); 

mike_const.name = "Michael James const"

amber_const.whatsMyName_const();

mike_const.whatsMyName_const();
