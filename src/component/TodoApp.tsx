import * as React from 'react';

import List from './List';
import Input from './Input';

import { ITodoAppState as ITodoApp } from '../redux/reducers/TodoAppReducer';
interface IToDoAppProps {
  toDoApp: ITodoApp;
  inputChange: (value: string) => void;
  inputSubmit: () => void;
  listItemClick: (index: number) => void;
  deleteItem: (index: number) => void;
}

const ToDoApp: React.SFC<IToDoAppProps> = ({
  toDoApp,
  inputChange,
  inputSubmit,
  listItemClick,
  deleteItem
}) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    inputChange(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    inputSubmit();
  };

  const onListItemClick = (i: number) => {
    listItemClick(i);
  };

  const deleteListItem = (i: number) => {
    deleteItem(i);
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
