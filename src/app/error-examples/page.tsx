
async function getProducts() {
    const shouldError = Math.random() > 0.5 

    if (shouldError) {
        throw new Error("failed to fetch products")
    }

    return [
        {
            id: 1,
            name: "One"
        },
        {
            id: 2,
            name: "Two"
        },
        {
            id: 3,
            name: "Three"
        },
    ]
}

async function ErrorExamplePage() {

    const products = await getProducts()
    return ( 
        <div className="p-4">
            <h1>Product Lists</h1>
            <div className="grid gap-4">
                { products.map((product) => 
                    <div key={product.id}>
                        <p>{product.name}</p>
                    </div>
                ) }
            </div>
        </div>
     );
}

export default ErrorExamplePage;