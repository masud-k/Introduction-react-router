import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {

    const { id, title, body } = post;

    const navigate = useNavigate();


    const postStyle = {
        border: '2px solid tomato',
        margin: '5px',
        padding: '10px',
        borderRadius: '12px',
        width: '350px',
        textAlign: 'center'
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`)

    }

    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}>Show details</Link>
            <button onClick={handleShowDetails}>show details</button>
        </div>
    );
};

export default Post;