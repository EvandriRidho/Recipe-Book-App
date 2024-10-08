const Checkbox = (props) => {
  const { type, id } = props;
  return (
    <input
      type={type}
      id={id}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
  );
};

export default Checkbox;
