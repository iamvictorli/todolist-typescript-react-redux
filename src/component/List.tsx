import * as React from 'react';

interface IList {
  listItems: Array<{ item: string; done: boolean }>;
  onClick: (index: number) => void;
  deleteListItem: (index: number) => void;
}

const List: React.SFC<IList> = ({ listItems, onClick, deleteListItem }) => (
  <ul>
    {listItems.map((el, i) => (
      <li key={i}>
        <span
          style={
            el.done
              ? { textDecoration: 'line-through', fontSize: '20px' }
              : { textDecoration: 'none', fontSize: '20px' }
          }
          onClick={onClick.bind(null, i)}
        >
          {el.item}
        </span>
        <button onClick={deleteListItem.bind(null, i)}>x</button>
      </li>
    ))}
  </ul>
);

export default List;
