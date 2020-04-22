
// Action Creater
// In Redax, a function that returns an action is called "Action Creator"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})