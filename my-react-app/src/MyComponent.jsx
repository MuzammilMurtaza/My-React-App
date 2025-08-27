import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmpluyed] = useState(false);

    const updateName = () => {
        setName("Muzammil");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmpluyed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );


}

export default MyComponent

