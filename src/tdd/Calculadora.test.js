import React from 'react';
import ReactDom from 'react-dom';

import { CalculadoraService } from '../services/Calculadora.service';

describe('Teste do CalculadoraService', () => {

    const [ handleCalcular, handleConcatNumber, SUM, SUB, DIV, MUL ] = CalculadoraService();

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