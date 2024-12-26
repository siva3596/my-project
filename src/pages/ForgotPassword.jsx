import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-700">Forgot Password</h1>
      <form className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        {/* New Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your new password"
          />
        </div>
        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Re-enter Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Re-enter your new password"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
          Back to  <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
        </p>
     </div>
    </div>
  );
};

export default ForgotPassword;
