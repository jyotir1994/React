import React from 'react';

// Normal Function
// function Greet(){
// return <h1>Hello Jyoti</h1>
// }

//Arrow function
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>hello {props.name} and {props.no}</h1>
            {props.children}
        </div>
    )
}

export default Greet;