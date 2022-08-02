import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {
                
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // done() es una de las formas de trabajar con asincronismo
                done();
            });     
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {

                expect( error ).toBe(`No se pudo encontrar el héroe con ID: ${id}`);

                done();
            });     
    });
});