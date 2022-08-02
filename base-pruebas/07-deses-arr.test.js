import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('Debería retornar un string y un número', () => {

        const [letters, numbers] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' );
        // toBe() también evalue el tipo de dato
        expect( numbers ).toBe( 123 );

        expect(typeof letters).toBe( 'string' );
        expect(typeof numbers).toBe( 'number' );
        // también se puede escribir así
        expect( letters ).toEqual( expect.any(String) );

    });

});