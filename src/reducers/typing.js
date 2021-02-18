/* eslint-disable no-unused-vars */
import { ADD_TO_DO, SET_TYPING_VALUE } from "../constants/action-types";

const initState = {
  toDo: "",
};

export default function typing(state = initState, action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case ADD_TO_DO:
      return initState;
    default:
      return initState;
  }
}
