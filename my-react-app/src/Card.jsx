import ProfilePic from './assets/Muzammil Murtaza.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture"></img>
            <h2 className="card-title">Muzammil Murtaza</h2>
            <p className="card-text">I am a Programmer and I love to learn new things in programming.</p>
        </div>
    );
}

export default Card