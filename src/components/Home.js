import { useEffect, useState } from 'react';
import '../css/App.css';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/users/post/list/');
                const data = await response.json();
                setPosts(data);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (posts.length === 0) {
        return (
            <div className='main'>
                <h1>Nobody has posted yet.</h1>
            </div>
        )
    }

    return (
        <div className='main'>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div className='posts'>
                    <h2>{post.owner}</h2>
                    <img src={post.image} alt={`img`}></img>
                    <p>{post.text}</p>
                </div>
            ))}

</div>
    );
}

export default Home;
