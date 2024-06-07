import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      // Form is valid, proceed with submission logic
      console.log('Form submitted');
    } else {
      // Form is invalid
      console.log('Form is invalid');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="cursor-pointer text-black absolute top-4 left-4 text-xl font-bold">App</div>
      <div className="bg-white p-8 rounded shadow-md w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
             required={true}
              type="email"
              placeholder="email@domain.com"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <Link to = "/home">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            login
          </button>
          
          </Link>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account yet?
          <a href="/register" className="text-gray-600 decoration-transparent">
            Click here to register.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
