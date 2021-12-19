import { useCallback, useEffect, useReducer, useState } from 'react';
import { usePosts } from 'src/hooks/usePosts';

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div className={'loading'}>ローディング中</div>;
  }

  if (error) {
    return <div className={'error'}>{error.message}</div>;
  }

  if (isEmpty) {
    return <div className="empty">データは空です</div>;
  }

  return (
    <ol>
      {data.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ol>
  );
};
