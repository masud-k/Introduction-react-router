

const Post = ({post}) => {

    const {id, title, body}=post;
    const postStyle = {
        border: '2px solid tomato',
        margin: '5px',
        padding: '10px',
        borderRadius: '12px',
        width: '400px',
        textAlign: 'center'
    }

    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
        </div>
    );
};

export default Post;