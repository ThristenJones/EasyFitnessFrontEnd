const Logout = () => {
    
    localStorage.removeItem('token');
    window.location="/login";
}
export default Logout;