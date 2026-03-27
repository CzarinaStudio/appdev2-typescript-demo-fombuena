(() => {
    enum Role {
        SuperAdmin = 'SuperAdmin',
        Teacher = 'Teacher',
        Student = 'Student',
        Guest = 'Guest'
    }

    let userRole: Role = Role.Student;
    console.log(userRole)
})()