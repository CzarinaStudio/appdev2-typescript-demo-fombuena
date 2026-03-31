(() => {
    // 1️⃣ Optional parameter in function
    function generateError(msg?: string): never {
        throw new Error(msg ?? "Unknown error occurred");
    }

    // Safe call
    // generateError(); // Uncomment to test default error
    generateError("An error occurred"); // Example call

    // 2️⃣ Optional property in object
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest'; // optional property
    };

    const user: User = {
        name: 'Czarina',
        age: 22
        // role is optional
    };

    console.log(user.name); // Always safe
    console.log(user.age);
    console.log(user.role); // Might be undefined

    // 3️⃣ Nullish Coalescing operator
    let input = '';
    const didProvideInput = input ?? false; // Only replaces null or undefined

    console.log(`Input provided? ${didProvideInput}`);

    // Difference from || operator:
    const fallbackOr = input || false; // Replaces any falsy value: '', 0, null, undefined, false
    console.log(`Fallback with ||: ${fallbackOr}`);
})();