let hobbies = ["Singing", "Gaming", "Cooking"]

let userList: Array<string | number>;

userList = ["Czarina", "Czarina123", 202020]

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Czarina",
    age: 20,
    hobbies: ["Singing", "Gaming"],
    role: {
        description: 'student',
        id: 2
    }
}

let val: {} = "Czarina Fombuena"

let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Czarina',
    course: 'BSIS'
}

console.log(hobbies)
console.log(userList)
console.log(user)
console.log(val)
console.log(data)