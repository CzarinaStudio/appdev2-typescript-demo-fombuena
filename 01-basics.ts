let userName: string = "Czarina";
let userAge = 20;

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

console.log(add(10))
console.log(add(10, 6))