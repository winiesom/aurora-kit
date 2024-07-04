import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button/Button";

describe("Button component", () => {
  it("renders with the correct label", () => {
    const { getByText } = render(
      <Button label="Click me" onClick={() => {}} />
    );
    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  //   it("applies custom class when provided", () => {
  //     const { getByText } = render(
  //       <Button label="Click me" onClick={() => {}} className="custom-class" />
  //     );
  //     const button = getByText("Click me");
  //     expect(button).toHaveClass("custom-class");
  //   });
});
