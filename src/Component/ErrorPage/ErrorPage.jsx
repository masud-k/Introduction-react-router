import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!</h2>
            <h3>{error.status || error.message}</h3>
            {
                error.status === 404 && <div>
                <p>The page you are looking for does not exist</p>
                <Link to='/'><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;