import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

function SearchResults() {
  const { searchResults } = useContext(AppContext);
  const [tenResults, setTenResults] = useState([]);
  const [pagination, setPagination] = useState({ from: 0, to: 10 });

  const nextHandler = () => {
    setPagination((prev) => ({ from: prev.from + 10, to: prev.to + 10 }));
  };

  const prevHandler = () => {
    setPagination((prev) => ({ from: prev.from - 10, to: prev.to - 10 }));
  };

  useEffect(() => {
    if (!searchResults || !searchResults.results) return;

    const { from, to } = pagination;
    setTenResults(searchResults.results.slice(from, to));
  }, [searchResults, pagination]);

  return (
    <>
      {!searchResults?.results || searchResults?.status ? (
        <p>{searchResults?.message}</p> // error response from api (200)
      ) : (
        <>
          <div className="flex mt-12 justify-center">
            <div className="md:w-5/6 sm:w-full">
              <span className="text-xl">Search Results</span>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border">
                        <thead className="border-b">
                          <tr className="bg-sky-200 border-sky-200">
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Description</th>
                          </tr>
                        </thead>

                        <tbody>
                          {tenResults.map((result) => (
                            <tr className="border-b " key={result.url}>
                              <td className="px-6 py-4">
                                <a href={result.url} className="text-blue-500">
                                  {result.title}
                                </a>
                              </td>

                              <td className="px-6 py-4">
                                {result.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <button
                className="px-4 py-1 text-sm mr-4 text-sky-600 font-semibold rounded-full border border-sky-200 hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                onClick={prevHandler}
                disabled={pagination.from === 0}
              >
                Prev
              </button>
              <button
                className="px-4 py-1 text-sm text-sky-600 font-semibold rounded-full border border-sky-200 hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                onClick={nextHandler}
                disabled={pagination.to >= searchResults?.results.length}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SearchResults;
