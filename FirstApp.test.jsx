import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp/>', () => {
    /* test('Debe hacer el match con el SNAPSHOT', () => {
        
        const title = 'Hola, soy Goku';

        const { container } = render( <FirstApp title={ title }/> );
        console.log(container);

        // aserción
            // snapshot
        expect(container).toMatchSnapshot();
    }); */

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> );
        expect( getByText(title) ).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title); */

        // Idénticos
        // expect( getByTestId('test-title').innerHTML ).toBe(title);
        // Contenido
        expect( getByTestId('test-title').innerHTML ).toContain(title); 
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtítulo';
        const { getAllByText } = render(
            <FirstApp 
                title={ title }
                subtitle={ subTitle }
            /> 
        );
    
        expect( getAllByText(subTitle).length ).toBe(2);
    });

});