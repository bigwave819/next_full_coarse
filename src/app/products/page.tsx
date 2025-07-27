import Link from "next/link";

function Products() {

    const products = [
        {
            id: "1",
            name: "Mobile",
            price: 500
        },
        {
            id: "2",
            name: "desktop",
            price: 1000
        },
        {
            id: "3",
            name: "laptop",
            price: 1500
        }
    ]
    return ( 
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid gap-4">
                { products.map((product) => 
                    <div key={product.id} className="border p-4 rounded">
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                        <Link href={`/products/${product.id}`}>
                        View details
                        </Link>
                    </div>
                ) }
            </div>
        </div>
     );
}

export default Products;