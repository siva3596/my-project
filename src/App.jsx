import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import CreateBlog from "./pages/CreateBlog";
import ViewBlogs from "./pages/ViewBlogs";
import BlogDetail from "./pages/BlogDetail";
import ViewUsers from "./pages/ViewUsers";
import UserDetail from './pages/UserDetail';
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/view-blogs" element={<ViewBlogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/user/:id" element={<UserDetail />} />

      </Routes>
    </Router>
    </div>
  );
};

export default App;
