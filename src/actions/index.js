// Action Creater
// In Redax, a function that returns an action is called "Action Creator"

export const READ_EVENTS = "READ_EVENTS"

export const readEvents = () => ({
  type: READ_EVENTS
})
