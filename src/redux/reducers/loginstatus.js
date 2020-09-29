import {
  LOGIN_STATUS
} from '../actions/loginstatus'

function loginStatus(state = null, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return action.status

    default: return state
  }
}

export default loginStatus