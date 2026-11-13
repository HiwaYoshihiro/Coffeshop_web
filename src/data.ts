import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    category: 'Single Origin',
    roast: 'Light',
    price: 18.50,
    weight: '250g',
    description: 'A bright and complex coffee from the birthplace of coffee. Grown at high elevations in the Yirgacheffe region, this lot delivers an extraordinary cup with floral aromatics and a tea-like body that captivates from first sip to last.',
    notes: ['Jasmine', 'Bergamot', 'Stone Fruit', 'Honey'],
    emoji: '🌸',
    gradient: 'from-amber-100 to-orange-200'
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    origin: 'Colombia',
    category: 'Single Origin',
    roast: 'Medium',
    price: 16.00,
    weight: '250g',
    description: 'Sourced from small farms in the Huila department, this Supremo grade bean offers the quintessential Colombian experience. Perfectly balanced with a silky mouthfeel and a sweetness that lingers beautifully.',
    notes: ['Caramel', 'Red Apple', 'Milk Chocolate', 'Walnut'],
    emoji: '🍎',
    gradient: 'from-orange-100 to-amber-200'
  },
  {
    id: 3,
    name: 'Midnight Espresso',
    origin: 'Brazil & Indonesia',
    category: 'Blend',
    roast: 'Dark',
    price: 15.00,
    weight: '250g',
    description: 'Our signature espresso blend crafted for intensity and depth. Brazilian Santos provides a chocolatey base while Sumatran beans add earthy complexity. Perfect for those who love a bold, full-bodied shot.',
    notes: ['Dark Chocolate', 'Toasted Almond', 'Molasses', 'Cedar'],
    emoji: '🌙',
    gradient: 'from-stone-200 to-stone-300'
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    origin: 'Guatemala',
    category: 'Single Origin',
    roast: 'Medium',
    price: 17.25,
    weight: '250g',
    description: 'Grown in the shadow of three volcanoes, Antigua coffee is renowned for its distinctive character. Rich volcanic soil and cool nights create beans with remarkable depth and a velvety smooth finish.',
    notes: ['Cocoa', 'Brown Sugar', 'Orange Peel', 'Spice'],
    emoji: '🌋',
    gradient: 'from-amber-200 to-yellow-100'
  },
  {
    id: 5,
    name: 'Kenya AA Nyeri',
    origin: 'Kenya',
    category: 'Single Origin',
    roast: 'Light',
    price: 21.00,
    weight: '250g',
    description: 'The pinnacle of East African coffee. These AA-grade beans from Nyeri county deliver an electrifying cup with vibrant acidity and layers of fruit complexity that evolves as the coffee cools.',
    notes: ['Blackcurrant', 'Grapefruit', 'Tomato', 'Raw Honey'],
    emoji: '🫐',
    gradient: 'from-rose-100 to-pink-200'
  },
  {
    id: 6,
    name: 'Morning Ritual Blend',
    origin: 'Central & South America',
    category: 'Blend',
    roast: 'Medium',
    price: 14.50,
    weight: '250g',
    description: 'Our everyday companion — a harmonious blend designed to be your perfect morning ritual. Smooth, approachable, and consistently delicious, this blend brings together the best of Central and South American coffees.',
    notes: ['Hazelnut', 'Vanilla', 'Toffee', 'Citrus Zest'],
    emoji: '☀️',
    gradient: 'from-yellow-100 to-amber-100'
  }
];
