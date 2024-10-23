export const isAuthenticated = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return false;
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp > currentTime;
    } catch (error) {
        console.error('Error decoding JWT token:', error);
        return false;
    }
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        return null;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/auth/info/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        return  json.username;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};



