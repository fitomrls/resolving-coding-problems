/* 
    Given a string S, return the “reversed” string. 
    All letters will reverse their positions, 
    and characters that are not a letter stay in the same place 
*/

const invertir = require('./inverso')

describe('inversor tests', () => {

    test('should empty', () => {
        const expected = ''
        const result = invertir('')     

        expect(expected).toEqual(result)
    })

    test('should abc toEqual cba', () => {
        const expected = 'cba'
        const result = invertir('abc')
        expect(expected).toBe(result)
    })

    test('should number toEqual number', () => {
        const expected = '123'
        const result = invertir('123')

        expect(expected).toEqual(result)
    });

    test('123 abc should 123 cba', () => {
        const expected = '123 cba'
        const result = invertir('123 abc')
        expect(expected).toBe(result)
    });

    test('1a2b3c should 123cba', () => {
        const expected = '123cba'
        const result = invertir('1a2b3c')
        expect(expected).toBe(result)
    });

    test('1a 2*b&c@ should 123cba', () => {
        const expected = '1 2*&@cba'
        const result = invertir('1a 2*b&c@')
        expect(expected).toBe(result)
    });
})