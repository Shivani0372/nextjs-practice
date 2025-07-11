// ✅ productCard.tsx
// "use client"
// import Link from "next/link"
// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function ProductCard(props: any) {
//     const prod = props.product;
//     const [selectProduct, setSelectedProduct] = useState({});
//     const router = useRouter();

//     const selectedProduct = () => {
//         console.log("Selected Products: ", prod);
//         setSelectedProduct(prod);
        
//     };

//     return (
//         <div>
            
//             <Link href = {'/products/'+prod.id}>
//             <div onClick={selectedProduct}>
//                 <button onClick={()=>router.push(`/products/${prod.id}`)}>Details</button>
//                 <img src={prod.image} width={50} alt={prod.title} />
//                 {prod.title}
                
//             </div>
//         </Link>
//         </div>
//     );
// }

"use client";
import { useRouter } from "next/navigation"; // ✅ for App Router
import { useState } from "react";
import GoToCartButton from "../GoToCart";

export default function ProductCard({ product }: { product: any }) {
    const router = useRouter();

    const handleClick = () => {
        console.log("Selected Product:", product);
        router.push(`/products/${product.id}`);
    };

    return (
        <div onClick={handleClick} className="cursor-pointer p-4 border rounded hover:shadow">
            <img src={product.image} alt={product.title} width={50} />
            <div>{product.title}</div>
            <GoToCartButton/>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                Details
            </button>
        </div>
    );
}

