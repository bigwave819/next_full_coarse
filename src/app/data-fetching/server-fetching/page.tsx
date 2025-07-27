

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

interface ProductsResponse {
    products: Product[];
    total: number
}

async function getProducts(): Promise<ProductsResponse> {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("failed to fetch the products")
    }

    return response.json()
}


async function ServerSideFetchExapmle() {

    const products = await getProducts()
    return (
        <div>
            <h1>Server side fetching</h1>
            <h3>{products?.total} the total number of all products</h3>
            <div className="fle flex-col gap-4">
                {
                    products?.products?.map((product) =>
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

export default ServerSideFetchExapmle;