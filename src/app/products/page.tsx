import React from "react";
import { ProductService } from "../services/product-services";
import ProductCard from "../components/product-card/productCard";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { headers } from "next/headers";

async function getProducts(){
  const productResp = await ProductService.getProducts();
  return productResp;
}

export const metadata:Metadata={
  title:"Product Deatil page"
}

export default async function Products(){
  console.log("Product page executed");

  const products = await getProducts();
  const cookieList = await cookies();
  const tokenCookies = cookieList.get('authToken');
  console.log("Token cookies:",tokenCookies,tokenCookies?.value);

  const headerList = await headers();
  const referer = headerList.get('referer');
  console.log("referer : ",referer);
  console.log(headerList.get('User-Agend'))

  return(
    <div>
      <h3>Product List</h3>
      <div>
        {products.map((p:any)=>(
          <ProductCard key={p.id} product = {p}/>
        ))}
      </div>
    </div>
  )
}