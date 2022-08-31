// spread - get all elements of array or props of obj and add to new arr/obj

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5];

console.log(newArr);

const initialObj = {
    name: 'Max',

    printMyName() {
        console.log(this.name);
    }
}

const newObj = {
    ...initialObj,
    age: 28
}

console.log(newObj);

newObj.printMyName();

//rest - merge arguments into array

const arrOfArgs = (...args) => {
    console.log(args);
}

arrOfArgs('tennis', 'ping pong', 'badminton')