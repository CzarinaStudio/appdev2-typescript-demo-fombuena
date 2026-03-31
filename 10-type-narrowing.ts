(() => {
    // Get input element (may be null)
    const inputEl = document.getElementById('user-name');

    // Unsafe access (don't do this)
    // console.log(inputEl.value); // Error if null

    // 1️⃣ Safe null check
    if (!inputEl) {
        throw new Error('Element not found!');
    }
    console.log(`Value after null check: ${inputEl.value}`);

    // 2️⃣ Non-null assertion operator
    const inputElNonNull = document.getElementById('user-name')!; // TypeScript trusts it exists
    console.log(`Non-null assertion value: ${inputElNonNull.value}`);

    // 3️⃣ Optional chaining
    console.log(`Optional chaining value: ${inputEl?.value}`);

    // 4️⃣ Type assertion (tell TypeScript the element is HTMLInputElement)
    const inputElCast = document.getElementById('user-name') as HTMLInputElement | null;
    if (inputElCast) {
        console.log(`Type assertion value: ${inputElCast.value}`);
    }
})();