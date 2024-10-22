import './css/App.css';

function loginHandler(event) {
    event.preventDefault();

    fetch('http://localhost:8000/api/v1/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        })
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error.message);
        })
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('access_token', data.access_token);
                console.log('Successfully logged in');
            }
        })

}


function Login() {
  return (
    <div className='main'>
        <h1>Log In</h1>
        <form id='login-form' onSubmit={loginHandler}>
            <input type='text' name='username' id='username' placeholder='Username'/>
            <input type='password' name='password' id='password' placeholder='Password'/>
            <button type='submit'>Log In</button>
        </form>
    </div>
  );
}

export default Login;