export type Product = {
  id: string
  name: string
  scent: string
  notes: string
  price: number
  burnHours: number
  image: string
  imageAlt: string
}

export const products: Product[] = [
  {
    id: 'cedar-smoke',
    name: 'Cedar Smoke',
    scent: 'Woody · Smoked',
    notes: 'Charred cedar, vetiver, and a hush of birch tar.',
    price: 48,
    burnHours: 55,
    image: '/images/cedar-smoke.svg',
    imageAlt: 'Cedar Smoke candle illustration in a dark amber vessel',
  },
  {
    id: 'fig-leaf',
    name: 'Fig Leaf',
    scent: 'Green · Soft fruit',
    notes: 'Crushed fig leaf, milky sap, and sun-warmed wood.',
    price: 46,
    burnHours: 50,
    image: '/images/fig-leaf.svg',
    imageAlt: 'Fig Leaf candle illustration in a soft green vessel',
  },
  {
    id: 'salt-air',
    name: 'Salt Air',
    scent: 'Marine · Mineral',
    notes: 'Sea spray, driftwood, and cool coastal moss.',
    price: 44,
    burnHours: 50,
    image: '/images/salt-air.svg',
    imageAlt: 'Salt Air candle illustration in a pale mineral vessel',
  },
  {
    id: 'amber-resin',
    name: 'Amber Resin',
    scent: 'Warm · Resinous',
    notes: 'Golden amber, labdanum, and soft vanilla husk.',
    price: 52,
    burnHours: 60,
    image: '/images/amber-resin.svg',
    imageAlt: 'Amber Resin candle illustration in a honey-toned vessel',
  },
  {
    id: 'white-tea',
    name: 'White Tea',
    scent: 'Clean · Floral',
    notes: 'Steamed white tea, bergamot peel, and pale jasmine.',
    price: 42,
    burnHours: 45,
    image: '/images/white-tea.svg',
    imageAlt: 'White Tea candle illustration in a porcelain vessel',
  },
  {
    id: 'night-garden',
    name: 'Night Garden',
    scent: 'Botanical · Evening',
    notes: 'Tuberose, damp earth, and moonlit geranium.',
    price: 50,
    burnHours: 55,
    image: '/images/night-garden.svg',
    imageAlt: 'Night Garden candle illustration in a deep moss vessel',
  },
]
