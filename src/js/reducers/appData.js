import { CHANGE_AMOUNT } from '../actions/actions';

const initialState = {
  amount: 0
}

const appData = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return {amount: action.amount}
    default:
      return state;
  }
}

export default appData;
