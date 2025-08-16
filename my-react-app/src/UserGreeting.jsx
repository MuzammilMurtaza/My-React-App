import PropTypes from "prop-types";

function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

// function UserGreeting(props) {
//     const { isLoggedIn = false, username = "Guest" } = props;

//     const welcomeMessage = (
//         <h2 className="welcome-message">
//             Welcome {username}
//         </h2>
//     );

//     const loginPrompt = (
//         <h2 className="login-prompt">
//             Please log in to continue {username}
//         </h2>
//     );

//     return isLoggedIn ? welcomeMessage : loginPrompt;
// }

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Guest",
}

export default UserGreeting