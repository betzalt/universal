import { combineReducers } from 'redux';

const active = (state = false, action) => state;

export const reducers = combineReducers({
  active,
});
