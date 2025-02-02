export const Button = ({ children, handlerAction }) => {
  return (
    <button
      onClick={handlerAction}
      className="px-4 py-2 bg-white border-1 border-teal-500 text-teal-700 font-bold rounded-lg shadow-md hover:border-cyan-600 hover:text-cyan-700 transition transform active:scale-95 w-fit"
    >
      {children}
    </button>
  );
};
