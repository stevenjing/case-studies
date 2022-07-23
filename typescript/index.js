"use strict";
let helloWorld = 'Hello World';
const user = {
    name: 'Steven',
    // username: 'steven',
    id: 0,
    // nonExistentField: 'test',
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newUser = new UserAccount('Steven', 0);
