import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddToDo from "./AddToDo";
import ListToDo from "../components/ListToDo";
import store from "../store";

function App() {
  const { toDo } = store.getState();
  return (
    <>
      <AddToDo />
      <ListToDo listToDo={toDo.toDo} />
    </>
  );
}

export default App;
