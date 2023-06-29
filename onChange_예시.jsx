/* 챗GPT를 사용해서 만든 코드입니다 */

/* 이 코드는 playcode.io/react에서 복사해서 사용하면 실행이 가능합니다 */
/* 그러면 특별히 React를 설치 안해도 실험해 볼수 있습니다! :) */
/* GitHub Follow, YouTube Subscribe / Like 부탁드립니다! */

import React, { useState } from 'react';

export function App(props) {
    const [inputValue, setInputValue] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        setWelcomeMessage(`${event.target.value} 환영합니다!`);
    }

    return (
        <div>
            <form>
                <label>
                    이름:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                    <input type="submit" value="제출" />
            </form>
            <p>{welcomeMessage}</p>
        </div>
    )
}