(() => {
    // Type Aliases or Custom Types
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role;
        permissions: string[];
    };

    // Example Users
    const adminUser: User = {
        name: 'Czarina',
        age: 22,
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    };

    const studentUser: User = {
        name: 'Alex',
        age: 20,
        role: 'student',
        permissions: ['read']
    };

    // Function to check access
    function access(user: User) {
        console.log(`${user.name} has the following permissions:`);
        user.permissions.forEach(p => console.log(`- ${p}`));
    }

    // Call function
    access(adminUser);
    access(studentUser);

})();