import { useCart } from '../context/CartContext'

export function Header() {
  const { itemCount, toggleCart } = useCart()

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Scent Aura home">
        Scent Aura
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#collection">Collection</a>
        <a href="#ritual">Ritual</a>
        <a href="#atelier">Atelier</a>
      </nav>
      <button
        type="button"
        className="cart-trigger"
        onClick={toggleCart}
        aria-label={`Open bag, ${itemCount} items`}
      >
        Bag
        <span className="cart-count" aria-hidden="true">
          {itemCount}
        </span>
      </button>
    </header>
  )
}
