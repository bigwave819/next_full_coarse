import { Metadata } from "next";


const dummyData = {
    "1":{
        title: "One"
    },
    "2":{
        title: "Two"
    },
    "3":{
        title: "Three"
    }
}

export async function generateMetaData({params} : { 
    params: Promise<{ slug: String }>;
}) : Promise<Metadata> {
    const { slug } = await params;
    const data = dummyData[slug as keyof typeof dummyData]

    return{
        title: data.title,
        description: data.title
    }
}

async function DynamicMetaDataExample({ params }: { params: Promise<{ slug: string }> }) {

    const {slug} = await params;
    const data = dummyData[slug as keyof typeof dummyData]
    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
}

export default DynamicMetaDataExample;