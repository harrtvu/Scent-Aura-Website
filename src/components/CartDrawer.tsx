import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    closeCart,
    removeItem,
    setQuantity,
  } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        aria-label="Shopping bag"
      >
        <div className="cart-header">
          <h2>Your bag</h2>
          <button type="button" className="icon-btn" onClick={closeCart}>
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Your bag is empty. Find a scent that settles in.</p>
        ) : (
          <ul className="cart-list">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="cart-item">
                <img src={product.image} alt="" />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <div className="qty-row">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      aria-label={`Decrease ${product.name}`}
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      aria-label={`Increase ${product.name}`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeItem(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(0)}</strong>
          </div>
          <button type="button" className="btn btn-primary" disabled={items.length === 0}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
