"use client";
import { useRouter } from "next/navigation";
import React from 'react';

export default function GoToCartButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/carts')}
      className="bg-green-500 text-white px-4 py-1 rounded"
    >
      Go To Cart
    </button>
  );
}

