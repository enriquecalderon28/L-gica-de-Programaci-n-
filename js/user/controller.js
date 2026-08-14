class UserController {
    constructor() {
        this.users = [];
    }

    add(user) {
        if (!this.findById(user.id)) {
            this.users.push(user);
        }
    }

    remove(user) {
        const index = this.users.findIndex(
            (u) => u.id === user.id
        );

        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    findByEmail(email) {
        return this.users.find(
            (user) => user.email === email
        );
    }

    findById(id) {
        return this.users.find(
            (user) => user.id === id
        );
    }
}

module.exports = UserController;