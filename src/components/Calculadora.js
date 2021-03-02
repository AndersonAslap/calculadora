import { useState } from 'react';

import { 
    Jumbotron, 
    Container, 
    Row, 
    Col,
    Button,
    Form 
} from 'react-bootstrap';

import { CalculadoraService } from '../services/Calculadora.service';

import styles from '../styles/Calculadora.module.css';

export function Calculadora() {

    const [ handleCalcular, handleConcatNumber, SUM, SUB, DIV, MUL ] = CalculadoraService();

    const [txtNumeros, setTxtNumeros] = useState('0');
    const [number1, setNumber1] = useState('0');
    const [number2, setNumber2] = useState(null);
    const [operation, setOperation] = useState(null);

    function handleAddNumber(number) {
        let result;

        if (operation === null) {
            result = handleConcatNumber(number1, number);
            setNumber1(result);
        } else {
            
            result = handleConcatNumber(number2, number);
            setNumber2(result);
        }

        setTxtNumeros(result);
    }

    function handleOperation(op) {
        // apenas define a operação caso ela não exista

        if (operation === null) {
            setOperation(op);
            return;
        }

        // caso operação estiver definida e o número 2 selecionado
        // realiza o calculo da operação

        if (number2 !== null) {
            const result = handleCalcular(Number(number1), Number(number2), operation);
            setOperation(op);
            setNumber1(String(result));
            setNumber2(null);
            setTxtNumeros(String(result));
        }

    }

    function handleActionCalcular() {
        if (number2 === null){
            return;
        }

        const result = handleCalcular(Number(number1), Number(number2), operation)
        setTxtNumeros(result);
    }

    function handleReset() {
        setTxtNumeros('0');
        setNumber1('0')
        setNumber2(null);
        setOperation(null);
    }


    return (
        <Jumbotron 
            className={`${styles.Calculadora}`}
        
            style={{
                background: "trasparent !important",
                backgroundColor: "#007bff",
                padding: "5px",
                margin: "5px",
                width: "400px"
            }}>
            
            <Container>
                <Row>
                    <Col xs="3">
                        <Button variant="danger" onClick={handleReset}>
                            C
                        </Button>
                    </Col>

                    <Col xs="9">
                        <Form.Control 
                            type="text"
                            name="txtNumeros"
                            className="text-right"
                            readOnly="readonly"
                            value={txtNumeros}
                            data-testid="txtNumeros"
                        />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(7)}>
                            7
                        </Button>
                    </Col>
                    
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(8)}>
                            8
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(9)}>
                            9
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="warning" onClick={() => handleOperation(DIV)}>
                            /
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(4)}>
                            4
                        </Button>
                    </Col>
                    
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(5)}>
                            5
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(6)}>
                            6
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="warning" onClick={() => handleOperation(MUL)}>
                            *
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(1)}>
                            1
                        </Button>
                    </Col>
                    
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(2)}>
                            2
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(3)}>
                            3
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="warning" onClick={() => handleOperation(SUB)}>
                            -
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber(0)}>
                            0
                        </Button>
                    </Col>
                    
                    <Col>
                        <Button variant="light" onClick={() => handleAddNumber('.')}>
                            .
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="success" onClick={handleActionCalcular}>
                            =
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="warning" onClick={() => handleOperation(SUM)}>
                            +
                        </Button>
                    </Col>
                </Row>
                
            
            </Container>

        </Jumbotron>
    );

}