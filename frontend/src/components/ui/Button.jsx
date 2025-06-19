import PropTypes from "prop-types";
import clsx from "clsx";

const baseStyles =
  "px-4 py-2 rounded font-medium focus:outline-none transition cursor-pointer";

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 ",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700 ",
};

const Button = ({
  children,
  type,
  variant = "primary",
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
