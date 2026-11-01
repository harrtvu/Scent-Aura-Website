export function Atelier() {
  return (
    <section id="atelier" className="atelier" aria-labelledby="atelier-title">
      <div className="atelier-media">
        <img
          src="/images/atelier.jpg"
          alt="A small-batch forest-scented candle held in soft natural light"
        />
      </div>
      <div className="atelier-panel">
        <div className="atelier-copy">
          <p className="eyebrow">Atelier</p>
          <h2 id="atelier-title">Poured with patience, not shortcuts.</h2>
          <p>
            We blend fragrance oils for throw and clarity, pour at carefully held
            temperatures, and cure every vessel before it leaves our studio. What
            reaches you is steady flame and a scent that feels finished.
          </p>
        </div>
        <dl className="atelier-facts">
          <div>
            <dt>Wax</dt>
            <dd>Natural soy blend</dd>
          </div>
          <div>
            <dt>Wick</dt>
            <dd>Lead-free cotton</dd>
          </div>
          <div>
            <dt>Cure</dt>
            <dd>Two weeks minimum</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
