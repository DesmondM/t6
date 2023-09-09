import { useEffect, useState } from "react";

export  function useFetch (url)  {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // This is a custom hook
    useEffect(() => {
        // This is a custom hook
        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        };
        getData();
    }, [url]);
    return [data, loading];
};