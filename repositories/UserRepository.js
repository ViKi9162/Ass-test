// repositories/UserRepository.js
const users = {};

class UserRepository {
    save(user) {
        users[user.username] = user;
    }

    findByUsername(username) {
        return users[username];
    }
}

module.exports = UserRepository;
