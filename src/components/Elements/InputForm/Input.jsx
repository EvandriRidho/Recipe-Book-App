const Input = (props) => {
  const { type, id, placeholder } = props;
  return (
    <input
      type={type}
      id={id}
      className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;
