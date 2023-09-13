import Counter from "./counter";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Counter", () => {
  it("counter displays initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent.trim(0));
    expect(countValue).toEqual(0);
  });

  it("count should increment by one if add is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBttn = screen.getByRole("button", { name: "Add" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  it("count should decrement by one if minus is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrmnettBtn = screen.getByRole("button", { name: "Minus" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(decrmnettBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
  it("count should be 0 if restart button is clicked", () => {
    render(<Counter initialCount={23} />);
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(23);
    fireEvent.click(restartBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should be switch if switch button is clicked", () => {
    render(<Counter initialCount={5} />);
    const switchBtn = screen.getByRole("button", { name: "Switch" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(5);
    fireEvent.click(switchBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-5);
  });
});

describe("counter Snapshot", () => {
  it("Should match DOM snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
