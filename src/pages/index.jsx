import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback(e => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, [])

  useEffect(() => {
    // マウント時の処理
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の処理
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <button onClick={handleClick}>ボタン</button>
      <a href="/about" onClick={handleClick}>ボタン２</a>
      <Main page="index"/>

      <Footer />
    </div>
  );
}
