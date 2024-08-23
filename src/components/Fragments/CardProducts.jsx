let CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border boreder-gray-700 rounded-lg shadow mx-5">
      {children}
    </div>
  );
};

export default CardProducts;
