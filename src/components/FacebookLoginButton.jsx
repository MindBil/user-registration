const FacebookLoginButton = () => {
  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  return (
    <button className="facebook-login" onClick={handleFacebookLogin}>
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
