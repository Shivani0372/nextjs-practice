"use client"

import React,{useEffect} from "react";

export default function Footer(){
    useEffect(()=>{
        console.log("Fectching all products");
        fetch("https://fakestoreapi.com/products")
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            .catch((error)=>console.error("Error Fetching Data:",error));
    },[]);

    console.log("display footer");

    return <div>
        Footer
    </div>
}