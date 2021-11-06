import { useRouter } from "next/dist/client/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/about" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = bgColor;
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
    // router.pathname から bgColor へ
  }, [bgColor]);
};
