import { LOGIN_SUCCESS } from '../actions/types';

export const addTokenToLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload.token);
  }

  next(action);
};