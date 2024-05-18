import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);

    const {name, email}= user;

    return (
        <div>
            <h3>Details of the Users: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;