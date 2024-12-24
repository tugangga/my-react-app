const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button
      type="submit"
      className={`flex w-full justify-center rounded-md ${variant} text-white px-3 py-1.5 text-sm/6 font-semibold  shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
    >
      {children}
    </button>
  );
};

export default Button;
