const Employee = require('../lib/Employee');

describe('Employee', () => {
    const exampleEmployee = new Employee('name', 123, 'email@email.com')
    it('should return name entered', () => {
        expect(exampleEmployee.getName()).toBe('name');
    });
    it('should return employee id entered', () => {
        expect(exampleEmployee.getId()).toBe(123);
    });
    it('should return email address entered', () => {
        expect(exampleEmployee.getEmail()).toBe('email@email.com');
    });
});