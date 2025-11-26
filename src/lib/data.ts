export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products = [
  {
    id: '1',
    name: 'Teclado Mecânico RGB',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    description: 'Switches blue e iluminação RGB personalizável.',
    category: 'Teclados'
  },
  {
    id: '2',
    name: 'Mouse Gamer Pro',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
    description: 'Sensor óptico 16.000 DPI e 8 botões.',
    category: 'Mouses'
  },
  {
    id: '3',
    name: 'Headset Premium 7.1',
    price: 549.90,
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&q=80',
    description: 'Som surround 7.1 e cancelamento de ruído.',
    category: 'Áudio'
  },
  {
    id: '4',
    name: 'Monitor 27" 144Hz',
    price: 1499.90,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    description: 'Monitor QHD com taxa de 144Hz e 1ms.',
    category: 'Monitores'
  }
];