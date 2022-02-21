import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("render Header component", () => {
  it("Header component", () => {
    render(<Header />);

    const image = screen.getByAltText("logo");

    expect(image.src).toContain("http://localhost/sky-logo.jpg");
  });
});
