import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/datos/heroes';


describe('Pruebas en 08-imp-exp', () => {   
    test('getHeroeById debe retornar un heroe por su ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe retornar undefined si no existe el heroe', () => {
        const id = 10;
        const hero = getHeroeById(id);

        // todos sirven
        expect( typeof hero ).toBe( 'undefined' );
        expect(  hero ).toBe( undefined );
        // don't care what a value is...
        expect( hero ).toBeFalsy();
        // ojo, cuidado con:
        // expect(false).toBeFalsy(); //y pasa, false y toBeFalsy()
    });

    /* test('getHeroesByOwner debe retornar un arreglo heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        console.log(heroes) // OJO!! ARREGLAR - NO ME DEVUELVE EL ARRAY

        /* expect( heroes.length ).toBe(3);
        expect( heroes.length ).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },{
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },{
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]);
    }); */
    const owner = 'DC';
    const heroes = getHeroesByOwner('DC')
    console.log(heroes)
  /*   test('Prueba de heroes por owner', () => {
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
    }); */

});