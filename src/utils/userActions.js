export const Logout = () => {
    localStorage.removeItem('access_token');
    window.location.reload();
}

export default Logout;