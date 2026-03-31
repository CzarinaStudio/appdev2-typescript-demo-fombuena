(() => {
    // Literal Types (Alternative to Enum)

    type UserRole = 'admin' | 'guest' | 'teacher' | 'student';

    let userRole: UserRole = 'admin';

    userRole = 'student';

    function access(role: UserRole) {
        if (role === 'admin') {
            console.log('Full access granted');
        } else if (role === 'teacher') {
            console.log('Teacher access granted');
        } else if (role === 'student') {
            console.log('Student access granted');
        } else {
            console.log('Guest access - limited');
        }
    }

    access(userRole);

})();