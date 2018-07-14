import { TOGGLE_HEADER_POPUP } from "../actions/actionTypes"
import {combineReducers} from "redux"

const initialState = {
  headerPopupToggled : false
}

function headerReducer(state = initialState, action){
  switch (action.type) {
    case TOGGLE_HEADER_POPUP:
      return {
        ...state,
        headerPopupToggled: !state.headerPopupToggled
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  header: headerReducer
})

export default reducers
