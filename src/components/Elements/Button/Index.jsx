const Button = (props) => {
  const { type, children, onClick, classname } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-semibold rounded-full h-10 ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
