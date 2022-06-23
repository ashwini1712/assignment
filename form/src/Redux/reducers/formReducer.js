const initialValue = [];
const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADDFORM": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};
export default formReducer;
