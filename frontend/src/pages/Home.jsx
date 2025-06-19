import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" max-w-6xl mx-auto p-10 ">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">MyApp</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-100 mb-8 max-w-3xl mx-auto">
          A modern React application built with Tailwind CSS, featuring reusable
          components, dark mode support, and a clean architecture for better
          development experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
      {/* features section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Features & Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Task Management"
            content="Organize and track your tasks with our intuitive task manager"
            icon="📝"
            footer={
              <Link to="/tasks" >
                <Button variant="primary" className="w-full">
                  Try Task Manager
                </Button>
              </Link>
            }
          />

          <Card
            title="Post Explorer"
            content="Browse and search through posts with real-time filtering capabilities"
            icon="📰"
            footer={
              <Link to="/posts">
              <Button variant="primary" className="w-full">
                See Posts
              </Button>
            </Link>
            }
          />

          <Card
            title="Dark Mode"
            content="Seamless dark and light theme switching for better user experience"
            icon="🌙"
            footer={
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Toggle theme from any page
              </div>
            }
          />
        </div>
      </div>

      {/* about section */}

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            About This Project
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            This is a comprehensive React application demonstrating modern web
            development practices. Built with reusable components, context API
            for state management, and Tailwind CSS for styling. The project
            showcases clean architecture, responsive design, and excellent user
            experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                React
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modern UI Library
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Tailwind
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utility-First CSS
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Components
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reusable & Modular
              </p>
            </div>

            <div className="p-4">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Performance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized & Fast
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore the features and see what this application can do for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tasks"
              className="text-gray-700 dark:text-gray-300 bg-gray-800 rounded hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explore Tasks
              </Button>
            </Link>

            <Link
              to="/posts"
              className="text-gray-700 dark:text-gray-300 bg-gray-800 rounded hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explore Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
