import {
  ADD_TO_DO,
  CHECK_TO_DO,
  DELETE_TO_DO,
  SET_TYPING_VALUE,
} from "../constants/action-types";

export const addToDo = (toDo, status) => {
  return {
    type: ADD_TO_DO,
    payload: {
      toDo,
      status,
    },
  };
};

export const deleteToDo = (index) => {
  return {
    type: DELETE_TO_DO,
    payload: {
      index,
    },
  };
};

export const setTypingValue = (toDo) => {
  return {
    type: SET_TYPING_VALUE,
    payload: {
      toDo,
    },
  };
};

export const checkToDo = (index) => {
  return {
    type: CHECK_TO_DO,
    payload: {
      index,
    },
  };
};
