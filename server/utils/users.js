class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var userIndex = this.users.findIndex(user => user.id === id);
        var deletedUser = this.users.find(user => user.id === id);
        
        if(userIndex > -1){
            this.users.splice(userIndex, 1);
        }
        
        return deletedUser;
    }

    getUser (id) {
        return this.users.find(user => user.id === id);
    }

    getUserList (room) {
        return this.users.filter(user => user.room === room).map(user => user.name);
    }

    getRoomList () {
        return this.users.filter(user => user.room !== 'public').map(user => user.room);
    }
}

module.exports = {Users};