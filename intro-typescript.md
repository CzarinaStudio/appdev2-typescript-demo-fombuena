# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```bash
npm install -g typescript
What is TypeScript

TypeScript is a superset of JavaScript that adds static typing and compile-time checks, then compiles down to plain JavaScript.

Why use TypeScript
Adds type safety to catch errors early
Improves tooling and developer experience (auto-complete, IntelliSense)
Helps maintain large projects
Supports modern JavaScript features
How to Compile a TypeScript File to JavaScript
tsc filename.ts
How to Add Restrictions if Errors Exist
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
01-basics.ts

Demonstrates type inference, explicit typing, and what happens when assigning mismatched types. Allows hands-on practice with basic TypeScript syntax.

02-vanilla-js-types.js

Shows how JavaScript’s typeof operator works at runtime to check variable types. Highlights the difference between TypeScript’s static types and JavaScript’s dynamic types.

03-flexible-types.ts

Illustrates the any type, which allows variables to hold any value type. Shows flexibility but also warns about losing type safety.

04-arrays-objects.ts

Covers arrays with union types, object typing with nested properties, and using the Record type for flexible objects. Demonstrates strong typing for collections.

05-enum.ts

Introduces enums, specifically string enums, to group related constant values and assign them safely to variables.

06-alternative-to-enum.ts

Demonstrates using literal types as an alternative to enums. Instead of defining an enum, specific string values are directly assigned as possible types for a variable.
I created a UserRole type and added logic to print different access levels. This helped me understand how literal types can restrict values without using enums.

07-custom-type-role.ts

Shows type aliases (custom types) and complex object typing.
I defined a Role type and a User type, created example users, and wrote a function that prints user permissions. This taught me how to combine literal types, objects, and arrays for type safety.

08-functions.ts

Covers function typing, including argument types, return types, and optional/default parameters.
I modified the code to include multiple functions with different signatures and experimented with returning different types. This clarified how TypeScript ensures correct function usage.

09-special-types.ts

Introduces special types like unknown, void, never, and type assertions.
I created examples using each type and tested type-safe assignments and function behavior, which helped me understand TypeScript’s stricter type-checking.

10-form.html & 10-type-narrowing.ts

Demonstrates DOM interaction in TypeScript and type narrowing with runtime checks.
I added sample form inputs and used type guards (typeof, instanceof) to safely manipulate values. This showed how TypeScript works with real HTML forms and enforces type safety at runtime.

11-optional.ts

Covers optional chaining (?.) and nullish coalescing (??) for safer property access.
I experimented with objects that may or may not have certain properties and applied these operators to prevent runtime errors. This taught me safer ways to access nested data.