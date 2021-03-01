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

    return [
        handleCalcular,
        SUM,
        SUB,
        DIV,
        MUL
    ]

}