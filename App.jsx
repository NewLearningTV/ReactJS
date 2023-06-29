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
        id: 1,
        taskName: '청소하기',
        frequency: '1주일에 한번',
    },
    {
        id: 2,
        taskName: '개발공부하기',
        frequency: '1주일에 5번',
    },
    {
        id: 3,
        taskName: '요리하기',
        frequency: '1주일에 3번',
    }
]

function App() {
    return (
        <div>
            <h1>{welcome.intro} - {welcome.title} {getTest('테스트입니다!')}</h1>
            
            {/* JSX의 htmlFor는 자바스크립트에 더 가깝습니다 */}
            {/* <label htmlFor="search">검색창: </label>
            <input id="search" type="text" /> */}

            <Search />

        
        <br />
        <br />
        <hr />
        <br />

        {/* 새로운 Component 사용하기 */}
        <h2>새로운 component의 시작!</h2>
        <List />

        </div>
    );
}

function List() {
    return (
    <ul>
            {listToDo.map(function (item) {
                    return <li key={item.id}>{item.taskName}, {item.frequency}</li>;
                })}
            </ul>);
}

const Search = () => {

    const handleChange = (event) => {
        console.log(event); /* 이벤트 관련 */
        console.log(event.target.value); /* 이벤트가 영향시키는 HTML 아이템 */
    }

    return (
        <div>
            <label htmlFor="search">검색: </label>
            <input id="search" type="text" onChange={handleChange} />
        </div>
    )
}

export default App;