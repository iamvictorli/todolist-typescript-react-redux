enum Constants {
  INPUT_CHANGE,
  INPUT_SUBMIT,
  LIST_ITEM_CLICK,
  DELETE_ITEM
}

// these interfaces are actions
interface IInputChange {
  type: Constants.INPUT_CHANGE;
  value: string;
}

interface IInputSubmit {
  type: Constants.INPUT_SUBMIT;
}

interface IListItemClick {
  type: Constants.LIST_ITEM_CLICK;
  index: number;
}

interface IDeleteItem {
  type: Constants.DELETE_ITEM;
  index: number;
}

// define actions with interfaces for the reducer
type Actions = IInputChange | IInputSubmit | IListItemClick | IDeleteItem;

// action creators
export const inputChange = (value: string): IInputChange => ({
  type: Constants.INPUT_CHANGE,
  value
});

export const inputSubmit = (): IInputSubmit => ({
  type: Constants.INPUT_SUBMIT
});

export const listItemClick = (index: number): IListItemClick => ({
  type: Constants.LIST_ITEM_CLICK,
  index
});

export const deleteItem = (index: number): IDeleteItem => ({
  type: Constants.DELETE_ITEM,
  index
});

// initial state if needed
const initialState = {
  list: [{ item: 'test', done: false }],
  newToDo: ''
};

// export for storeState.ts and for reducer
export interface ITodoAppState {
  list: Array<{ item: string; done: boolean }>;
  newToDo: string;
}

export default function reducer(
  state: ITodoAppState = initialState,
  action: Actions
) {
  switch (action.type) {
    case Constants.INPUT_SUBMIT:
      return {
        ...state,
        list: [...state.list, { item: state.newToDo, done: false }],
        newToDo: ''
      };
    case Constants.INPUT_CHANGE:
      return { ...state, newToDo: action.value };
    case Constants.LIST_ITEM_CLICK:
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          {
            ...state.list[action.index],
            done: !state.list[action.index].done
          },
          ...state.list.slice(action.index + 1)
        ]
      };
    case Constants.DELETE_ITEM:
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
