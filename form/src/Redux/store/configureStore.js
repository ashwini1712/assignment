import { createStore, combineReducers, applyMiddleware } from "redux";
import formReducer from "../reducers/formReducer";

import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      formValue: formReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
