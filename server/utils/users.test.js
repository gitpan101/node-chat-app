const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Ashutosh',
            room: 'Test room 1'
        }, {
            id: '2',
            name: 'Tushar',
            room: 'Test room 2'
        }, {
            id: '3',
            name: 'Ayush',
            room: 'Test room 1'
        }];
    });

    it('should add new user', () => {
        var user = {
            id: '12a',
            name: 'Ashutosh',
            room: 'Test room'
        };
        var userRes = users.addUser('12a', 'Ashutosh', 'Test room');

        expect(users.users).toContainEqual(user);
        expect(userRes).toMatchObject(user);
    });

    it('should remove a user', () => {
        var deletedUser = users.removeUser('2');

        expect(deletedUser).not.toBeUndefined();
        expect(users.users.length).toBeLessThan(3);
    });

    it('should not remove a user', () => {
        var deletedUser = users.removeUser('12');

        expect(deletedUser).toBeUndefined();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var user = users.getUser('1');

        expect(user).toBeDefined();
        expect(user.name).toEqual('Ashutosh');
    });

    it('should not find user', () => {
        var user = users.getUser('12');

        expect(user).toBeUndefined();        
    });

    it('should get user list of a room', () => {
        var room = 'Test room 1';
        var userRes = users.getUserList(room);
        
        expect(userRes).toContain('Ashutosh');
        expect(userRes).toEqual(['Ashutosh', 'Ayush']);
    });
});