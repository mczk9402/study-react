import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("制限");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素がすでに存在しています");
        return prevArray;
      }

      // const newArray = [...prevArray, text];
      // return newArray;

      return [...prevArray, text]; //こちらでも動く
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
