import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate(); // To navigate back to all blogs
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      
      try {
        const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blog details.");
      }
    };

    fetchBlog();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(blog.title);
    setEditContent(blog.content);
  };

  const handleSave = async () => {
    try {
      const updatedBlog = { title: editTitle, content: editContent };
      const response = await axios.put(`http://localhost:3000/api/blogs/${id}`, updatedBlog);
      setBlog(response.data);
      setIsEditing(false);
    } catch (err) {
      setError(err.message || "Failed to update the blog.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) {
      return; // Exit if the user cancels the action
    }

    try {
      await axios.delete(`http://localhost:3000/api/blogs/${id}`);
      navigate("/view-blogs"); // Navigate back to all blogs
    } catch (err) {
      setError(err.message || "Failed to delete the blog.");
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="p-4 text-red-700 bg-red-100 rounded">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="block w-full mb-4 p-2 border rounded"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="block w-full mb-4 p-2 border rounded"
            rows="5"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-4">{blog.content}</p>
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
