import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url, opts);
                const data = await response.json();
                setData(data);
                if (!response.ok) {
                    setError(response.statusText);
                } else {
                    setData(data);
                }
            } catch (ex) {
                setError(ex.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();    
    }, [url]);

    return [data, loading, error];
}