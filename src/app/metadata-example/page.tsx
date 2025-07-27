import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Meta data example",
    description: "This is the example if writing the metadata"
};

function MetadataExample() {

    const example = [
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
        }
    ]
    return ( 
        <div>
            <h1>Meta Data example</h1>
            <ul>
                {
                    example.map((items) => 
                        <li key={items.id}>
                            <Link href={`/metadata-example/${items.id}`}>{items.name}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
     );
}

export default MetadataExample;