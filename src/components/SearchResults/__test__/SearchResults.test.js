import { render, screen, fireEvent } from "@testing-library/react";
import SearchResults from "../index";
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
};

const nextHandler= jest.fn();
const prevHandler = jest.fn();

describe("render SearchBar component", () => {
  it("Search results component rendered", () => {
    render(
      <AppContext.Provider value={context}>
        <SearchResults />
      </AppContext.Provider>
    );
    const findOneResult = screen.getByText("Sky Broadband");
    expect(findOneResult).toBeInTheDocument();
  });

  it('find prev or next buttons', () => {
    render(
        <AppContext.Provider value={context}>
          <SearchResults />
        </AppContext.Provider>
      );
      const findPrevButton = screen.getByText("Prev");
      const findNextButton = screen.getByText("Next");
      fireEvent.click(findPrevButton);
      fireEvent.click(findNextButton);
  })
});
