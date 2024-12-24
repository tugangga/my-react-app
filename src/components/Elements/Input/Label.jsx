const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      htmlFor={htmlfor}
      className="block text-sm/6 font-medium text-gray-900 mb-2"
    >
      {children}
    </label>
  );
};
export default Label;
