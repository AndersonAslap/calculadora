export function CalculadoraService() {

    const SUM = '+';
    const SUB = '-';
    const DIV = '/';
    const MUL = '*';

    function handleCalcular(number1, number2, operation) {
        
        let resultado;

        switch(operation) {
            case SUM:
                resultado = (number1 + number2);
                break;

            case SUB:
                resultado = (number1 - number2);
                break;

            case DIV:
                resultado = (number1 / number2);
                break;

            case MUL:
                resultado = (number1 * number2)
                break;

            default:
                resultado = 0;
        }
        
        return resultado;
    }

    function handleConcatNumber(currentNumber, nextNumber) {
        // caso contenha apenas '0' ou null, reinicia o valor 
        
        if (currentNumber === '0' || currentNumber == null) {
            currentNumber = '';
        }
        
        // caso primeiro digito for '.', concatenar '0' antes do ponto

        if (nextNumber === '.' && currentNumber === '') {
            return '0.';
        }

        // caso '.' digitado e já contenha um ponto, apenas retorna
        
        if (nextNumber === '.' && currentNumber.indexOf('.') > -1) {
            return currentNumber;
        }

        return (currentNumber + nextNumber);
        
    }

    return [
        handleCalcular,
        handleConcatNumber,
        SUM,
        SUB,
        DIV,
        MUL
    ]

}