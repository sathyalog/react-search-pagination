import React from "react";
import SearchBar from "../SearchBar";
import Header from "../Header";
import AppProvider from "../../context/AppContext";


function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <div className="md:container md:mx-auto px-4 mt-12">
          <SearchBar />
        </div>
      </AppProvider>
    </>
  );
}

export default App;