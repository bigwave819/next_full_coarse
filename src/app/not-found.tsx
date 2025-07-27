'use client';

import { useRouter } from "next/navigation";


function NotFoundPage() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/")
    }
    return ( 
        <div className="w-full max-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">OOPS! page not exists</h2>
            <button className="px-3 py-1.5 bg-black rounded-lg text-white my-5 navigate" onClick={handleNavigate}>Go to Home</button>
        </div>
     );
}

export default NotFoundPage;