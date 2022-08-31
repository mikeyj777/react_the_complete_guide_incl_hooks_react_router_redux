q = document.getElementById("ppp")

function printMyName (name) {
    q.innerHTML = name;
}

printMyName("bob")

const printMyName_const = (name) => {
    q.innerHTML = name;
    console.log('hey');
}

printMyName_const('2oob');

const oneline = number => number * 2;

console.log(oneline(2))