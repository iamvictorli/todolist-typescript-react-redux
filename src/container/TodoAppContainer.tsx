import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  inputChange,
  inputSubmit,
  deleteItem,
  listItemClick
} from '../redux/reducer/TodoAppReducer';

import TodoApp from '../component/TodoApp';
import { IStoreState } from '../redux/storeState';

// entire store state
const mapStateToProps = (state: IStoreState) => {
  return {
    toDoApp: state.toDoApp
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      deleteItemAction: deleteItem,
      inputChangeAction: inputChange,
      inputSubmitAction: inputSubmit,
      listItemClickAction: listItemClick
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
