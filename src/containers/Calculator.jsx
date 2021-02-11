import React, { useState, useEffect } from 'react'
import { Form, Button, Col, InputGroup, FormControl, Row } from 'react-bootstrap';

export const Calculator = () => {

  const [subtotal, setSubtotal] = useState(null);
  const [tax, setTax] = useState(null);

  const [subtotalAmounts, setSubtotalAmounts] = useState([]);
  const [taxAmounts, setTaxAmounts] = useState([]);

  const [subtotalCopySuccess, setSubtotalCopySuccess] = useState(false);
  const [taxCopySuccess, setTaxCopySuccess] = useState(false);

  const addSubTotal = (e) => {
    e.preventDefault();
    subtotalAmounts.push(Number(subtotal));
    setSubtotalAmounts(subtotalAmounts);
    setSubtotal(null);
  };

  const addTax = (e) => {
    e.preventDefault();
    taxAmounts.push(Number(tax));
    setTaxAmounts(taxAmounts);
    setTax(null);
  };

  const removeSubTotalItem = (e) => {
    const index = Number(e.target.id);
    if (index > -1) {
      subtotalAmounts.splice(index, 1);
    }
    setSubtotalAmounts(subtotalAmounts => ([...subtotalAmounts]));
  }

  const removeTaxItem = (e) => {
    const index = Number(e.target.id);
    if (index > -1) {
      taxAmounts.splice(index, 1);
    }
    setTaxAmounts(taxAmounts => ([...taxAmounts]));
  }

  const clearForm = () => {
    setTaxAmounts([]);
    setSubtotalAmounts([]);
    setSubtotalCopySuccess(false);
    setTaxCopySuccess(false);
  }

  const copySubtotalTotal = () => {
    navigator.clipboard.writeText(subtotalAmounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    setSubtotalCopySuccess(true);
  }

  const copyTaxTotal = () => {
    navigator.clipboard.writeText(taxAmounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    setTaxCopySuccess(true);
  }


  return (<>
    <h2>
      Expense Helper
    </h2>
    <Row className="align-items-center">

      <Col xs={6} className="my-1">
        <Form onSubmit={(e) => addSubTotal(e)}>
          <Form.Row>
            <Col xs={9} className="my-1">
              <Form.Control type="number" placeholder="Subtotal" value={subtotal || ''} onChange={e => setSubtotal(e.target.value)} />
            </Col>
            <Col xs={1} className="my-1">
              <Button type="submit" variant="outline-primary" onClick={(e) => addSubTotal(e)}>+</Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>

      <Col xs={6} className="my-1">
        <Form onSubmit={(e) => addTax(e)}>
          <Form.Row>
            <Col xs={9} className="my-1">
              <Form.Control type="number" placeholder="Tax" value={tax || ''} onChange={e => setTax(e.target.value)} />
            </Col>
            <Col xs={1} className="my-1">
              <Button type="submit" variant="outline-primary" onClick={(e) => addTax(e)}>+</Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>

    </Row>
    <Row className="align-items-center">
      <Col xs={6} className="my-1">
        {subtotalAmounts.map((amount, index) => {
          return <div key={index}>

            {amount}
            <Button id={index} variant="outline-danger" onClick={(e) => removeSubTotalItem(e)}>-</Button></div>;
        })}
      </Col>

      <Col xs={6} className="my-1">
        {taxAmounts.map((amount, index) => {
          return <div key={index}>{amount}
            <Button variant="outline-danger" onClick={(e) => removeTaxItem(e)}>-</Button></div>;
        })}
      </Col>

    </Row>

    <Row className="align-items-center">
      <Col xs={6} className="my-1">

        <p>Subtotal total: {subtotalAmounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
        <Button variant="outline-success" onClick={() => copySubtotalTotal()}>copy</Button>
        {
          subtotalCopySuccess ?
            <div style={{ "color": "green" }}>
              Success!
            </div> : null
        }
      </Col>

      <Col xs={6} className="my-1">

        <p>Tax total: {taxAmounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
        <Button variant="outline-success" onClick={() => copyTaxTotal()}>copy</Button>
        {
          taxCopySuccess ?
            <div style={{ "color": "green" }}>
              Success!
            </div> : null
        }
      </Col>

    </Row>

    <Button variant="outline-dark" onClick={() => clearForm()}>clear form</Button>
  </>
  )
}
