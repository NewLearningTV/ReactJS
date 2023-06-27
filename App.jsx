import * as React from 'react';

const welcome = {
    intro: '안녕하세요',
    title: '리액트',
};

function getTest(text) {
    return text;
}

function App() {
    return (
        <div>
            <h1>{welcome.intro} - {welcome.title} {getTest('테스트입니다!')}</h1>
            
            {/* JSX의 htmlFor는 자바스크립트에 더 가깝습니다 */}
            <label htmlFor="search">검색창: </label>
            <input id="search" type="text" />
        </div>
    );
}

export default App;