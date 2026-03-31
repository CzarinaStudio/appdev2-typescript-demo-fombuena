(() => {
    // Special Type - null
    let a: null;

    a = null
    // a = "Hi" // Error: Type 'string' is not assignable to type 'null'

    let b: null | string;

    b = null
    b = "Hello, TypeScript!"
    // b = 10 // Error: Type 'number' is not assignable to type 'string | null'

    // Special Type - undefined
    let c: undefined;

    c = undefined
    // c = null // Error
    // c = "Hi" // Error

    let d: undefined | string;

    d = undefined
    d = "Hi there!"
    // d = null // Error
    // d = 10 // Error

    // Combined Example
    function greet(message: string | null | undefined) {
        if (message === null) {
            console.log("Message is null")
        } else if (message === undefined) {
            console.log("Message is undefined")
        } else {
            console.log(`Message: ${message}`)
        }
    }

    greet(null)
    greet(undefined)
    greet("Hello World!")
})()