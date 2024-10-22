import './css/App.css';

function CreatePostHandler(event) {
    event.preventDefault();

    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
        alert('Please log in');
        return;
    }

    const formData = new FormData();
    formData.append('text', document.getElementById('text').value);
    formData.append('image', document.getElementById('image').files[0]); // Выбираем файл

    fetch('http://127.0.0.1:8000/api/v1/users/post/create/', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(JSON.stringify(errorData));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Post created successfully:', data);
        })
        .catch(error => {
            console.log('Error:', error.message);

        });
}



function CreatePost() {
  return (
    <div className='main'>
        <h1>Create Post</h1>
        <form id='create-post-form' onSubmit={CreatePostHandler}>
            <input type='text' name='text' id='text' placeholder='Title'/>
            <input type='file' id='image'/>
            <button type='submit'>Create New Post</button>
        </form>
    </div>
  );
}

export default CreatePost;