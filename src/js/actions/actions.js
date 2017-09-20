'use strict';

const CHANGE_AMOUNT = 'change_amount';

const changeAmount = (amount) => {
  return {
    type: CHANGE_AMOUNT,
    amount
  }
}

export { CHANGE_AMOUNT, changeAmount };
