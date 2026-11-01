import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export function Collection() {
  const { addItem } = useCart()

  return (
    <section id="collection" className="collection" aria-labelledby="collection-title">
      <div className="section-intro">
        <p className="eyebrow">Collection</p>
        <h2 id="collection-title">Six scents. One calm atmosphere.</h2>
        <p className="section-copy">
          Each candle is poured in small batches with cotton wicks and clean-burning
          soy wax.
        </p>
      </div>

      <ul className="product-grid">
        {products.map((product, index) => (
          <li
            key={product.id}
            className="product"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="product-image">
              <img src={product.image} alt={product.imageAlt} loading="lazy" />
            </div>
            <div className="product-body">
              <div className="product-meta">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
              <p className="product-scent">{product.scent}</p>
              <p className="product-notes">{product.notes}</p>
              <div className="product-footer">
                <span className="burn-time">{product.burnHours} hr burn</span>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-product-id={product.id}
                  onClick={(event) => {
                    event.preventDefault()
                    addItem(product)
                  }}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
