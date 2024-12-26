import React, { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:3000/api/blogs", {
        title,
        content,
      });
      console.log("Response:", response.data); // Debugging log
      setMessage("Blog created successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Debugging log
      setMessage(
        error.response?.data?.error || "An error occurred while creating the blog."
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Create a New Blog</h1>
      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            message.includes("success")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ensure `onSubmit` is attached to the form */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-900">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your blog title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-900">
            Blog Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write your blog content here..."
          ></textarea>
        </div>
        <button
          type="submit" // This ensures form submission triggers `handleSubmit`
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
