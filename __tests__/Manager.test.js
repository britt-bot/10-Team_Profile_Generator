const Manager = require('../lib/Manager');

describe('Manager', () => {
    const exampleManager = new Manager('name', 123, 'email@email.com')
    it('should return name entered', () => {
        expect(exampleManager.getName()).toBe('name');
    });
    it('should return employee id entered', () => {
        expect(exampleManager.getId()).toBe(123);
    });
    it('should return email address entered', () => {
        expect(exampleManager.getEmail()).toBe('email@email.com');
    });
});