import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const { title, body } = post;
    const navigate = useNavigate();
    const pStyle = {
        border: '2px solid black',
        borderRadius: '12px',
        padding: '10px',
        width: '750px',
        height: '200px',
        backgroundColor: 'lightblue'
    }

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div style={pStyle}>
            <h3>Post title: {title}</h3>
            <p>Status: {body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;