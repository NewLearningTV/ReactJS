import * as React from 'react';

const welcome = {
    intro: '안녕하세요',
    title: '리액트',
};

function getTest(text) {
    return text;
}

const listToDo = [
    {
        taskName: '청소하기',
        frequency: '1주일에 한번',
    },
    {
        taskName: '개발공부하기',
        frequency: '1주일에 5번',
    },
    {
        taskName: '요리하기',
        frequency: '1주일에 3번',
    }
]

function App() {
    return (
        <div>
            <h1>{welcome.intro} - {welcome.title} {getTest('테스트입니다!')}</h1>
            
            {/* JSX의 htmlFor는 자바스크립트에 더 가깝습니다 */}
            <label htmlFor="search">검색창: </label>
            <input id="search" type="text" />

            <ul>
                {listToDo.map(function (item) {
                    return <li key={item}>{item.taskName}, {item.frequency}</li>;
                })}
            </ul>

        </div>
    );
}

export default App;