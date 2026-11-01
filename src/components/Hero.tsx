export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-brand">
      <div className="hero-media" aria-hidden="true">
        <img src="/images/hero.jpg" alt="" />
        <div className="hero-wash" />
      </div>

      <div className="hero-content">
        <p id="hero-brand" className="hero-brand">
          Scent Aura
        </p>
        <h1 className="hero-headline">Candles for rooms that breathe slower.</h1>
        <p className="hero-support">
          Hand-poured soy blends with quiet, lasting fragrance — made for evenings
          at home.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#collection">
            Shop the collection
          </a>
          <a className="btn btn-ghost" href="#ritual">
            Discover the ritual
          </a>
        </div>
      </div>
    </section>
  )
}
