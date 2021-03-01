import { useState } from 'react';

import { 
    Jumbotron, 
    Container, 
    Row, 
    Col,
    Button,
    Form 
} from 'react-bootstrap';

import styles from '../styles/Calculadora.module.css';

export function Calculadora() {

    const [txtNumeros, setTxtNumeros] = useState('0');

    function handleAddNumber(number) {
        setTxtNumeros(txtNumeros + String(number));
    }

    function handleOperation(operation) {
        setTxtNumeros(operation);
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
                        <Button variant="danger">
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
                        <Button variant="warning" onClick={() => handleOperation('/')}>
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
                        <Button variant="warning" onClick={() => handleOperation('*')}>
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
                        <Button variant="warning" onClick={() => handleOperation('-')}>
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
                        <Button variant="light" onClick={() => handleOperation('.')}>
                            .
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="success" onClick={() => handleOperation('=')}>
                            =
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="warning" onClick={() => handleOperation('+')}>
                            +
                        </Button>
                    </Col>
                </Row>
                
            
            </Container>

        </Jumbotron>
    );

}