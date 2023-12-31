const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      className="w-full border-2 border-slate-100 rounded-xl py-2.5 pl-3 focus: outline-blue-400"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
