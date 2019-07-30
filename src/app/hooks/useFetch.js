import { useEffect, useState } from 'react';

async function apiCall({ src, setLoading, setSuccess, setError }) {
  setLoading(true);
  const response = await fetch(src);
  if (response.ok) {
    const json = await response.json();
    setSuccess(json);
  } else {
    setError({ isError: !response.ok, code: response.code });
  }
  setLoading(false);
}

function useFetch({ initialState = null, src, dataKey = 'data', onError, onSuccess }) {
  const [data, setSuccess] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall({
      setLoading,
      setError: data => (onError ? setError(onError(data)) : setError(data)),
      setSuccess: data => (onSuccess ? setSuccess(onError(data)) : setSuccess(data)),
      src,
    });
  }, [onError, src, onSuccess]);

  return { [dataKey]: data, loading, error };
}

export default useFetch;
