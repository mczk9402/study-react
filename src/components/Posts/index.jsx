import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { useCallback, useEffect, useState } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      // APIのたたき先　エンドポイント
      const res = await fetch('https://jsonplaceholder.typicode.com/posts1');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データの取得に失敗しました');
      }

      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoding(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // そもそもDOM別に出し分ける
  if (loading) {
    return <div className={'loading'}>ローディング中</div>;
  }

  if (error) {
    return <div className={'error'}>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div className="empty">データは空です</div>;
  }

  return (
    <div className={styles.container}>
      <ol>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};
