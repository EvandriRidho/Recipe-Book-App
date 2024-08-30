const InputForm = (props) => {
  const { type, id, placeholder, htmlFor, children } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {children}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
