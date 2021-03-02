import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CalculadoraService } from '../services/Calculadora.service';
import { Calculadora } from '../components/Calculadora';

const [ handleCalcular, handleConcatNumber, SUM, SUB, DIV, MUL ] = CalculadoraService();

describe('Teste do CalculadoraService', () => {

    it('Deve garantir que 1 + 4 = 5', () => {
        let soma = handleCalcular(1, 4, SUM);
        expect(soma).toEqual(5);
    });

    it('Deve garantir que 4 / 1 = 4', () => {
        let soma = handleCalcular(4, 1, DIV);
        expect(soma).toEqual(4);
    });

    it('Deve garantir que 4 - 1 = 3', () => {
        let soma = handleCalcular(4, 1, SUB);
        expect(soma).toEqual(3);
    });

    it('Deve garantir que 1 * 4 = 4', () => {
        let soma = handleCalcular(1, 4, MUL);
        expect(soma).toEqual(4);
    });

    it('Operação inválida deve garantir que retorne zero', () => {
        let soma = handleCalcular(1, 4, '%');
        expect(soma).toEqual(0);
    });

});

describe('Teste da Calculadora', () => {

    it('Deve renderizar sem error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculadora />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Deve limpar o campo de números', () => {

        const { getByTestId, getByText } = render(<Calculadora />);
        
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));

        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('Deve somar 1 + 1', () => {
        
        const { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('2');
    });


    it('Deve somar 1 - 1', () => {
        
        const { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('Deve diidir 1 / 1', () => {
        
        const { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('1');
    });

    it('Deve multiplicar 1 * 1', () => {
        
        const { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('1');
    });
});