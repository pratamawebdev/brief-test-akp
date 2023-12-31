const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="pl-3 font-medium text-medium">
      {children}
    </label>
  );
};

export default Label;
