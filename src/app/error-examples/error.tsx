"use client";

import { useEffect } from "react";

function ErrorExampleFallbackUI({error, reset}: {
    error: Error & { digest? :string },
    reset: () => void
}) {

    useEffect(() => {
        //send a report to you error logging service
    }, [error])
    return ( 
        <div>
            <p className="text-red-700">{error?.message || "an error just occured"}</p>
        </div>
     );
}

export default ErrorExampleFallbackUI;