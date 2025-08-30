import React, { useState, useEffect } from "react";

function MyComponent2() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count,color]);

    // document.title = `Count: ${count} ${color}`;


    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent2

// import React, { useState, useEffect } from "react";

// function MyComponent2() {
//   const [count, setCount] = useState(0);

//   console.log("🔄 Render ho gaya. Count:", count);

//   useEffect(() => {
//     console.log("✨ useEffect chala. Document title update hua. Count:", count);
//     document.title = `Count: ${count}`;
//   });
// // console.log("✨ useEffect chala. Document title update hua. Count:", count);
// //     document.title = `Count: ${count}`;

//   function addCount() {
//     setCount(c => c + 1);
//   }

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={addCount}>Add</button>
//     </>
//   );
// }

// export default MyComponent2;
