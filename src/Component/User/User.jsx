import { Link } from "react-router-dom";


const User = ({ user }) => {

    const { id, name, phone, email } = user;
    const userStyle = {
        border: '2px solid gray',
        margin: '5px',
        padding: '10px',
        borderRadius: '5px',
        width: '300px',
        textAlign: 'center'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>show details</Link>
        </div>
    );
};

export default User;