import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [count])

  // console.log(count);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <div className={styles['counter-wrap']}>
        <h1>{ count }</h1>
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index"/>

      <Footer />
    </div>
  );
}
