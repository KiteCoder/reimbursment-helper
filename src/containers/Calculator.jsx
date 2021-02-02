import React, { useState } from 'react'
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

export const Calculator = () => {

  const [subtotal, setSubtotal] = useState(null);
  const [tax, setTax] = useState(null);

  const [subtotalAmounts, setSubtotalAmounts] = useState([]);
  const [taxAmounts, setTaxAmounts] = useState([]);

  const addSubTotal = () => {
    subtotalAmounts.push(subtotal);
    setSubtotalAmounts(subtotalAmounts);
    setSubtotal(null);
  };

  const addTax = () => {
    taxAmounts.push(tax);
    setTaxAmounts(taxAmounts);
    setTax(null);
  };

  return (<>
    <h2>
      Expense Helper
    </h2>
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={4} className="my-1">
          <Form.Control type="number" placeholder="Subtotal" value={subtotal || ''} onChange={e => setSubtotal(e.target.value)} />
        </Col>
        <Col xs="auto" className="my-1">
          <Button variant="outline-primary" onClick={() => addSubTotal()}>+</Button>
        </Col>
        <Col sm={4} className="my-1">
          <Form.Control type="number" placeholder="Tax" value={tax || ''} onChange={e => setTax(e.target.value)} />
        </Col>
        <Col xs="auto" className="my-1">
          <Button variant="outline-primary" onClick={() => addTax()}>+</Button>
        </Col>
      </Form.Row>
      <Form.Row className="align-items-center">
        <Col sm={4} className="my-1">
          {subtotalAmounts.map((amount) => {
            return <div key={amount}>{amount}</div>;
          })}
        </Col>

        <Col sm={4} className="my-1">
          {taxAmounts.map((amount) => {
            return <div key={amount}>{amount}</div>;
          })}
        </Col>
        <Col xs="auto" className="my-1">
          <Button variant="outline-danger">-</Button>
        </Col>
      </Form.Row>
    </Form>
  </>
  )
}
