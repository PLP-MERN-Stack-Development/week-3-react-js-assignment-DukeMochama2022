import { Link } from "react-router-dom";
import Button from './ui/Button'
import { useTheme } from "../context/ThemeContext";



const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between text-gray-800 items-center">
        <h1 className="text-2xl text-blue-700 font-bold">TaskManager</h1>
        <div className="space-y-4 font-serif ">
          <Link to="/" className="hover:underline mx-4">
            Home
          </Link>
          <Link to="/tasks" className="hover:underline mx-4">
            Tasks
          </Link>
          <Link to="/posts" className="hover:underline mx-4">
            Posts
          </Link>

          <Button onClick={toggleTheme} variant="primary">
          {theme === "dark" ? "🌞" : "🌙"} {theme === "dark" ? "Light" : "Dark"}{" "}
          Mode
        </Button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
