import { createStore, combineReducers } from 'redux';

import TodoAppReducer from './reducers/TodoAppReducer';

export default (initialState = {}) => {
  // combine reducers if needed
  const rootReducer = combineReducers({ toDoApp: TodoAppReducer });

  return createStore(
    rootReducer,
    initialState,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
