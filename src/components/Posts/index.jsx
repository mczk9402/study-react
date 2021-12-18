import { useCallback, useEffect, useReducer, useState } from 'react';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

// useReducerVer
// 現在のstateと、新しいactionを受け取って新しいstateを返す
// typeによって返す処理を事前に決めておく　元の値を使って差分を追加する
const reducer = (state, action) => {
  switch (action.type) {
    case 'end':
      console.log(action);
      // 元の変数を代入する
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case 'error':
      console.log(action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return new Error('no such action!!');
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      // APIのたたき先　エンドポイント
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データの取得に失敗しました');
      }
      const json = await res.json();
      dispatch({ type: 'end', data: json });
    } catch (error) {
      dispatch({ type: 'error', error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log('foo');

  // そもそもDOM別に出し分ける
  if (state.loading) {
    return <div className={'loading'}>ローディング中</div>;
  }

  if (state.error) {
    return <div className={'error'}>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div className="empty">データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ol>
  );
};
