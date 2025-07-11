import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'T-shirt', price: 499 },
    { id: 2, name: 'Jeans', price: 999 },
    { id: 3, name: 'Shoes', price: 1999 }
  ];

  return NextResponse.json(products);
}
