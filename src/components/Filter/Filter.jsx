function Filter({ filters, onFilterChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white  p-6 grid grid-cols-1 sm:grid-cols-4 gap-4"
    >
      {filters.map((filter) => (
        <div key={filter.name} className="flex flex-col">
          <label
            htmlFor={filter.name}
            className="text-sm font-semibold text-teal-900 mb-2"
          >
            {filter.label}
          </label>
          {filter.type === "select" ? (
            <select
              id={filter.name}
              name={filter.name}
              value={filter.value}
              onChange={onFilterChange}
              className="block w-full rounded-lg border border-teal-400 bg-white p-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-teal-900"
            >
              <option value="">Select {filter.label}</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={filter.name}
              name={filter.name}
              type={filter.type}
              value={filter.value}
              onChange={onFilterChange}
              placeholder={filter.placeholder}
              className="block w-full rounded-lg border border-teal-400 bg-white p-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-teal-900"
            />
          )}
        </div>
      ))}
      <div className="flex items-end">
        <button
          type="submit"
          className=" px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md shadow-teal-900/30 hover:bg-teal-500 transition transform active:scale-95"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}

export default Filter;
