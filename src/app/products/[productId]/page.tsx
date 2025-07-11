import {ProductService} from "@/app/services/product-services";
import { title } from "process";
import React from 'react'

export async function generateMetadata(props:any) {
  console.log("generated meta data:",props);
  return{
    title:"Product detail Page"
  }
}

export default async  function ProductDetail(props:any) {
    console.log(props);
    const productId = props.params.productId;
    var product;

    if(productId){
        product = await ProductService.getProdutById(productId);
    }

  return (
  
     <div>
        <img src={product.image}/>
      <h3>{product.title}</h3>
    </div>
  )
}
