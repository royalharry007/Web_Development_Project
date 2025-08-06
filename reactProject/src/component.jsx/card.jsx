function Card( props) { // we have done destructuring 
    console.log(props.name);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-38 object-cover"
        src="https://cdn.pixabay.com/photo/2025/07/14/07/18/dog-9713381_1280.jpg"
        alt="Card"
      />
      <div className="p-1">
        <h2 className="text-xl font-semibold mb-2">{props.name} </h2>
        <p className="text-gray-600 mb-4">
          This is a simple card component built with React and Tailwind CSS.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
