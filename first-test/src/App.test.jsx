import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";
import { kebabCaseToTitleCase } from "./helpers";

test("Button Test", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("medium-violet-red");
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("Checkbox test", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toBeEnabled();
  const checkBoxElement = screen.getByRole("checkbox", { name: /checkbox/i });
  expect(checkBoxElement).not.toBeChecked();
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({
    opacity: 50,
    cursor: "not-allowed",
  });
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
});

describe("helperTest1", () => {
  test("no-hyphen", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("one-hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("no-hyphen", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
