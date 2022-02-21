import React, { useState, createContext, useEffect, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [querySearch, setQuerySearch] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const fetchResultsFromAPI = async (search) => {
    const baseURL = `https://help-search-api-prod.herokuapp.com/search`;
    const url = new URL(baseURL);
    const query = new URLSearchParams(url.search);
    query.append("query", search);

    const apiUrl = `${baseURL}?${query.toString()}`;

    const res = await fetch(apiUrl);
    const fetchResults = await res.json();
    setSearchResults(fetchResults);
  };

  useEffect(() => {
    querySearch && fetchResultsFromAPI(querySearch);
  }, [querySearch]);

  const contextValue = useMemo(
    () => ({
      searchResults,
      setQuerySearch,
      setSearchResults,
    }),
    [searchResults, setQuerySearch, setSearchResults]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
