import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  test("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment" });

    // Ensure initial value is 0
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    // Fire the increment event
    fireEvent.click(incrementBttn);

    // Ensure the count is incremented
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  test("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBttn = getByRole("button", { name: "Decrement" });

    // Ensure initial value is 0
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    // Fire the decrement event
    fireEvent.click(decrementBttn);

    // Ensure the count is decremented
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  test("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = getByRole("button", { name: "Restart" });

    // Ensure initial value is 50
    expect(Number(getByTestId("count").textContent)).toEqual(50);

    // Fire the restart event
    fireEvent.click(restartBttn);

    // Ensure the count resets to 0
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  test("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = getByRole("button", { name: "Switch Signs" });

    // Ensure initial value is 50
    expect(Number(getByTestId("count").textContent)).toEqual(50);

    // Fire the switch signs event
    fireEvent.click(switchBttn);

    // Ensure the count value changes to -50
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
