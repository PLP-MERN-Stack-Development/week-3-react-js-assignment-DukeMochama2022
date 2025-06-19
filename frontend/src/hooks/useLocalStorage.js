import React from "react";
import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  //get initial value from the local storage
  const [storedValue, setStoredValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  });

  //update local storage when the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, setStoredValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
