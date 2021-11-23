import {
  SET_LIST,
  ADVANCE_PAGE,
  ListActionsTypes,
  FetchList,
} from './listTypes';

export default function listReducer(
  state: FetchList,
  action: ListActionsTypes
): FetchList {
  switch (action.type) {
    case SET_LIST:
      console.log(action)
      return {
        ...state,
        titles: [...state.titles, ...action.titles],
        // titles: [...state.titles],
      };
    case ADVANCE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
}
