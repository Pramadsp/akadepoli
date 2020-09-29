
/*
 * action types
 */

export const SESSION_TOKEN = 'SESSION_TOKEN'

/*
 * action creators
 */

export function sessionToken(token) {
  return { type: SESSION_TOKEN, token }
}