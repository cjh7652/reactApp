import React from 'react';

const MyComponent = ({name,a}) => {
    return (
        <div>
            나의 새롭고 멋진 컴포넌트야 너의 이름은 {name} 이야
            <p>{a}는 오늘 집으로 갑니다</p>
        </div>
    );
};

export default MyComponent;