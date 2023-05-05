import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'
import { IS_DEVELOPMENT } from '../config'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()

  if (!IS_DEVELOPMENT) {
    return (
      <footer className='footer'>
        {/* {JSON.stringify(filters, null, 2)} */}
        {JSON.stringify(cart, null, 2)}
      </footer>
    )
  }

  return (
    <footer className='footer'>
      <h4>React Technical Test</h4>
      <span>Gabriel Gómez</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
