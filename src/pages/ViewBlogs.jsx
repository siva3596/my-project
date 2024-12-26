import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blogs
  const [error, setError] = useState(""); // State for error handling

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blogs");
        setBlogs(response.data); // Set the blogs data
      } catch (err) {
        setError(err.message || "Failed to fetch blogs.");
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">All Blogs</h1>
      
      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="mt-2 text-gray-600">{blog.content.substring(0, 100)}...</p>
              <div className="mt-4">
                {/* Read More */}
                <Link
                  to={`/blogs/${blog._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewBlogs;
