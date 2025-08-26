// import PropTypes from "prop-types";

// function List(props) {
 
// const Category = props.category;    
// const itemList = props.items;

//     // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
//     // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC 
//     // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC 

//     // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//     // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//     const listItems = itemList.map((item) => <li key={item.id}>
//         {item.name}: &nbsp;
//         <b>{item.calories}</b></li>);

//     return (
//         <>
//         <h3 className="list-category">{Category}</h3>
//         <ol className="list-items">{listItems}</ol>
//         </>
//     );
// }

// List.propTypes = {
//     category: PropTypes.number,
//     items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
//                                                name: PropTypes.string, 
//                                                calories: PropTypes.number
//     })),
// }

// List.defaultProps = {
//     category: "Category",
// }

// export default List

// 2nd code

function List({ category = "Category", items = [] }) {

    const listItems = items.map((item) => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>);

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
}
// List.propTypes = {
//     category: PropTypes.number,
//     items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
//                                                name: PropTypes.string, 
//                                                calories: PropTypes.number
//     })),
// }



export default List 

