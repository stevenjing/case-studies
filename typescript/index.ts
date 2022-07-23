let helloWorld = 'Hello World';

interface User {
  id: number;
  name: string;
  role: string;
}

class UserAccount {
  id: number;
  name: string;
  role: string;

  constructor(name: string, id: number, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

function createAdminUser(id: number, name: string): User {
  return {
    id,
    name,
    role: 'admin',
  };
}
