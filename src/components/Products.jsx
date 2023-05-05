import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> -
              </div>
              <div>
                {isProductInCart &&
                  <button
                    style={{ backgroundColor: 'tomato' }}
                    onClick={() => removeFromCart(product)}
                  >
                    <RemoveFromCartIcon />
                  </button>}

                {!isProductInCart &&
                  <button
                    style={{ backgroundColor: '#09f' }}
                    onClick={() => addToCart(product)}
                  ><AddToCartIcon />
                  </button>}
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
