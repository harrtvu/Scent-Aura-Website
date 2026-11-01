import { Atelier } from './components/Atelier'
import { CartDrawer } from './components/CartDrawer'
import { Collection } from './components/Collection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Ritual } from './components/Ritual'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div id="top" className="page">
        <Header />
        <main>
          <Hero />
          <Collection />
          <Ritual />
          <Atelier />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
