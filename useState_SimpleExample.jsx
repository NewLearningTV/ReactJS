/* 원래 여기서 나온 코드입니다: https://ko.legacy.reactjs.org/docs/hooks-state.html */
/* 이 코드를 실행하려면 playcode.io/react에서 해보세요 */

import React, { useState } from 'react';

export function App(props) {
        // 새로운 state 변수를 선언하고, count라 부르겠습니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    )    
};