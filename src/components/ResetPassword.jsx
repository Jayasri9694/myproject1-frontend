// import React from 'react';


function ResetPassword() {
  return (
    <div>
      <h1>Reset Your Password</h1>
      <p>Enter your email address to reset your password.</p>   
      <input type="email" placeholder="Email" />
      <br />
        <br />
        <br />
      <button>Reset Password</button>
      <p>Remember your password? <a href="/login">Login</a></p>
      <p><a href="/">Back to Home</a></p>
    
    </div>
  );
}

export default ResetPassword;
