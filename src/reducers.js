import * as actions from "./actions"

export default (state = {}, action) => {
  switch(action.type) {
    case actions.MOVE: {
      const { columnIndex, cardId, direction } = action
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          columnIndex: columnIndex + direction
        }
      }
    }
    case actions.ADD: {
      const { card } = action
      return {
        ...state,
        [card.id]: card
      }
    }
    default:
      return state;
  }
}