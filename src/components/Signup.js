import '../css/App.css';

function handleSignup(event) {
    fetch('http://localhost:8000/api/v1/auth/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            confirm_password: document.getElementById('confirm_password').value,
        })
    }).then(data => {
            console.log(data);
            window.location.reload();
        }).catch(error => {
            console.log('Error:', error.message);
    })
}


function Signup() {
  return (
    <div className='main'>
        <h1>Sign Up</h1>
        <form id='signup' onSubmit={handleSignup}>
            <input type='text' name='username' id='username' placeholder='Username'/>
            <input type='password' name='password' id='password' placeholder='Password'/>
            <input type='password' name='confirm_password' id='confirm_password' placeholder='Confirm Password'/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  );
}

export default Signup;