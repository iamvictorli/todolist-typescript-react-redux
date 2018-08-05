import * as React from 'react';

import List from './List';
import Input from './Input';

import { ITodoAppState as ITodoApp } from '../redux/reducer/TodoAppReducer';
interface IToDoAppProps {
  toDoApp: ITodoApp;
  inputChangeAction: (value: string) => void;
  inputSubmitAction: () => void;
  listItemClickAction: (index: number) => void;
  deleteItemAction: (index: number) => void;
}

const ToDoApp: React.SFC<IToDoAppProps> = ({
  toDoApp,
  inputChangeAction,
  inputSubmitAction,
  listItemClickAction,
  deleteItemAction
}) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    inputChangeAction(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    inputSubmitAction();
  };

  const onListItemClick = (i: number) => {
    listItemClickAction(i);
  };

  const deleteListItem = (i: number) => {
    deleteItemAction(i);
  };

  return (
    <React.Fragment>
      <h1>My To Do App</h1>
      <hr />
      <List
        onClick={onListItemClick}
        listItems={toDoApp.list}
        deleteListItem={deleteListItem}
      />
      <Input
        value={toDoApp.newToDo}
        onChange={onInputChange}
        onSubmit={onSubmit}
      />
    </React.Fragment>
  );
};

export default ToDoApp;
