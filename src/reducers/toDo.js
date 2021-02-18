import {
  ADD_TO_DO,
  CHECK_TO_DO,
  DELETE_TO_DO,
} from "../constants/action-types";
import generateData from "../fakeData.json";

const initState = {
  toDo: generateData,
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    }
    case CHECK_TO_DO: {
      return {
        ...state,
        toDo: state.toDo.map((element) =>
          element.id === action.payload.index
            ? { ...element, status: !element.status }
            : element
        ),
      };
    }
    case DELETE_TO_DO: {
      return {
        ...state,
        toDo: state.toDo.filter((item) => item.id !== action.payload.index),
      };
    }
    default:
      return state;
  }
};
