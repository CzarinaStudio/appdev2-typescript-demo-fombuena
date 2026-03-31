(() => {

    // Function Return Value Types
    function add(a: number, b: number): number {
        return a + b
    }

    console.log(add(5, 10)) // 15
    // console.log(add("5", 10)) // Error: Type 'string' is not assignable to type 'number'

    // Special Type `void` - function returns nothing
    function log(message: string): void {
        console.log(message)
    }

    log("Hello, TypeScript!")

    // Special Type `never` - function never finishes normally
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }

    // Function as Types (for callbacks)
    function performJob(cb: (msg: string) => void) {
        cb('Job Completed!')
    }

    const logMsg = (msg: string): void => {
        console.log(msg)
    }

    performJob(logMsg)

    // Object with method
    type User = {
        name: string
        age: number
        greet: () => string
    }

    const user: User = {
        name: "Czarina",
        age: 22,
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()

})()