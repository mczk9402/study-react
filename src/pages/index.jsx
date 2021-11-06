import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => preevCount + 1);
    }
  }, [count]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  const handleChange = useCallback(e => {
    if (e.target.value.length > 5) {
      alert("制限")
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  console.log(text);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <div className={styles['counter-wrap']}>
        {isShow ? <h1>{count}</h1> : null}
        <button
          onClick={handleDisplay}
        >{isShow ? "非表示" : "表示"}</button>
        <input
          type="text"
          value={text}
          onChange={handleChange}/>
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index"/>

      <Footer />
    </div>
  );
}
