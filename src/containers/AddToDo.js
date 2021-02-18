import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addToDo, setTypingValue } from "../actions";
import store from "../store";

const AddToDo = () => {
  const state = store.getState();
  const { typing } = state;
  const handleChange = (event) => {
    store.dispatch(setTypingValue(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(addToDo(typing.toDo, false));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              className="mt-2"
              onChange={handleChange}
              value={typing.toDo}
            />
            <Button
              type="submit"
              style={{ float: "right" }}
              className="mt-2 mb-2"
            >
              Lưu công việc
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToDo;
