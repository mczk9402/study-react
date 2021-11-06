import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
