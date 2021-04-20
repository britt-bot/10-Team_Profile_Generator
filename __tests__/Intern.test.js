const Intern = require('../lib/Intern');

describe('Intern', () => {
    const exampleIntern = new Intern('name', 123, 'email@email.com')
    it('should return name entered', () => {
        expect(exampleIntern.getName()).toBe('name');
    });
    it('should return employee id entered', () => {
        expect(exampleIntern.getId()).toBe(123);
    });
    it('should return email address entered', () => {
        expect(exampleIntern.getEmail()).toBe('email@email.com');
    });
});