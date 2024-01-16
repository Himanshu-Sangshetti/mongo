import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful signup (e.g., show a success message)
        console.log('Signup successful:', data);
      } else {
        // Handle signup error (e.g., show an error message)
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error (e.g., show a general error message)
      console.error('Fetch error:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
