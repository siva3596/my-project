import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
    {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">My App</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Welcome Section */}
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
      <header className="bg-gray-100 text-center py-10">
        <h2 className="text-3xl font-bold text-gray-700">Welcome to My App!</h2>
        <p className="mt-2 text-gray-600">Explore the features and enjoy your experience.</p>
      </header>
        <Link to="/login">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
        </Link>
      </div>
      <main className="container mx-auto my-10 px-4">
      <h4 className="text-2xl font-bold text-gray-700">Blog</h4>
      </main>
         {/* Action Buttons Section */}
         <div className="container mx-auto my-10 px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">
          Quick Actions
        </h3>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          <Link to="/create-blog">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Create Blog
            </button>
          </Link>
          <Link to="/view-blogs">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View All Blogs
            </button>
          </Link>
          <Link to="/view-users">
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              View All Users
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto my-10 px-4">
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-700">Feature 1</h3>
          <p className="mt-2 text-gray-600">
            Learn more about our amazing features and how they can benefit you.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-700">Feature 2</h3>
          <p className="mt-2 text-gray-600">
            Dive into the details of what makes our app stand out from the rest.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

