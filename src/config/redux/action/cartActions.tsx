export const addToCart = (value: any) => (dispatch: any) => {
  return dispatch({type: 'ADD_TO_CART', value: value});
};

export const removeFromCart = (itemid: any) => (dispatch: any) => {
  return dispatch({type: 'REMOVE_FROM_CART', itemid});
};

export const qtyUp = (itemid: any) => {
  return {type: 'QTY_UP', itemid};
};

export const qtyDown = (itemid: any) => {
  return {type: 'QTY_DOWN', itemid};
};
