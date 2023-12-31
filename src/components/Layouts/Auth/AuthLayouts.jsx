const AuthLayouts = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-gray-800 sm: w-80">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
