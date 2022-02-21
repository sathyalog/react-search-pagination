import { render, fireEvent, screen, hasInputValue } from "@testing-library/react";
import SearchBar from "../index";
import { AppContext } from "../../../context/AppContext";

const context = {
    searchResults: {
        results: [
          {
            title: "Sky Broadband",
            url: "https://www.sky.com/help/articles/contacting-sky",
            description:
              "How to contact Sky for any help needed with our products and services.",
          },
        ],
      },
  setQuerySearch: jest.fn(),
  setSearchResults: jest.fn()
};

const handleSubmission = jest.fn();
const searchQuery = jest.fn();

describe("render SearchBar component", () => {
  it("query search in SearchBar component", () => {
    render(
      <AppContext.Provider value={context}>
        <SearchBar onChange={searchQuery} />
      </AppContext.Provider>
    );
    
    const searchInput = screen.queryByPlaceholderText('Search Query...')
    fireEvent.change(searchInput, { target: { value: 'sky' } })
    expect(searchInput.value).toBe('sky')
    fireEvent.submit(screen.queryByTestId("form"));
    const findTableDescription = screen.getByText(
        "How to contact Sky for any help needed with our products and services."
      );
    expect(findTableDescription).toBeInTheDocument();
  });
});