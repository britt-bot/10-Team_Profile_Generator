const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const exampleEngineer = new Engineer('name', 123, 'email@email.com')
    it('should return name entered', () => {
        expect(exampleEngineer.getName()).toBe('name');
    });
    it('should return employee id entered', () => {
        expect(exampleEngineer.getId()).toBe(123);
    });
    it('should return email address entered', () => {
        expect(exampleEngineer.getEmail()).toBe('email@email.com');
    });
});