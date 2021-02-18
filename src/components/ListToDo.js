/* eslint-disable react/jsx-curly-newline */
import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { checkToDo, deleteToDo } from "../actions";
import store from "../store";

const ListToDo = ({ listToDo }) => {
  return (
    <Container>
      <Row>
        <Table>
          <thead>
            <tr className="text-center">
              <th width="80%">Công việc</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listToDo.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.toDo}</td>
                  <td>
                    <Button
                      variant="outline-success mr-2"
                      style={{
                        backgroundColor: element.status ? "#27a243" : "",
                        color: element.status ? "#fff" : "",
                      }}
                      onClick={() => store.dispatch(checkToDo(element.id))}
                    >
                      Hoàn thành
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => store.dispatch(deleteToDo(element.id))}
                    >
                      Huỷ bỏ
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ListToDo;
