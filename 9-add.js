const a = process.argv[2];
const b = process.argv[3];

const num1 = parseInt(a);
const num2 = parseInt(b);

function add(a, b) {
    return a + b;
}

console.log(add(num1, num2));