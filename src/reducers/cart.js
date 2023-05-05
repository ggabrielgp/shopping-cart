export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

// actualizar siempre localStorage con state para cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'

}

// transforma el estado/state a un nuevo estado/state segun la action/accion
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }
      const newState = [
        ...state,
        { ...actionPayload, quantity: 1 } // Product
      ]

      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      // setCart(prev => prev.filter(item => item.id !== product.id))
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return []
    }
  }
  return state
}

// TESTING -> reducer funciona para añadir un producto al carrito

// expect(reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])
