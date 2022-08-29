import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [data, setdata] = useState(() => {
    const result = localStorage.getItem(key);
    if (!result) return initialValue;
    return JSON.parse(result);
  });

  const setValue = (value) => {
    setdata(value);
  };
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
  return { data, setValue };
}
export default useLocalStorage;
