import {
  SESSION_TOKEN,
} from '../actions/session'

export function sessionToken(state = [], action) {
  switch (action.type) {
    case SESSION_TOKEN:
      return action.token;
    default:
      return state
  }
}

export default sessionToken