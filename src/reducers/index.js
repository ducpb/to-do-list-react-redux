import { combineReducers } from "redux";
import toDo from "./toDo";
import typing from "./typing";

export default combineReducers({
  toDo,
  typing,
});
