const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <button className="google-login" onClick={handleGoogleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
