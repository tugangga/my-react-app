const AuthLayout = (props) => {
  const { children, title, desk } = props;
  return (
    <div className="flex flex-col justify-center min-h-screen items-center px-6 py-12 lg:px-8 ">
      <div className="w-full max-w-md">
        <h1 className="text-3xl text-center font-bold text-indigo-600 mb-4">
          {title}
        </h1>
        <h2 className="mb-12 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {desk}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
