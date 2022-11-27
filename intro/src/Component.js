import useJsonFetch from "./hooks/useJsonFetch";

function Component({ url }) {
  const [data, loading, error] = useJsonFetch(url, {});

  return (
    <div className="component">
      {loading && <div>Loading...</div>}
      {!loading && error && <div> {JSON.stringify(error)}</div>}
      {!loading && !error && <div> {JSON.stringify(data)}</div>}
    </div>
  );
}

export default Component;