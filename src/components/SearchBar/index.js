import React, { useContext, useState } from "react";
import SearchResults from "../SearchResults";
import { AppContext } from "../../context/AppContext";



function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const {
    setQuerySearch,
    setSearchResults
  } = useContext(AppContext);
  
  /* Input search term handling and do not display results updated text when user type some input here */
  const searchQuery = (e) => {
    setSearchTerm(e?.target.value);
  };

  /* form submission with Query search term 
  to get called in context file with respective API fetching */
  const handleSubmission = (e) => {
    e.preventDefault();
    setQuerySearch(searchTerm);
    setSearchResults([]);
  };

  return (
      <>
    <form data-testid="form" className="w-full" onSubmit={handleSubmission}>
      <div className="flex items-center justify-center">
        <div className="flex border-2 md:w-4/6 sm:w-full rounded">
          <div className="w-full">
            <input
              id="Search"
              type="text"
              aria-label="search-input"
              className="block w-full  px-4 py-2 focus:outline-yellow-100 bg-white"
              onChange={searchQuery}
              value={searchTerm}
              placeholder="Search Query..."
            />
          </div>
          <button
            className="flex items-center justify-center px-4 border-l"
            type="submit"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
    <SearchResults />
    </>
  );
}

export default SearchBar;