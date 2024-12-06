//import React from 'react';
// import React from 'react';

function Signup() {
  return (
    <div>
      <h1>Create an Account</h1>
      <p>Sign up to start your pet adoption journey.</p>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
      <p><a href="/">Back to Home</a></p>
    </div>
  );
}

export default Signup;
