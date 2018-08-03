import * as React from 'react';

interface IInput {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const Input: React.SFC<IInput> = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="listInput">
      Todo:
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        id="listInput"
        placeholder="Add new todo"
      />
    </label>

    <button className="btn btn-primary">Add Item</button>
  </form>
);

export default Input;
