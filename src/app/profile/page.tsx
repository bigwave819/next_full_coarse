"use client"

import { useRouter } from "next/navigation";

function profile() {

    const router = useRouter();

    const handleNavigate = () => {
        router.push("/")
    }
    return ( 
        <div>
            <h1 className="text-gray-400">profile component - client</h1>
            <button onClick={handleNavigate}>Navigate to home PAGE</button>
        </div>
     );
}

export default profile;