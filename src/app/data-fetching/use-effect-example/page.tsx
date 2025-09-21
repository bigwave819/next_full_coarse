'use client'

import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}


function UseEffectExample() {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState<Product>([])

    const fetchListOfProduct = async () => {
        try {
            setIsLoading(true)
            const res = await fetch("https://dummyjson.com/products")
            const result = await res.json()

            if (result) {
                setIsLoading(false)
                setData(result?.products)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchListOfProduct()
    })

    if (isLoading) return <h1>Loading ....</h1>
    return ( 
        <div>
            <h1>Use Effect Example</h1>
            <div className="fle flex-col gap-4">
                {
                    data.map((product) =>
                        <div key={product.id}>
                            <h3>{product.id}</h3>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                        </div>
                    )
                }
            </div>
        </div>
     );
}

export default UseEffectExample;