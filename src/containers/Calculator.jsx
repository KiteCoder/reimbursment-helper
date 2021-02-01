import React, { useState } from 'react'
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

export const Calculator = () => {

  const [subtotalAmounts, setSubtotalAmounts] = useState({ 0: null });
  const [taxAmounts, setTaxAmounts] = useState([]);

  const addSubtotalAmount = (subTotalAmount) => {

    subtotalAmounts.push(subTotalAmount)
    setSubtotalAmounts(subtotalAmounts);
  };



  return (<>
    <h2>
      Expense Helper
    </h2>
    <Form>
      <Form.Row className="align-items-center">
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Subtotal
      </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Subtotal" />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">+</Button>
        </Col>
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Tax
      </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Tax" />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">+</Button>
        </Col>
      </Form.Row>
      <Form.Row className="align-items-center">
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Subtotal
      </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Subtotal" />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">-</Button>
        </Col>
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Tax
      </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Tax" />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">-</Button>
        </Col>
      </Form.Row>
    </Form>
  </>
  )
}
