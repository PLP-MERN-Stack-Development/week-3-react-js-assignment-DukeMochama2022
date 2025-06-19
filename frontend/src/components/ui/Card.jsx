import PropTypes from "prop-types";
import clsx from "clsx";

const Card = ({ title, content, footer, className }) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-100 dark:border-gray-700",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {content}
      </div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          {footer}
        </div>
      )}
      
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
